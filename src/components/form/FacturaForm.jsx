import { useState } from "react"
import "./FacturaForm.css"
import PagoForm from "../PagoForm/PagoForm"

function FacturaForm({ onBack }) {
  const [tipoServicio, setTipoServicio] = useState("")
  const [numeroCuenta, setNumeroCuenta] = useState("")
  const [continuar, setContinuar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!tipoServicio || !numeroCuenta) {
      alert("Por favor selecciona un tipo de servicio y escribe el número de cuenta.")
      return
    }
    setContinuar(true)
  }

  if (continuar) {
    return <PagoForm onBack={() => setContinuar(false)} />
  }

  return (
    <div className="factura-box">
      <h2>Pago de Facturas</h2>
      <form onSubmit={handleSubmit}>
        <div className="service-options">
          <label className={`service-option ${tipoServicio === "Postpago" ? "selected" : ""}`}>
            <input
              type="radio"
              name="service"
              value="Postpago"
              onChange={(e) => setTipoServicio(e.target.value)}
            />
            <img
              src="https://portalpagos.claro.com.co/personal/claro/imagenes/newClaro/icono-postpago.png"
              alt="Postpago"
            />
            <span>Postpago</span>
          </label>

          <label className={`service-option ${tipoServicio === "Hogar y Multiplay" ? "selected" : ""}`}>
            <input
              type="radio"
              name="service"
              value="Hogar y Multiplay"
              onChange={(e) => setTipoServicio(e.target.value)}
            />
            <img
              src="https://portalpagos.claro.com.co/personal/claro/imagenes/newClaro/icono-factura-hogar.png"
              alt="Hogar y Multiplay"
            />
            <span>Hogar y Multiplay</span>
          </label>

        
        </div>

        <div className="form-group">
          <label>Número de cuenta o referencia</label>
          <input
            type="text"
            value={numeroCuenta}
            onChange={(e) => setNumeroCuenta(e.target.value)}
            placeholder="Ej: 123456789"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={onBack}>
            Cancelar
          </button>
          <button type="submit" className="btn-continue">
            Continuar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FacturaForm
