import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const producto = location.state;

  const [formData, setFormData] = useState({
    email: "",
    imei: "",
    metodoPago: "nequi",
  });

  const subtotal = producto?.precio || 0;
  const envio = 0;
  const total = subtotal + envio;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si selecciona Nequi o Bancolombia, redirigimos
    if (formData.metodoPago === "nequi") {
      navigate("/nequi", { state: { producto, formData, total } });
    } else if (formData.metodoPago === "bancolombia") {
      navigate("/bancolombia", { state: { producto, formData, total } });
    } else {
      alert(
        `✅ Compra realizada:\n\nProducto: ${producto?.modelo}\nPrecio: $${total} USD\nCorreo: ${formData.email}\nIMEI: ${formData.imei}\nMétodo de pago: Tarjeta`
      );
    }
  };

  return (
    <div className="checkout-container">
      {/* Columna izquierda */}
      <div className="checkout-card">
        <h2 className="checkout-title">Finalizar compra</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Correo electrónico
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tuemail@ejemplo.com"
              required
            />
          </label>

          <label>
            IMEI del teléfono
            <input
              type="text"
              name="imei"
              value={formData.imei}
              onChange={handleChange}
              placeholder="Ingresa tu IMEI"
              required
            />
          </label>

          <label>
            Método de pago
            <select
              name="metodoPago"
              value={formData.metodoPago}
              onChange={handleChange}
            >
              <option value="nequi">Nequi</option>
              <option value="bancolombia">Bancolombia</option>
              <option value="tarjeta">Tarjeta de crédito/débito</option>
            </select>
          </label>

          <button type="submit" className="pay-button">
            Pagar ahora
          </button>
        </form>
      </div>

      {/* Columna derecha */}
      <div className="checkout-summary">
        <h3 className="summary-title">Resumen del pedido</h3>

        {producto && (
          <div className="summary-item">
            <span>{producto.modelo}</span>
            <span className="summary-price">${producto.precio} USD</span>
          </div>
        )}

        <div className="summary-item">
          <span>Subtotal</span>
          <span className="summary-price">${subtotal} USD</span>
        </div>
        
        <div className="summary-item total">
          <span>Total</span>
          <span className="summary-total">${total} USD</span>
        </div>
      </div>
    </div>
  );
}
