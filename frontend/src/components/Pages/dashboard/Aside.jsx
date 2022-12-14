import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logopeque.png';
import {
  MdCategory,
  MdPointOfSale
} from "react-icons/md";
import { GiSittingDog, GiSniffingDog, GiWolfHead, GiBoxUnpacking } from "react-icons/gi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaBox,
  FaBoxOpen,
  FaRegLaughWink,
  FaHeart, FaUsers, FaAndroid, FaUser, FaSort, FaUserTie
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

const Aside = ({ toggled, handleToggleSidebar }) => {
  const location = useLocation();

  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="sidebar-header">
          <img className="logo" src={logo}
          />
          <p className="user-name text-white mb-2">Administrador</p>
          <p className="user-email">{JSON.parse(localStorage.getItem('user')).email}</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            <NavLink exact to={"/dashboard"}>
              dashboard
            </NavLink>
          </MenuItem>
          {
            JSON.parse(localStorage.getItem('user')).cod_rol!==2?<>
          <MenuItem icon={<FaUserTie />}>
            {" "}
            <NavLink to="/usuarios">
              Usuarios
            </NavLink>
          </MenuItem>
          {/*<MenuItem icon={<FaUser />}>
            {" "}
            <NavLink to="/clientes">
              Clientes
            </NavLink>
          </MenuItem>*/}
            </>:<></>}
        </Menu>
        <Menu iconShape="circle">
          {JSON.parse(localStorage.getItem('user')).cod_rol !== 2 ?
            <SubMenu
              title="Inventario"
              icon={<FaBoxOpen/>}
              data-element={location.pathname}
            >
              <MenuItem icon={<FaBox/>}>
                <NavLink exact to={"/admin/productos"}>
                  Productos
                </NavLink>
              </MenuItem>
              <MenuItem icon={<MdCategory/>}>
                <NavLink exact to={"/categorias"}>
                  Categorias
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FaUsers/>}>
                <NavLink exact to={"/proveedores"}>
                  Proveedores
                </NavLink>
              </MenuItem>
              {/*<MenuItem icon={<GiBoxUnpacking/>}>
                <NavLink exact to={"/pedidos"}>
                  Pedidos
                </NavLink>
              </MenuItem>*/}
            </SubMenu>
          :<></>}

          <SubMenu
            title="Mascotas"
            icon={<GiSittingDog />}
            data-element={location.pathname}
          >
            {JSON.parse(localStorage.getItem('user')).cod_rol !== 2 ?
              <MenuItem icon={<GiWolfHead/>}>
                <NavLink exact to={"/mascotas/especies"}>
                  Especies
                </NavLink>
              </MenuItem>
            :<></>}
            <MenuItem icon={<GiSniffingDog />}>
              <NavLink exact to={"/mascotas/mascota"}>
                Mascota
              </NavLink>
            </MenuItem>
            <MenuItem icon={<GiSniffingDog />}>
              <NavLink exact to={"/mascotas/citas"}>
                Citas
              </NavLink>
            </MenuItem>
          </SubMenu>
     {/*     {JSON.parse(localStorage.getItem('user')).cod_rol!==2?
          <MenuItem icon={<MdPointOfSale />}>
            {" "}
            <NavLink to="/vender">
              Realizar Venta
            </NavLink>
          </MenuItem>
          :<></>}*/}
          {/*          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="withPrefix"
            icon={<FaHeart />}
            data-element={location.pathname}
          >
            <MenuItem>
              <NavLink exact to={"/"}>
                submenu 1 Home
              </NavLink>
            </MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>*/}
          {/*          <SubMenu
            title="multiLevel"
            icon={<FaList />}
          >
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`submenu 3`}>
              <MenuItem>{"submenu 3.1"} </MenuItem>
              <MenuItem>"submenu 3.2"} </MenuItem>
              <SubMenu title={`submenu 3.3`}>
                <MenuItem>
                  {"submenu 3.1.1"} {" "}
                </MenuItem>
                <MenuItem>
                  {"submenu 3.1.2"} {" "}
                </MenuItem>
                <MenuItem>
                  {"submenu 3.1.3"} {" "}
                </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>*/}
        </Menu>

      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <span> Mundo Mascotas </span>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
