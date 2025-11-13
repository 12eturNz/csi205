import React, { useState, useEffect } from "react";
import Value from "./Value";

export default function Temperatures() {
  const [celsius, setCelsius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState((25 * 9) / 5 + 32);
  const [kelvin, setKelvin] = useState(25 + 273.15);
  const [active, setActive] = useState("celsius"); 

  useEffect(() => {
    if (active === "celsius") {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit((c * 9) / 5 + 32);
        setKelvin(c + 273.15);
      }
    }
  }, [celsius, active]);

  useEffect(() => {
    if (active === "fahrenheit") {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        setCelsius(((f - 32) * 5) / 9);
        setKelvin(((f - 32) * 5) / 9 + 273.15);
      }
    }
  }, [fahrenheit, active]);

  useEffect(() => {
    if (active === "kelvin") {
      const k = parseFloat(kelvin);
      if (!isNaN(k)) {
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9) / 5 + 32);
      }
    }
  }, [kelvin, active]);

  const handleCelsius = (val) => {
    setActive("celsius");
    setCelsius(val);
  };

  const handleFahrenheit = (val) => {
    setActive("fahrenheit");
    setFahrenheit(val);
  };

  const handleKelvin = (val) => {
    setActive("kelvin");
    setKelvin(val);
  };

  return (
    <div style={{
      padding: "2.5rem",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#3b82f6",
        marginBottom: "2rem"
      }}>
        Temperature Converter
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {/* Celsius */}
        <TempUnit
          label="CELSIUS"
          symbol="°C"
          value={celsius}
          onChange={handleCelsius}
          color="rgb(52, 152, 219)"
        />

        {/* Fahrenheit */}
        <TempUnit
          label="FAHRENHEIT"
          symbol="°F"
          value={fahrenheit}
          onChange={handleFahrenheit}
          color="rgb(231, 76, 60)"
        />

        {/* Kelvin */}
        <TempUnit
          label="KELVIN"
          symbol="K"
          value={kelvin}
          onChange={handleKelvin}
          color="rgb(46, 204, 113)"
        />
      </div>
    </div>
  );
}

function TempUnit({ label, symbol, value, onChange, color }) {
  const buttonStyle = {
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "50%",
    fontSize: "1.25rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{
      padding: "1.5rem",
      backgroundColor: "#f8fafc",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <div style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: color
      }}>
        <Value value={value} /> {symbol}
      </div>
      
      <h3 style={{
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: color
      }}>
        {label}
      </h3>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem"
      }}>
        <button
          onClick={() => onChange(parseFloat(value) - 1)}
          style={{
            ...buttonStyle,
            backgroundColor: "#ef4444",
            color: "white",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
          onMouseDown={e => e.target.style.transform = "scale(0.95)"}
        >
          –
        </button>
        
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100px",
            padding: "0.75rem",
            textAlign: "center",
            border: "2px solid #e2e8f0",
            borderRadius: "8px",
            fontSize: "1.125rem",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={e => e.target.style.borderColor = color}
          onBlur={e => e.target.style.borderColor = "#e2e8f0"}
        />
        
        <button
          onClick={() => onChange(parseFloat(value) + 1)}
          style={{
            ...buttonStyle,
            backgroundColor: "#22c55e",
            color: "white",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
          onMouseDown={e => e.target.style.transform = "scale(0.95)"}
        >
          +
        </button>
      </div>
    </div>
  );
}