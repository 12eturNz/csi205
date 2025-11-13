import React, { useState } from "react";
import Value from "./Value";

export default function Adder() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = parseFloat(a) + parseFloat(b);

  const NumberControl = ({ label, value, onChange }) => (
    <div style={{ textAlign: "center" }}>
      <h4 style={{
        color: "#3b82f6",
        marginBottom: "0.75rem",
        fontSize: "1.25rem"
      }}>
        {label}
      </h4>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button
          onClick={() => onChange(value - 1)}
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          –
        </button>
        <span style={{
          padding: "0.25rem 1rem",
          backgroundColor: "#f8fafc",
          borderRadius: "4px",
          fontWeight: "bold"
        }}>
          <Value value={value} type="integer" />
        </span>
        <button
          onClick={() => onChange(value + 1)}
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div style={{
      padding: "2.5rem",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <h3 style={{
        color: "#3b82f6",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "1.5rem"
      }}>
        Adder
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        <NumberControl label="A" value={a} onChange={setA} />
        <NumberControl label="B" value={b} onChange={setB} />
      </div>

      <div style={{
        backgroundColor: "#eff6ff",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <span style={{ fontSize: "1.25rem" }}>
          {a} + {b} = <strong>{sum}</strong>
        </span>
      </div>
    </div>
  );
}