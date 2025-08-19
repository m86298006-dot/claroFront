import "./ServiceOptions.css"

function ServiceOptions({ onSelect }) {
  const options = [
    { id: 1, label: "Pago de Facturas", icon: "🧾" },
    { id: 2, label: "Recargas", icon: "📱" },
    { id: 3, label: "Paquetes", icon: "📦" },
  ]

  return (
    <div className="services">
      {options.map((opt) => (
        <div
          key={opt.id}
          className="service-card"
          onClick={() => onSelect(opt)}
        >
          <span className="icon">{opt.icon}</span>
          <p>{opt.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceOptions
