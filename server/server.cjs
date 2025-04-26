const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post("/api/generate", (req, res) => {
  try {
    const python = spawn("python3", ["server/script.py"]);
    let result = "";

    python.stdin.write(req.body.prompt + "\n");
    python.stdin.end();

    python.stdout.on("data", (data) => {
      result += data.toString();
    });

    python.on("close", (code) => {
      if (code !== 0) {
        return res.status(500).json({ response: "Script error" });
      }
      res.json({ response: result.trim() });
    });

    python.stderr.on("data", (data) => {
      console.error(`Python error: ${data}`);
    });
  } catch (error) {
    res.status(500).json({ response: "Server error: " + error.message });
  }
});

// For any routes not matched by the backend, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
