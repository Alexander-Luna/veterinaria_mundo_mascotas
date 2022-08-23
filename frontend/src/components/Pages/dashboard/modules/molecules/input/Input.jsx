import style from './styles.module.scss'
const Input = (props)=>{
  const {id, label,name,type,required, onChange, disabled,onBlur}=props

  return(<div className={`${style.input} ${props.sty?props.sty:''}`} >
    <input onBlur={onBlur} disabled={disabled} onChange={onChange} required={required} type={type} id={id}  name={name} value={props.defaultValue?props.defaultValue:''} className={'form-input form-control'}   placeholder=" "/>
    <label htmlFor={id} className="form-label">{label}</label>
  </div>)
}

export default Input
