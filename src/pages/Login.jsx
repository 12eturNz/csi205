import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = auth.login(username, password);
    if (result.ok) {
      navigate("/");
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div 
      style={{ 
        // ธีม Light/Modern Card
        maxWidth: "400px", 
        margin: "80px auto", 
        padding: "40px",
        backgroundColor: "#FFFFFF", // พื้นหลังขาว
        borderRadius: "12px", 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", // เงาอ่อนๆ
        color: "#212529", // Text Color (Dark)
        borderTop: '5px solid #007BFF' // Accent Line: Blue
      }}
    >
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "30px", 
        color: "#007BFF", // Primary Blue
        fontSize: '2.2rem',
        fontWeight: 700,
        letterSpacing: '0.5px'
      }}>
         เข้าสู่ระบบ
      </h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "25px" }}>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              border: '1px solid #CED4DA', // Gray border
              backgroundColor: '#F8F9FA', // Off-white input background
              color: '#212529',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            // Focus Effect: Blue outline/border
            onFocus={(e) => { e.target.style.borderColor = '#007BFF'; e.target.style.boxShadow = '0 0 0 0.25rem rgba(0, 123, 255, 0.25)'; }}
            onBlur={(e) => { e.target.style.borderColor = '#CED4DA'; e.target.style.boxShadow = 'none'; }}
          />
        </div>
        <div style={{ marginBottom: "35px" }}>
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              border: '1px solid #CED4DA',
              backgroundColor: '#F8F9FA',
              color: '#212529',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#007BFF'; e.target.style.boxShadow = '0 0 0 0.25rem rgba(0, 123, 255, 0.25)'; }}
            onBlur={(e) => { e.target.style.borderColor = '#CED4DA'; e.target.style.boxShadow = 'none'; }}
          />
        </div>
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#007BFF', // Primary Blue Button
            color: '#FFFFFF', 
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
            transition: 'background-color 0.2s, box-shadow 0.2s',
          }}
          // Hover Effect
          onMouseOver={(e) => { e.target.style.backgroundColor = '#0056B3'; e.target.style.boxShadow = '0 4px 20px rgba(0, 123, 255, 0.5)'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = '#007BFF'; e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)'; }}
        >
          เข้าสู่ระบบ
        </button>
      </form>
      <div style={{ 
        marginTop: "30px", 
        fontSize: "14px", 
        textAlign: "center",
        color: "#6C757D" // Muted info text
      }}>
        💡 ทดลองใช้: <strong style={{ color: '#28A745' }}>user/user123</strong> หรือ <strong style={{ color: '#28A745' }}>admin/admin123</strong>
      </div>
    </div>
  );
}