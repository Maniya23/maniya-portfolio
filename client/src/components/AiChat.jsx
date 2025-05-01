// src/components/AiSection.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AiChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const handleAsk = async () => {
    setShowModal(true);
    setIsLoading(true);
    setResponse("");
    setDisplayedText("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Error fetching response.");
    } finally {
      setIsLoading(false);
    }
  };

  // Typing effect
  useEffect(() => {
    if (!isLoading && response) {
      setDisplayedText(""); 
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + response.charAt(index));
        index++;
        if (index >= response.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isLoading, response]);

  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ask About Manishka (Maniya-AI)</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 rounded-md bg-gray-800 text-white mb-4"
          rows={4}
          placeholder="Type your question here..."
        />
        <button
          onClick={handleAsk}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md font-semibold"
        >
          Ask
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-lg p-8 w-full max-w-2xl relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">AI Response</h3>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Generating answer...</p>
              </div>
            ) : (
              <p className="whitespace-pre-line">{displayedText}</p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
