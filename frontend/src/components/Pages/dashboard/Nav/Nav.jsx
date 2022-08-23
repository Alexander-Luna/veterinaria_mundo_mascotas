import {Menu, MenuItem, ProSidebar, SidebarFooter} from "react-pro-sidebar"
import {useEffect, useState} from "react"
import {Link, NavLink} from "react-router-dom";
import {ImDownload, ImDownload2, ImExit} from "react-icons/im";
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";


const Nav=(props)=>{
  const { toggled, handleToggleSidebar, match, nav }=props
  const [collapsed, setCollapsed] = useState(false)


  const handleCollapsedChange = (checked) => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      breakPoint="md"
      toggled={toggled}
      onToggle={handleToggleSidebar}
    >
      {/*{nav.usernav ? <ItemNav data={nav.usernav} /> : <></>}*/}
      <Menu iconShape="circle">
        <MenuItem icon={<ImDownload2 />}>
          <a href="/demo" target="_blank">demo</a>
        </MenuItem>
      </Menu>
      <div className="btn-logout-bar">
        <Menu>
          <MenuItem icon={<ImExit />}>
            <NavLink to="/logout">Salir</NavLink>
          </MenuItem>
        </Menu>
      </div>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <span onClick={handleCollapsedChange} className="btn text-white">
            {collapsed ? <FaChevronCircleRight /> : <FaChevronCircleLeft />}
          </span>
        </div>
      </SidebarFooter>
    </ProSidebar>)
}

export default Nav;
