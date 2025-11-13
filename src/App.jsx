// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// 1. Import สิ่งที่เราต้องการ
import MainLayout from "./components/MainLayout"; // <-- Import Layout ใหม่
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Import ที่กันไว้

// Pages
import Login from "./pages/Login";
import Home from "./pages/PageHome";
import Calculator from "./pages/PageCalculator";
import Animation from "./pages/PageAnimation";
import Products from "./pages/PageProducts";
import Cart from "./pages/PageCart";
import Todos from "./components/Todos"; // (จากโค้ดเดิมของคุณ)
import PageComponent from "./pages/PageComponent"; // (จากโค้ดเดิมของคุณ)


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* 💡 เพิ่ม basename="/csi205" เข้าไปใน Router */}
        <Router basename="/csi205">
          {/* 2. ลบ <Header>, <Navbar>, <Footer> และ <div ...> รอบนอกทิ้งไปเลย */}
          
          <Routes>
            {/* Route 1: หน้า Login (อยู่นอกสุด, ไม่ใช้ MainLayout) */}
            <Route path="/login" element={<Login />} />

            {/* Route 2: หน้าอื่นๆ ทั้งหมด (จะถูกหุ้มด้วย MainLayout) */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              {/* 3. Route ลูกทั้งหมดนี้จะไปแสดงผลใน <Outlet /> ของ MainLayout */}
              <Route index element={<Home />} /> {/* 'index' หมายถึง path="/" */}
              <Route path="components" element={<PageComponent />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="animation" element={<Animation />} />
              <Route path="todos" element={<Todos />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
            </Route>

          </Routes>
          
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;