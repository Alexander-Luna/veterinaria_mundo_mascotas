import style from './styles.module.scss'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useState} from "react";

const Password = (props)=>{
  const {id, label,name,type,required, onChange, disabled,onBlur}=props
  const [view_password, setViewPassword] = useState(false);

  const styleye={
    position: 'absolute',
    right: '25px',
    zIndex: '10',
    top:'12px',
    fontSize: '18px',
    cursor: 'pointer'
  }

  return(<div className={`${style.input} ${props.sty?props.sty:''}`} >
    <div  onClick={()=>setViewPassword(!view_password)} style={styleye}>
      {view_password ? <FaEyeSlash /> : <FaEye />}
    </div>
    <input onBlur={onBlur} disabled={disabled} onChange={onChange} required={required} type={view_password?'text':'password'} id={id}  name={name} value={props.defaultValue?props.defaultValue:''} className={'form-input form-control'}   placeholder=" "/>
    <label htmlFor={id} className="form-label">{label}</label>
  </div>)
}


export default Password
