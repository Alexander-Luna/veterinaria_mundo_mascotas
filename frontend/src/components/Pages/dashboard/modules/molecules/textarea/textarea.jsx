import style from './styles.module.scss'
const Textarea = (props)=>{
  const {id, label,name,type,required, onChange}=props
  return(<div className={`${style.input} ${props.sty}`} >
    <textarea onChange={onChange} required={required} id={id}  name={name} defaultValue={props.defaultValue} className={'form-input form-control'}   placeholder=" "/>
    <label htmlFor={id} className="form-label">{label}</label>
  </div>)
}

export default Textarea
