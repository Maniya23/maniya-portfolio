import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      // Start animation immediately for smoother effect
      setTimeout(() => setAnimateIn(true), 0);
    } else {
      setAnimateIn(false);
      // Wait for animation to finish before unmounting
      const timer = setTimeout(() => setShowModal(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div
        className={`bg-gray-900 rounded-lg p-6 max-w-lg w-full relative transform transition-all duration-500 ease-out ${
          animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
