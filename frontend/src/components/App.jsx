import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./Pages/Home"
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios"
import Productos from "./Pages/Productos"
import Contactos from "./Pages/Contactos"
import Page404 from "./Pages/Page404"
import Login from "./Pages/Login";
import Register from './Pages/Register'
import Navbar from "./Nav/Navbar";
const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar
            imagen='logo'></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={< Productos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route component={Page404} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  )
}

export default App;
