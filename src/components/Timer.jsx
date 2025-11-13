import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleToggle = () => {
    setRunning((prev) => !prev);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const displayTime = () => {
    if (minutes > 0) {
      return `${minutes}m ${String(secs).padStart(2, '0')}s`;
    }
    return `${secs}s`;
  };
  
  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "2.5rem",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
        ⏱ TIMER
      </h3>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
        <div className="text-3xl font-mono text-right text-gray-800">
          {displayTime()}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleReset}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          ↻ Reset
        </button>
        
        <button
          onClick={handleToggle}
          className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
            running 
              ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {running ? "❚❚ Pause" : "▷ Run"}
        </button>
      </div>
    </div>
  );
}