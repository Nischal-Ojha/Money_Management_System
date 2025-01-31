const CheckBoxContainer = ({type, accountType, onChange, className="", err}:{type:string, accountType:string, onChange:(types:string)=>void, err:(value:boolean)=>void, className?:string}) => {
  return (
    <div className={`${className}`}>
        <input type="radio" id={type} name='account' value={type} checked={accountType===type} onChange={()=>{onChange(type); err(false)}}/>
        <label htmlFor={type}>{type}</label>
    </div>
  )
}

export default CheckBoxContainer
