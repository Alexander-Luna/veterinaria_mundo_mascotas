import style from './styles.module.scss'

const SelectImage=(props)=>{
  const {options,label,defaultValue,id,name,required,handleChange,onBlur,opnull}= props
  return <div className={`${style.select} ${props.sty}`} >
    {!opnull?<option  value="">Seleccionar...</option>:<></>}
    <input type="hidden" required={required} name={name} defaultValue={defaultValue} />
    <ul onBlur={onBlur} onChange={handleChange}  id={id}  className={'form-select form-control'} >
    {
      Array.isArray(options)?options.map((g,index)=>{
        return<li key={index} value={g.value} >{g.icon} {g.label}</li>
      }):<></>
    }
  </ul>
    <label htmlFor={name} className="form-label">
      {label}
    </label>
  </div>
}
export default SelectImage
