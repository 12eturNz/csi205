import React, { createContext, useContext, useState } from "react";

// 1. สร้าง Context
const AuthContext = createContext(null);

// 2. สร้าง Provider (ตัวจัดการ State)
export const AuthProvider = ({ children }) => {
  // *** นี่คือ state ที่ ProtectedRoute ใช้เช็ก ***
  const [user, setUser] = useState(null);

  // 3. สร้างฟังก์ชัน Login
  const login = (username, password) => {
    // นี่คือ Logic ที่ Login.jsx เรียกใช้
    // (จำลองการตรวจสอบข้อมูล)
    if (username === "user" && password === "user123") {
      const userData = { username: "user", role: "user" };
      
      // *** จุดสำคัญที่สุด! ***
      // เราต้องอัปเดต state 'user' ที่นี่
      setUser(userData); 
      
      // คืนค่า { ok: true } ให้หน้า Login.jsx
      return { ok: true };
    }
    
    if (username === "admin" && password === "admin123") {
      const userData = { username: "admin", role: "admin" };

      // *** จุดสำคัญที่สุด! ***
      setUser(userData);

      return { ok: true };
    }

    // ถ้า Login ผิด ไม่ต้อง set อะไร และคืนค่า { ok: false }
    return { ok: false };
  };

  // 4. สร้างฟังก์ชัน Logout (เผื่อไว้)
  const logout = () => {
    setUser(null);
  };

  // 5. ส่งค่า 'user' และ 'login' ออกไป
  const value = {
    user, // <-- ProtectedRoute ใช้อันนี้
    login, // <-- Login.jsx ใช้อันนี้
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 6. สร้าง Hook (useAuth)
export const useAuth = () => {
  return useContext(AuthContext);
};