import React from 'react';

const headerStyle = {
  backgroundColor: '#9fe699',
  color: '#2c5282', // เปลี่ยนสีตัวอักษรให้เข้มขึ้น
  padding: '1.75rem',
  textAlign: 'center',
  fontSize: '1.75rem',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderBottom: '1px solid #86efac',
};

function Header() {
  return (
    <header style={headerStyle}>
      <div className="container mx-auto">
        <h1 className="font-bold tracking-wide">
          CSI205 การพัฒนาโปรแกรมส่วนหน้า
        </h1>
      </div>
    </header>
  );
}

export default Header;