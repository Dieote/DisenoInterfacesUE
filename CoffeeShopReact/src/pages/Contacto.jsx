import { useState } from 'react'

const INITIAL = { nombre: '', email: '', mensaje: '', terminos: false }

export default function Contacto() {
  const [form, setForm] = useState(INITIAL)
  const [validated, setValidated] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidated(true)
    if (e.target.checkValidity()) {
      setSent(true)
      setForm(INITIAL)
      setValidated(false)
    }
  }

  return (
    <section className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Contacto</h2>

      {sent && (
        <div className="alert alert-success alert-dismissible" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
          <button type="button" className="btn-close" onClick={() => setSent(false)}></button>
        </div>
      )}

      <form
        className={`needs-validation${validated ? ' was-validated' : ''}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Ingresá tu nombre.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Ingresá un email válido.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">El mensaje no puede estar vacío.</div>
        </div>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="terminos"
            checked={form.terminos}
            onChange={handleChange}
            required
          />
          <label className="form-check-label">Acepto los términos y condiciones</label>
          <div className="invalid-feedback">Debés aceptar las condiciones.</div>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Enviar
        </button>
      </form>

      <div className="text-center my-5">
        <img src="/img/cafe1.jpg" className="me-3 rounded" style={{ width: '45%' }} alt="Café 1" />
        <img src="/img/cafe2.jpg" className="ms-3 rounded" style={{ width: '45%' }} alt="Café 2" />
      </div>
    </section>
  )
}
