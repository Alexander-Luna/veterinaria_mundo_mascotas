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
import FormCliente from "./Pages/dashboard/modules/Cliente/FormCliente";
import Especies from "./Pages/dashboard/modules/Mascotas/Especies/Especies";
import FormEspecies from "./Pages/dashboard/modules/Mascotas/Especies/FormEspecies";
import Mascota from "./Pages/dashboard/modules/Mascotas/Mascota/Mascota";
import FormMascota from "./Pages/dashboard/modules/Mascotas/Mascota/FormMascota";
import Cart from "./Pages/Cart";
import Usuarios from "./Pages/dashboard/modules/Usuarios/Usuarios";
import FormUsuarios from "./Pages/dashboard/modules/Usuarios/FormUsuarios";
import Proveedores from "./Pages/dashboard/modules/Proveedores/Proveedores";
import FormProveedores from "./Pages/dashboard/modules/Proveedores/FormProveedores";
import Citas from "./Pages/dashboard/modules/Mascotas/Citas/Citas";
import FormHistoriaClinica from "./Pages/dashboard/modules/Mascotas/HistoriaClinica/FormHistoriaClinica";
import FormProductos from "./Pages/dashboard/modules/Productos/FormProductos";
import AdminProductos from "./Pages/dashboard/modules/Productos/AdminProductos";
import ResetPassword from "./Pages/ResetPassword";
import Salir from "./Pages/dashboard/Salir";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public><Home /></Public>} />
        <Route path="/salir" element={<Salir />} />
        <Route path="/nosotros" element={<Public><Nosotros /></Public>} />
        <Route path="/servicios" element={<Public><Servicios /></Public>} />
        <Route path="/productos" element={<Public>< Productos /></Public>} />
        <Route path="/contactos" element={<Public><Contactos /></Public>} />
        <Route path="/cart" element={<Public><Cart /></Public>} />
        <Route component={Page404} />
        <Route path="/login" element={<Public><Login /></Public>} />
        <Route path="/resetpassword" element={<Public><ResetPassword /></Public>} />
        <Route path="/register" element={<Public><Register /></Public>} />
        <Route exact path="/dashboard" element={<Protected title="Dashboard"><Inicio /></Protected>} />

        <Route exact path="/clientes" element={<Protected title="Clientes"><Cliente /></Protected>} />
        <Route exact path="/clientes/:id" element={<Protected title="Clientes"><FormCliente /></Protected>} />

        <Route exact path="/usuarios" element={<Protected title="Usuarios"><Usuarios /></Protected>} />
        <Route exact path="/usuarios/:id" element={<Protected title="Usuarios"><FormUsuarios /></Protected>} />

        <Route exact path="/proveedores" element={<Protected title="Proveedores"><Proveedores /></Protected>} />
        <Route exact path="/proveedores/:id" element={<Protected title="Proveedores"><FormProveedores /></Protected>} />

        <Route exact path="/admin/productos" element={<Protected title="Productos"><AdminProductos /></Protected>} />
        <Route exact path="/admin/productos/:id" element={<Protected title="Productos"><FormProductos /></Protected>} />


        <Route exact path="/mascotas/especies" element={<Protected title="Especies"><Especies /></Protected>} />
        <Route exact path="/mascotas/:id/citas/historia" element={<Protected title="Historia Clinica"><FormHistoriaClinica /></Protected>} />
        <Route exact path="/mascotas/especies/:id" element={<Protected title="Especies"><FormEspecies /></Protected>} />
        <Route exact path="/mascotas/:id/citas" element={<Protected title="Citas Mascota"><Citas /></Protected>} />


        <Route exact path="/mascotas/mascota" element={<Protected title="Mascotas"><Mascota /></Protected>} />
        <Route exact path="/mascotas/mascota/:id" element={<Protected title="Mascotas"><FormMascota /></Protected>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
