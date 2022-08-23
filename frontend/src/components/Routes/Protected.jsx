import Dashboard from "../Pages/dashboard/Dashboard";

const Protected=({children,title})=>{

  return (
   <Dashboard title={title}>
      {children}
   </Dashboard>
  )
}

export default Protected;
