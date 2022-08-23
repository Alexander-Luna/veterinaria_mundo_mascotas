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
import Public from "./Routes/Public";
import Dashboard from "./Pages/dashboard/Dashboard";
import Protected from "./Routes/Protected";
import Inicio from "./Pages/dashboard/modules/inicio/Inicio";
import Cliente from "./Pages/dashboard/modules/Cliente/Cliente";

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Public><Home /></Public>} />
            <Route path="/nosotros" element={<Public><Nosotros /></Public>} />
            <Route path="/servicios" element={<Public><Servicios /></Public>} />
            <Route path="/productos" element={<Public>< Productos /></Public>} />
            <Route path="/contactos" element={<Public><Contactos /></Public>} />
            <Route component={Page404} />
            <Route path="/login" element={<Public><Login /></Public>} />
            <Route path="/register" element={<Public><Register /></Public>} />
            <Route exact path="/dashboard" element={<Protected  title="Dashboard"><Inicio/></Protected>}/>
            <Route exact path="/clientes" element={<Protected  title="Dashboard"><Cliente/></Protected>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App;
