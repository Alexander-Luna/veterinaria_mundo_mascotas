import React, {useEffect, useState} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/es.js';
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {deleteCita, getCitas, getMascotas, postCita} from "../../../../../redux/actionCreators";
import {connect} from "react-redux";
import store from "../../../../../redux/store";
import {Button, Modal} from "react-bootstrap";
import Input from "../molecules/input/Input";
import Select from "../molecules/Select";

const localizer = momentLocalizer(moment);

 const ReactBigCalendar=(props)=> {
   const [btnSubmit, setBtnSubmit] = useState(false);
  const [eventsData, setEventsData] = useState(events);
  const {match,citas,postcita,mascotas}=props
  const [show, setShow] = useState(false);
   const [fecha, setFecha] = useState('');
   const [hora, setHora] = useState('');
   const [tipo, setTipo] = useState('');
   const [detalle, setDetalle] = useState('');
   const [cod_mascota, setCod_mascota] = useState('');
   const [dmascotas, setDmascotas] = useState([]);

   useEffect(() => {
     setDmascotas([])
     mascotas?.mascotas?.map(e=>{
       const data= {
         'value':e.cod_mascota,
         'label':e.nombre
       };
       setDmascotas(
         dmascotas=>[
           ...dmascotas,
           data
         ]
       )
     })
   }, [mascotas]);

   useEffect(() => {
     store.dispatch(getCitas())
     store.dispatch(getMascotas())
   }, [match])

   useEffect(() => {
     setEventsData([])
     citas?.citas?.map((e,index)=>{
       const date=new Date(e.fecha+' '+ e.hora)
       const start=date.toISOString()
       const datend =date.setMinutes(15)

       const end=new Date(datend).toISOString()
       const title= e.nombre+' '+e.tipo;

       const data= {
         index,
         start,
         end,
         title
       };
       setEventsData(eventsData=>[
         ...eventsData,
           data
       ])
     })
   }, [citas]);





  const handleSelect = ({ start, end }) => {
/*    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
    console.log(JSON.stringify(eventsData))*/
  };

   const handleClose = () => setShow(false)
   const handleShow = () => {
     setShow(true)
   }

   const handleSubmit=(e)=>{
     e.preventDefault()
     const data = {
       fecha:fecha,
       hora:hora,
       tipo:tipo,
       detalle:detalle,
       cod_mascota:cod_mascota
     }
     props.postCita(data)
   }

  return (
    <div className="App">
      <Calendar
        views={["agenda", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "75vh" }}
        onSelectEvent={(event) => console.log(event.title)}
        onSelectSlot={handleSelect}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Cita</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit.bind()}>
          <Modal.Body>
            <Input
              sty="col-md-12"
              id="fecha"
              name="fecha"
              type="date"
              label="Fecha"
              required
              onChange={(e)=>setFecha(e.target.value)}
              defaultValue={fecha}
            />
            <Input
              sty="col-md-12"
              id="hora"
              name="hora"
              type="time"
              label="Hora"
              required
              onChange={(e)=>setHora(e.target.value)}
              defaultValue={hora}
            />
            <Input
              sty="col-md-12"
              id="tipo"
              name="tipo"
              type="text"
              label="Tipo"
              required
              onChange={(e)=>setTipo(e.target.value)}
              defaultValue={tipo}
            />
            <Input
              sty="col-md-12"
              id="detalle"
              name="detalle"
              type="text"
              label="Detalle"
              required
              onChange={(e)=>setDetalle(e.target.value)}
              defaultValue={detalle}
            />
            <Select
              label="Mascota"
              required
              options={dmascotas}
              id="cod_mascota"
              name="cod_mascota"
              handleChange={(e)=>setCod_mascota(e.target.value)}
              defaultValue={cod_mascota}
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  citas:state.CitasState,
  postcita:state.postCitaState,
  mascotas:state.MascotasState,
})

const mapDispatchToProps = {
  postCita, deleteCita
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactBigCalendar)

