import React from "react";
import { MenuItem, SubMenu, Menu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import "../styles/fontawesome/css/all.css";

const ItemNav = ({ data }) => {
  let menu = [];
  data.map((e, index) => {
    menu.push(
      Object.entries(e.children).length === 0 ? (
        e.path ? (
          <Menu key={Math.random()} iconShape="circle">
            <MenuItem key={Math.random()} icon={<i className={`fas fa-${e.icon}`}></i>}>
              <NavLink key={Math.random()} to={e.path}>{e.name}</NavLink>
            </MenuItem>
          </Menu>
        ) : (
          <></>
        )
      ) : (
        <Menu key={Math.random()}  iconShape="circle">
          <SubMenu
            key={Math.random()}
            title={e.name}
            icon={<i className={`fas fa-${e.icon}`}></i>}
          >
            {e.children.map((sm, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={<i className={`fas fa-${sm.icon}`}></i>}
                  style={{marginLeft:"2rem"}}
                >
                  <NavLink key={Math.random()} to={sm.path}>{sm.name}</NavLink>
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
      )
    );
    return null;
  });
  return menu;
};

export default ItemNav
