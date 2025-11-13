import React from 'react';
import { useCart } from '../context/CartContext';

export default function PageCart() {
  const { items, removeFromCart, total } = useCart();

  const handleCheckout = () => {
    alert(`Checkout initiated! Total amount: ฿${total}. (This function is a placeholder)`);
    // ในแอปพลิเคชันจริง คุณจะเรียก API หรือ logic การชำระเงินที่นี่
  };

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>ตะกร้าสินค้า</h2>
        <p>ไม่มีสินค้าในตะกร้า</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>ตะกร้าสินค้า</h2>
      
      <div style={{ 
        display: 'grid', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {items.map(item => (
          <div 
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px'
            }}
          >
            {/* แก้ไข: เปลี่ยนเป็นกล่องสีแทนรูป ตามที่เคยร้องขอ */}
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: item.color || '#cccccc', // ใช้ item.color ถ้ามี
                borderRadius: '4px',
                marginRight: '1rem',
              }}
            />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>฿{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ลบ
            </button>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: '2px solid #e5e7eb',
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3>รวมทั้งหมด: ฿{total}</h3>
        <button
          onClick={handleCheckout} // ✨ เพิ่ม onClick handler ที่นี่ ✨
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  );
}