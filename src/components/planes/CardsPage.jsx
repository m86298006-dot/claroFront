import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardsPage.css";

const iphones = [
  { id: "iphone-6s", modelo: "iPhone 6s / 6s Plus", precio: 15, features: ["Compatibilidad iOS 12 – 15", "Soporte llamadas y datos", "Bypass básico"] },
  { id: "iphone-7", modelo: "iPhone 7 / 7 Plus", precio: 17.5, features: ["Compatibilidad iOS 13 – 15", "Notificaciones activas", "Sin soporte iPay"] },
  { id: "iphone-8", modelo: "iPhone 8 / 8 Plus", precio: 20, features: ["Compatibilidad iOS 14 – 16", "Bypass con señal", "iServices habilitados"] },
  { id: "iphone-x", modelo: "iPhone X", precio: 22.5, features: ["iOS 14 – 16", "Soporte completo", "Sin OTA updates"] },
  { id: "iphone-xs", modelo: "iPhone XS / XS Max", precio: 27.5, features: ["iOS 15 – 17", "Notificaciones / iServices", "Soporte Untethered"] },
  { id: "iphone-11", modelo: "iPhone 11", precio: 30, features: ["iOS 15 – 17", "Soporte con señal", "iPay deshabilitado"] },
  { id: "iphone-12", modelo: "iPhone 12 / 12 Pro", precio: 40, features: ["iOS 16 – 17", "Bypass Premium", "Reinicio estable"] },
  { id: "iphone-13", modelo: "iPhone 13 / 13 Pro", precio: 50, features: ["iOS 16 – 18", "Soporte hasta 13 Pro Max", "iServices completos"] },
  { id: "iphone-14", modelo: "iPhone 14 / 14 Pro", precio: 60, features: ["iOS 16 – 18", "Soporte sin señal", "Untethered parcial"] },
  { id: "iphone-15", modelo: "iPhone 15 / 15 Pro", precio: 70, features: ["iOS 17 – 18", "Soporte en pruebas", "Funciones limitadas"] },
  { id: "iphone-16", modelo: "iPhone 16 / 16 Pro", precio: 80, features: ["iOS 18 – 18.6 beta", "Soporte inicial", "Compatibilidad parcial"] },
];


export default function CardsPage() {
  const navigate = useNavigate();

  const handleBuy = (iphone) => {
    navigate("/checkout", { state: iphone }); // 👈 pasamos el producto al checkout
  };

  return (
    <div className="cards-container">
      <h1 className="main-title">iRemovalPRO Services</h1>
      <h2 className="cards-title">Lista de precios Bypass por modelo</h2>

      <div className="cards-grid">
        {iphones.map((item) => (
          <div className="card" key={item.id} id={item.id}>
            <h3 className="card-model">{item.modelo}</h3>
            <p className="card-price">${item.precio} USD</p>
            <ul className="card-features">
              {item.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="card-button" onClick={() => handleBuy(item)}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
