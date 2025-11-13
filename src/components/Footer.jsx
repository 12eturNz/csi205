import React from 'react';

const footerStyle = {
  backgroundColor: '#8b3c68',
  color: 'white',
  padding: '2rem 0',
  marginTop: 'auto',
  borderTop: '1px solid rgba(255,255,255,0.1)',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-2">พัฒนาโดย พีรพงษ์ แซ่ตั้น</p>
        <p className="text-sm opacity-75">
          รหัสนักศึกษา 67158596 | สาขาวิทยาการคอมพิวเตอร์
        </p>
      </div>
    </footer>
  );
}

export default Footer;