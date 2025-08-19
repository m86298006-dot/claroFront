import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./PagoForm.css"

function PagoForm({ onBack }) {
  const [valor, setValor] = useState("")
  const [metodo, setMetodo] = useState("")
  const [mostrarRecibo, setMostrarRecibo] = useState(false)
  const navigate = useNavigate()

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  })

  const handleValorChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "")
    setValor(raw)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!valor || !metodo) {
      alert("Por favor ingresa un valor y selecciona un método de pago.")
      return
    }
    setMostrarRecibo(true)
  }

  const valorNum = Number(valor)
  const descuento = valorNum ? valorNum * 0.3 : 0
  const total = valorNum ? valorNum - descuento : 0

  return (
    <div className="pago-box">
      {!mostrarRecibo ? (
        <>
          <h2>Módulo de Pago</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Valor a pagar</label>
              <input
                type="text"
                value={valor ? formatter.format(valor) : ""}
                onChange={handleValorChange}
                placeholder="Ej: 50.000"
              />
            </div>

            <div className="payment-options">
              <label className={`payment-option ${metodo === "Nequi" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="metodo"
                  value="Nequi"
                  onChange={(e) => setMetodo(e.target.value)}
                />
                <img
                  src="https://copu.media/wp-content/uploads/2023/10/Logo-Nequi-1.jpg"
                  alt="Nequi"
                />
                <span>Nequi</span>
              </label>

              <label className={`payment-option ${metodo === "Bancolombia" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="metodo"
                  value="Bancolombia"
                  onChange={(e) => setMetodo(e.target.value)}
                />
                <img
                  src="https://media.bio.site/sites/bb3ecaf9-8532-44ff-b566-83f2c3eb6779/v44QWTsuB8VkaFJuBJ7TVW.png"
                  alt="Bancolombia"
                />
                <span>Bancolombia</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onBack}>
                Volver
              </button>
              <button type="submit" className="btn-continue">
                Continuar
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h2>🧾 Recibo de Pago</h2>
          <div className="recibo">
            <p><strong>Método:</strong> {metodo}</p>
            <p><strong>Valor inicial:</strong> {formatter.format(valorNum)}</p>
            <p><strong>Descuento (30%):</strong> -{formatter.format(descuento)}</p>
            <hr />
            <p className="total"><strong>Total a pagar:</strong> {formatter.format(total)}</p>
          </div>
          <p className="mensaje-conv">
            🎉 Gracias por elegirnos, ahorraste un 30% en tu pago.
          </p>

          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setMostrarRecibo(false)}>
              Regresar
            </button>
            <button
              className="btn-continue"
              onClick={() => {
                if (metodo === "Bancolombia") {
                  navigate("/bancolombia", { state: { total } }) 
                } else if (metodo === "Nequi") {
                  navigate("/nequi", { state: { total } })  
                }
              }}
            >
              Confirmar pago
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default PagoForm
