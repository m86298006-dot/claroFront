import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="logo">Claro</span>
        <nav>
          <a href="#">Servicios</a>
          <a href="#">Beneficios</a>
          <a href="#">Tienda</a>
          <a href="#">Soporte</a>
          <a href="#">Información importante para usuarios</a>
        </nav>
      </div>
      <div className="navbar-right">
        <a href="#">Mi Claro</a>
        <span className="flag">🇨🇴</span>
      </div>
    </div>
  )
}

export default Navbar
