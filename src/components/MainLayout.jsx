// src/components/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Navbar />
      
      <main style={{ flex: 1, padding: "20px" }}>
        {/* 2. <Outlet /> คือ "ที่ว่าง" ที่จะให้หน้าลูก (เช่น Home, Products) มาแสดงผล */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;