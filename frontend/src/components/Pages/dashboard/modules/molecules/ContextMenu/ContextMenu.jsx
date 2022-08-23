import style from './style.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";

const ContextMenu=({children})=>{

  const [xposition, setXposition] = useState(0);
  const [yposition, setYposition] = useState(0);

  const [show, setShow] = useState(true);
  const handleContextMenu=(e)=>{
    e.preventDefault()

    if(window.innerWidth-e.pageX<100){
      setXposition(e.pageX-100)
    }else{
      setXposition(e.pageX)
    }
    setXposition(e.pageX)
    if((window.innerHeight-e.pageY)<150){
      setYContextMenu(e.pageY-150)
    }else{
      setYContextMenu(e.pageY)
    }
    setShow('block')
  }

  const handleClick=(e)=>{
    e.preventDefault()
    setShow('none')
  }
  const items=[{
    "title":"Encuestas",
    "className":"fa fa-share",
    "to":`/projects//surveys`
  },
    {
      "title":"Miembros",
      "className":"fa fa-share",
      "to":`/projects/1/members`
    },
    {
      "title":"Modificar",
      "className":"fa fa-share",
      "to":`/projects/`
    },
    {
      "title":"Eliminar",
      "className":"fa fa-share",
      "to":`/projects/`
    }
  ]
 return <div onClick={handleClick} onContextMenu={handleContextMenu} >
    {children}
   <div  style={{top:`${yposition}px`,left:`${xposition}px`,display:show}} className={style.contextmenu} >
     <ul className={style.menu}>
       {items.map((e, index) =>{
         return <li key={index} ><Link to={e.to}><i className="fa fa-share"></i>{e.title}</Link></li>
       })
       }

     </ul>
   </div>
  </div>
}
export default ContextMenu
