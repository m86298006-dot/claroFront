import { useState } from "react"
import Navbar from "./components/navBar/NavBar"
import Steps from "./components/steps/Steps"
import ServiceOptions from "./components/opcions/ServiceOptions"
import FacturaForm from "./components/form/FacturaForm"
import "./App.css"

function MainApp() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)

  const handleBack = () => {
    setSelectedService(null)
    setStep(1)
  }

  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>
          Portal de <span className="rojo">PAGOS</span> Y RECARGAS
        </h1>
        <Steps step={step} />
      </header>

      <main className="main">
        <div className="intro-text">
          <p>
            Realiza el pago de la factura de tus servicios Claro y haz
            recargas de manera fácil y desde donde quieras. También, puedes inscribir tu
            tarjeta de crédito para realizar el pago de tus facturas automáticamente.
          </p>
        </div>

        {!selectedService && (
          <ServiceOptions
            onSelect={(opt) => {
              setSelectedService(opt)
              setStep(2)
            }}
          />
        )}

        {selectedService && (
          <FacturaForm onBack={handleBack} />
        )}
      </main>
    </div>
  )
}

export default MainApp
