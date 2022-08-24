import {Link} from "react-router-dom";
import {useState} from 'react'
import style from './style.module.scss'
import Input from "../molecules/input/Input";


const FormProductos=({data})=>{
  const [btnSubmit, setBtnSubmit] = useState(false)

  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fecha_caducidad, setFecha_caducidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio_compra, setPrecio_compra] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [cod_categoria, setCod_categoria] = useState('');
  const [imagen, setImagen] = useState('');


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const form = e.target
    console.log(form)
    //props.putUser(id,data)
  }

  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Productos {/*data.name*/}</h6>
    </div>
  </div>
  <div className="row m-2">
    <div className="col-md-11">
      <div className="row">
        <form className={style.uform} onSubmit={handleSubmit.bind()}>
          <div className="row">
            <Input
              sty="col-md-12 col-lg-6"
              id="name"
              name="name"
              type="text"
              label="Nombre"
              required
              onChange={(e)=>setNombre(e.target.value)}
              defaultValue={nombre}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="codigo"
              name="codigo"
              type="text"
              label="Codigo"
              onChange={(e)=>setCodigo(e.target.value)}
              defaultValue={codigo}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="fecha_caducidad"
              name="fecha_caducidad"
              type="date"
              label="Fecha Caducidad"
              required
              onChange={(e)=>fecha_caducidad(e.target.value)}
              defaultValue={fecha_caducidad}
            />

            <Input
              sty="col-md-12 col-lg-6"
              id="descripcion"
              name="descripcion"
              type="text"
              label="Descripción"
              required
              onChange={(e)=>setDescripcion(e.target.value)}
              defaultValue={descripcion}
            />

            <Input
              sty="col-md-12 col-lg-6"
              id="precio_compra"
              name="precio_compra"
              type="text"
              label="Precio Compra"
              required
              onChange={(e)=>setPrecio_compra(e.target.value)}
              defaultValue={precio_compra}
            />

            <Input
              sty="col-md-12 col-lg-6"
              id="precio_venta"
              name="precio_venta"
              type="text"
              label="Precio Venta"
              required
              onChange={(e)=>setPrecio_venta(e.target.value)}
              defaultValue={precio_venta}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="cantidad"
              name="cantidad"
              type="text"
              label="Cantidad"
              required
              onChange={(e)=>setCantidad(e.target.value)}
              defaultValue={cantidad}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="cod_categoria"
              name="cod_categoria"
              type="text"
              label="Categoria"
              required
              onChange={(e)=>setCod_categoria(e.target.value)}
              defaultValue={cod_categoria}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="imagen"
              name="imagen"
              type="file"
              label="Imagen"
              required
              onChange={(e)=>setImagen(e.target.value)}
              defaultValue={imagen}
            />
            <div>
              <button type="submit" className="btn btn-primary col-md-8 col-lg-3">{btnSubmit ? 'Guardando...' : 'Guardar'}</button>
              <Link to={'/admin/productos'} className="btn btn-secondary col-md-8 col-lg-3 ms-3">Cancelar</Link>
            </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</>)
}

export default FormProductos;
