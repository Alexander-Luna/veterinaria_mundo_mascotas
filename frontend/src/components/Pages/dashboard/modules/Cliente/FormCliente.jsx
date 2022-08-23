import {Link} from "react-router-dom";
import global from "../style.module.scss";

const FormCliente=()=>{
  return(<>
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="row">
            <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Clientes</h6>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="cedula">Cédula</label>
                  <input type="text" id="cedula" className="form-control" name="cedula" />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" className="form-control" name="nombre" />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="apellido">Apellido</label>
                  <input type="text" id="apellido" className="form-control" name="apellido" />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                 <div className="form-outline">
                   <label className="form-label" htmlFor="apellido">Correo Electronico</label>
                   <input type="text" id="email" className="form-control" name="email" />
                 </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="direccion">Dirección</label>
                  <input type="text" id="direccion" className="form-control" name="direccion" />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="celular">Celular</label>
                  <input type="text" id="celular" className="form-control" name="celular" />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <button type="submit" className={`btn btn-primary ${global.btn100px } ${global.m_left_10}`}>Guardar</button>
              <button type="submit" className={`btn btn-secondary ${global.btn100px} ${global.m_left_10}`}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>)
}

export default FormCliente;
