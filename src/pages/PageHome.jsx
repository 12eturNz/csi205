import React from 'react';

const homeStyle = {
  padding: '2rem',
  backgroundColor: '#fff',
  borderRadius: '12px',
  maxWidth: '800px',
  margin: '2rem auto',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
};

const imageContainerStyle = {
  width: '200px',
  height: '200px',
  margin: '0 auto 2rem',
  position: 'relative',
  borderRadius: '50%',
  padding: '5px',
  background: 'linear-gradient(45deg, #2ecc71, #3498db)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '4px solid white',
};

const sectionStyle = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  marginBottom: '1.5rem',
};

const titleStyle = {
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '2rem',
  fontSize: '2rem',
  borderBottom: '3px solid #2ecc71',
  paddingBottom: '0.5rem',
};

function PageHome() {
  return (
    <div style={homeStyle}>
      <h2 style={titleStyle}>หน้าแนะนำตัว</h2>

      <div style={imageContainerStyle}>
        <img
          src="/picture/stdempimg.png"
          alt="รูปนักศึกษา"
          style={imageStyle}
        />
      </div>

      <div style={sectionStyle}>
        <p style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#2c3e50', marginRight: '0.5rem' }}>รหัสนักศึกษา:</strong>
          <span>67158596</span>
        </p>
        <p style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#2c3e50', marginRight: '0.5rem' }}>ชื่อ-สกุล:</strong>
          <span>พีรพงษ์ แซ่ตั้น</span>
        </p>
        <p style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#2c3e50', marginRight: '0.5rem' }}>ชั้นปี/สาขา/คณะ:</strong>
          <span>ชั้นปีที่ 2 / สาขาวิทยาการคอมพิวเตอร์ / คณะเทคโนโลยีสารสนเทศ</span>
        </p>
        <p style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#2c3e50', marginRight: '0.5rem' }}>มหาวิทยาลัย:</strong>
          <span>มหาวิทยาลัยศรีปทุม</span>
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          borderLeft: '4px solid #2ecc71',
          paddingLeft: '1rem'
        }}>
          เป้าหมายในอนาคต
        </h3>
        <p style={{ lineHeight: '1.6' }}>
          ต้องการเป็น Software Engineer ที่มีความเชี่ยวชาญด้านการพัฒนาโปรแกรม
          และสร้างสรรค์ผลงานที่มีประโยชน์
        </p>
      </div>
    </div>
  );
}

export default PageHome;