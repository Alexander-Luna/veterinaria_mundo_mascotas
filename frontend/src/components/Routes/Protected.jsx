import Dashboard from "../Pages/dashboard/Dashboard";
import {Navigate} from "react-router-dom";

const Protected=({children,title})=>{

  if (!localStorage.getItem("access-token")) {
    localStorage.clear();
    return <Navigate to={`/login`} />
  }

  return (
   <Dashboard title={title}>
      {children}
   </Dashboard>
  )
}

export default Protected;
