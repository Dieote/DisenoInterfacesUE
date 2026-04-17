import { Routes, Route } from 'react-router-dom'
import { TemaProvider } from './context/TemaContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recetas from './pages/Recetas'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <TemaProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TemaProvider>
  )
}

export default App
