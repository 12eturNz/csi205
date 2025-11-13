import React from "react";
// 1. Import Component ทั้งหมดที่เราแยกไฟล์ออกมา
// (ใช้ ../ เพื่อถอยกลับออกจาก pages/ แล้วเข้าไปใน components/)
import Adder from "../components/Adder";
import Counter from "../components/Counter";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures";

// 2. Main Page Component (ที่เหลือแค่ส่วนจัดวาง Layout)
export default function PageComponent() {
  return (
    <div style={{ 
      padding: "2rem",
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
      <h2 style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "3rem",
        color: "#1e3a8a"
      }}>
        Components Demo
      </h2>
      
      {/* Row 1: Counter and Adder */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        <Counter />
        <Adder />
      </div>

      {/* Row 2: Timer */}
      <div style={{
        marginBottom: "2rem"
      }}>
        <Timer />
      </div>

      {/* Row 3: Temperature Converter */}
      <div>
        <Temperatures />
      </div>
    </div>
  );
}