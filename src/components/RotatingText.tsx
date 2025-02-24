import React, { useState, useEffect } from 'react';

const phrases = [
  "Approval is our middle name.",
  "Untangling healthcare—because red tape isn't our favorite color.",
  "Turning 'Hold, please' into 'You're good to go.'",
  "Streamlining care—because waiting isn't a treatment plan.",
  "Because your patients deserve yes, not stress.",
  "We handle the denials, you handle the smiles.",
  "Denying delays, not patient care."
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p 
      className={`text-4xl text-gray-300 transition-opacity duration-500 h-24 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {phrases[currentIndex]}
    </p>
  );
};

export default RotatingText;