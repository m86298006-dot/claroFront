import "./Steps.css"

function Steps({ step }) {
  const steps = [
    "Selecciona tu servicio",
    "Escoge el medio de pago",
    "Realiza el pago en línea",
    "Recibe la confirmación",
  ]

  return (
    <div className="steps">
      {steps.map((text, index) => (
        <div key={index} className={`step ${step === index + 1 ? "active" : ""}`}>
          <div className="icon">
            {index === 0 && "🖱️"}
            {index === 1 && "💳"}
            {index === 2 && "💲"}
            {index === 3 && "✅"}
          </div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default Steps
