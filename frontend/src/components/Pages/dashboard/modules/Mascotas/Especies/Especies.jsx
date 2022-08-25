import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Input from "../../molecules/input/Input";
import alertify from "alertifyjs";
import { deleteEspecie, getEspecies, postEspecie } from "../../../../../redux/actionCreators";

const Especies = () => {
  const { especies, postespecie, deleteespecie, match } = props

  const [show, setShow] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState(false);

  const [nombre_especie, setNombre_especie] = useState('');
  const [detalle, setDetalle] = useState('');


  //TRAER ESPECIEES
  useEffect(() => {
    store.dispatch(getEspecies())
  }, [match])


  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  //NUEVO ESPECIE
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      nombre_especie: nombre_especie,
      detalle: detalle,
    }
    props.postEspecie(data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if (typeof postespecie.error != 'undefined') {
      postespecie.error === false ? alertify.success("Se creó correctamente") : alertify.error("Ocurrió un error al intentar Guardar")
      setBtnSubmit(false)
      setShow(false)
      store.dispatch(getEspecies())
      props.postEspecie()
    }
  }, [postespecie])

  //ELIMINAR ESPECIE


  const handleDelete = (data) => {
    alertify.confirm('Eliminar Especie', `¿Seguro de eliminar el especie: ${data.name}?`, () => { props.deleteEspecie(data.id) }
      , function () {
      }).set('labels', { ok: 'Aceptar', cancel: 'Cancelar' });
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if (typeof deleteespecie.error != 'undefined') {
      deleteespecie.error === false ? alertify.success("Se eliminó correctamente") : alertify.error("No se puede eliminar")
      store.dispatch(getEspecies())
      props.deleteEspecie()
    }
  }, [deleteespecie])
  ////////////////////////

  return <>
    <div className="container-fluid">
      <div className="card-header py-3 d-flex">
        <h6 className="align-self-center col-11 m-0 font-weight-bold text-primary">Administrar Especies</h6>
        <Button className="btn btn-primary" variant="primary" onClick={handleShow}>
          Nuevo
        </Button>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Especie</th>
              <th scope="col">Detalle</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(especies.especies) ? especies.especies.map((e, index) => {
              return especies.especies.length === 0 ?
                <tr><td colSpan="8"><center>SIN DATOS..</center></td></tr>
                : <tr>
                  <th scope="row">{index + 1}</th>
                  <th>{e.cod_especie}</th>
                  <td>{e.nombre_especie}</td>
                  <td>{e.detalle}</td>
                  <td>
                    <Link to={`/especies/${e.cod_especie}`} className={global.icon} title="Editar">
                      <i className="fas fa-user-edit"></i>
                    </Link>
                    <a style={{ cursor: 'pointer' }} onClick={() => handleDelete({ 'name': e.nombre_especie, 'id': e.cod_especie })}
                      className="delete" title="Eliminar">
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>

                  {/*
                  <tr>
                    <th scope="row">1</th>
                    <td>Gato</td>
                    <td>Cautela en la crianza</td>
                    <td>
                      <Link to={`/mascotas/especies/1`} className={global.icon} title="Editar">
                        <i className="fas fa-user-edit"></i>
                      </Link>
                      <a style={{ cursor: 'pointer' }} onClick={() => handleDelete({ 'name': 'Gato', 'id': 1 })} className="delete" title="Eliminar">
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
            </tr>
            */}
                </tr>
            }) : <tr><td colSpan="8"><center>CARGANDO..</center></td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Nueva Especie</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit.bind()}>
        <Modal.Body>
          <Input
            sty="col-md-12"
            id="nombre_especie"
            name="nombre_especie"
            type="text"
            label="Especie"
            required
            onChange={(e) => setNombre_especie(e.target.value)}
            defaultValue={nombre_especie}
          />
          <Input
            sty="col-md-12"
            id="detalle"
            name="detalle"
            type="text"
            label="Detalle"
            required
            onChange={(e) => setDetalle(e.target.value)}
            defaultValue={detalle}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">{btnSubmit ? 'Guardando...' : 'Guardar'}</Button>
        </Modal.Footer>
      </form>
    </Modal>
  </>
}
const mapStateToProps = (state) => ({
  especies:state.EspeciesState,
  postespecie:state.postEspecieState,
  deleteespecie:state.deleteEspecieState
})

const mapDispatchToProps = {
  postEspecie,deleteEspecie
}

export default Especies;
