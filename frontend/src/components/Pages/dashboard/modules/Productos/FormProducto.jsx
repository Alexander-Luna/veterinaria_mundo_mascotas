import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import style from './style.module.scss'
import Input from "../molecules/input/Input";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import alertify from "alertifyjs";
import {getCategorias, getProducto, putProducto} from "../../../../../redux/actionCreators";
import Select from "../molecules/Select";


const FormProducto=(props)=>{
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
  const [dcategorias, setDcategorias] = useState([]);

  let { id } = useParams();
  const{producto,putproducto,categorias}=props

  useEffect(() => {
    store.dispatch(getProducto(id))
    store.dispatch(getCategorias())
  }, [id])

  useEffect(() => {
    setDcategorias([])
    categorias?.categorias?.map(e=>{
      const data= {
        'value':e.cod_categoria,
        'label':e.nombre
      };
      setDcategorias(
        dcategorias=>[
          ...dcategorias,
          data
        ]
      )
    })
  }, [categorias]);

  useEffect(() => {
    setNombre(producto?.producto?.nombre)
    setCodigo(producto?.producto?.codigo)
    setFecha_caducidad(producto?.producto?.fecha_caducidad)
    setDescripcion(producto?.producto?.descripcion)
    setPrecio_compra(producto?.producto?.precio_compra)
    setPrecio_venta(producto?.producto?.precio_venta)
    setCantidad(producto?.producto?.cantidad)
    setCod_categoria(producto?.producto?.cod_categoria)
  }, [producto]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setBtnSubmit(true)
    const data = {
      nombre:nombre,
      imagen:imagen,
      codigo:codigo,
      fecha_caducidad:fecha_caducidad,
      descripcion:descripcion,
      precio_compra:precio_compra,
      precio_venta:precio_venta,
      cantidad:cantidad,
      cod_categoria:cod_categoria
    }
    props.putProducto(id,data)
  }

  useEffect(() => {
    alertify.set("notifier", "position", "bottom-rigth");
    if(typeof putproducto.error!='undefined'){
      putproducto.error===false?alertify.success("Se actualizó correctamente"):alertify.error("Ocurrió un error al intentar Actualizar")
      setBtnSubmit(false)
      props.putProducto()
    }
  }, [putproducto])


  return (<>
  <div className="card-header py-3 ">
    <div>
      <h6 className="col-11 m-0 font-weight-bold text-primary">Editar Producto {nombre}</h6>
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
            <Select
              label="Categoria"
              required
              options={dcategorias}
              id="cod_categoria"
              name="cod_categoria"
              handleChange={(e)=>setCod_categoria(e.target.value)}
              defaultValue={cod_categoria}
              sty={"col-lg-6"}
            />
            <Input
              sty="col-md-12 col-lg-6"
              id="imagen"
              name="imagen"
              type="hidden"
              label="Imagen"
              required
              /*onChange={(e)=>setImagen(e.target.value)}*/
              defaultValue='imagen'
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

const mapStateToProps = (state) => ({
  producto: state.ProductoState,
  putproducto: state.putProductoState,
  categorias:state.CategoriasState,
})

const mapDispatchToProps = {
  putProducto, getProducto
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProducto);

