import style from '../Pages/dashboard/style.module.scss'
import {useState} from "react";
import Nav from "../Pages/dashboard/Nav/Nav";

const Protected=({children})=>{
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  return (
    <>
      <div className={style.body}>
        <Nav />
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <div className={style.container}>
          {/*<Header*/}
          {/*  handleToggleSidebar={handleToggleSidebar}*/}
          {/*  handleCollapsedChange={handleCollapsedChange}*/}
          {/*  toggled={toggled}*/}
          {/*/>*/}
          <main>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Protected;
