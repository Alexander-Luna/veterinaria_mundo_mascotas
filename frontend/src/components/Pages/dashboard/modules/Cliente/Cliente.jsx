import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";

const Cliente=()=>{
  return <>
   <div className="container-fluid">
     <div className="card shadow mb-4">
       <div className="card-header py-3">
         <div className="row">
           <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Clientes</h6>
           <Link to={'/clientes/nuevo'} className={`btn btn-primary ${global.btn100px}`}>Nuevo</Link>
         </div>
       </div>
       <div className="card-body">
         <table className="table">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Cédula</th>
             <th scope="col">Nombre</th>
             <th scope="col">Apellido</th>
             <th scope="col">Email</th>
             <th scope="col">Dirección</th>
             <th scope="col">Celular</th>
             <th scope="col">Acciones</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>0250366515</td>
             <td>Juan</td>
             <td>Peres</td>
             <td>jperes@mailes.es</td>
             <td>Algun Lado</td>
             <td>0980150689</td>
             <td>
              <Link to={`/users/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}}  className={`delete ${global.icon}`}  title="Eliminar">
                 <i className="fas fa-trash-alt"></i>
               </a>
             </td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>0250366516</td>
             <td>Juan</td>
             <td>Peres</td>
             <td>jperes@mailes.es</td>
             <td>Algun Lado</td>
             <td>0980150688</td>
             <td>
               <Link to={`/users/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}}  className={`delete ${global.icon}`}  title="Eliminar">
                 <i className="fas fa-trash-alt"></i>
               </a>
             </td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>0250366514</td>
             <td>Juan</td>
             <td>Peres</td>
             <td>jperes@mailes.es</td>
             <td>Algun Lado</td>
             <td>0980150623</td>
             <td>
               <Link to={`/users/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}}  className={`delete ${global.icon}`}  title="Eliminar">
                 <i className="fas fa-trash-alt"></i>
               </a>
             </td>
           </tr>
           <tr>
             <th scope="row">4</th>
             <td>0250366514</td>
             <td>Juan</td>
             <td>Peres</td>
             <td>jperes@mailes.es</td>
             <td>Algun Lado</td>
             <td>0980150685</td>
             <td>
               <Link to={`/users/1`} className={global.icon} title="Editar">
                 <i className="fas fa-user-edit"></i>
               </Link>
               <a style={{cursor:'pointer'}}  className={`delete ${global.icon}`}  title="Eliminar">
                 <i className="fas fa-trash-alt"></i>
               </a>
             </td>
           </tr>
           </tbody>
         </table>
       </div>
      </div>
   </div>
  </>
}

export default Cliente;
