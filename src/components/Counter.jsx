import React, { useState } from "react";
import Value from "./Value";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: "2.5rem",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h3 style={{
        color: "#3b82f6",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1.5rem"
      }}>
        Counter
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "24px",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "transform 0.1s",
          }}
          onMouseDown={e => e.target.style.transform = "scale(0.95)"}
          onMouseUp={e => e.target.style.transform = "scale(1)"}
        >
          –
        </button>

        <div style={{
          padding: "0.75rem 2rem",
          backgroundColor: "#f8fafc",
          borderRadius: "8px",
          fontSize: "2rem",
          fontWeight: "bold",
          minWidth: "120px"
        }}>
          <Value value={count} type="integer" />
        </div>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "24px",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "transform 0.1s",
          }}
          onMouseDown={e => e.target.style.transform = "scale(0.95)"}
          onMouseUp={e => e.target.style.transform = "scale(1)"}
        >
          +
        </button>
      </div>
    </div>
  );
}