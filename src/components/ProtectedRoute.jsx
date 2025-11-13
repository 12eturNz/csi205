// src/components/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. ดึงสถานะการ login จาก AuthContext
  // (ผมขอสมมติว่า context ของคุณมี 'user' object ที่จะเป็น null ถ้ายังไม่ login นะครับ)
  const { user } = useAuth(); 
  const location = useLocation();

  if (!user) {
    // 2. ถ้ายังไม่ login ให้เด้งไปหน้า /login
    // โดยเก็บ 'state' ว่าพยายามจะไปที่ไหน (location) 
    // เพื่อให้หน้า Login ส่งกลับมาถูกหลัง login สำเร็จ
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. ถ้า login แล้ว ก็ให้แสดงผล children (component ที่เราต้องการ) ตามปกติ
  return children;
};

export default ProtectedRoute;