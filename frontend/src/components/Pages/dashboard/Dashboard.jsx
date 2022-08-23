import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import "alertifyjs/build/css/themes/bootstrap.min.css";
import './style.scss'

function Dashboard(props) {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>
        <Header handleToggleSidebar={handleToggleSidebar} title={props.title} />
        <div className="app-content">{props.children}</div>
      </main>
    </div>
  );
}

export default Dashboard;

