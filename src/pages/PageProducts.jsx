import React, { useEffect, useState } from "react";
import { fetchProducts } from "../data/products";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // ใช้งาน fetchProducts จาก data/products.jsx
    const data = fetchProducts(); 
    setProducts(data);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>สินค้าทั้งหมด</h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center'
            }}
          >
            {/* ✨ แก้ไข: แทนที่ <img> ด้วย <div> เพื่อแสดงสีแทนรูป ✨ */}
            <div
              // ใช้ product.color เป็นพื้นหลัง
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: product.color || '#cccccc', // ใช้สีของสินค้า, ถ้าไม่มีให้ใช้สีเทา
                borderRadius: '4px',
                marginBottom: '1rem',
              }}
            />
            {/* ✨ สิ้นสุดการแก้ไข ✨ */}

            <h3 style={{ marginBottom: '0.5rem' }}>{product.name}</h3>
            {/* ผมใช้หน่วย ฿ ตามไฟล์ PageCart.jsx ล่าสุดที่ผมแก้ไขไป */}
            <p style={{ marginBottom: '1rem' }}>฿{product.price}</p> 
            <button
              onClick={() => addToCart(product)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;