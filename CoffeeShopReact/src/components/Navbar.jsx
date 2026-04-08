import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { dark, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">☕ Café Aroma</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                to="/"
                end
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                to="/productos"
              >
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          <button className="btn btn-outline-light ms-3" onClick={toggleTheme}>
            <i className={`bi ${dark ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
