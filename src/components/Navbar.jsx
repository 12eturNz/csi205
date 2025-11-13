import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const auth = useAuth();
  const cart = useCart();
  const location = useLocation();

  const linkStyle = (path) => ({
    padding: "8px 16px",
    color: location.pathname === path ? "#1d4ed8" : "#374151",
    textDecoration: "none",
    borderRadius: "6px",
    backgroundColor: location.pathname === path ? "#eff6ff" : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <nav style={{ 
      backgroundColor: "white", 
      padding: "1rem",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Link to="/" style={linkStyle("/")}>🏠 หน้าแรก</Link>
          <Link to="/components" style={linkStyle("/components")}>🧩 Components</Link>
          <Link to="/calculator" style={linkStyle("/calculator")}>🧮 Calculator</Link>
          <Link to="/animation" style={linkStyle("/animation")}>✨ Animation</Link>
          <Link to="/todos" style={linkStyle("/todos")}>📝 Todos</Link>
          <Link to="/products" style={linkStyle("/products")}>🛍️ สินค้า</Link>
          <Link to="/cart" style={linkStyle("/cart")}>🛒 ตะกร้าสินค้า</Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {auth?.user && (
            <Link to="/cart" style={{
              ...linkStyle("/cart"),
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              🛒 Cart
              {cart?.items?.length > 0 && (
                <span style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  borderRadius: "full",
                  padding: "2px 6px",
                  fontSize: "0.75rem"
                }}>
                  {cart.items.length}
                </span>
              )}
            </Link>
          )}

          {auth?.user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                padding: "6px 12px",
                backgroundColor: "#f3f4f6",
                borderRadius: "6px",
              }}>
                {auth.user.username}
              </span>
              <button 
                onClick={() => auth.logout()}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "#dc2626"}
                onMouseLeave={e => e.target.style.backgroundColor = "#ef4444"}
              >
                ออกจากระบบ
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              style={{
                padding: "6px 12px",
                backgroundColor: "#2563eb",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "background-color 0.3s ease"
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#1d4ed8"}
              onMouseLeave={e => e.target.style.backgroundColor = "#2563eb"}
            >
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
