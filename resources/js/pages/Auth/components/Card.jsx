import React,{useContext} from 'react'
import { RoleContext } from '../Register';
function Card(props) {
  const {Role,setRole}=useContext(RoleContext);
  
  const handleClick = ()=>{
    setRole(props.idx);
  }
  let Border= props.idx==Role ? 'border-4 rounded-lg border-gray-300 shadow-xl' : 'border-2 rounded-lg border-white'
  return (
    <div onClick={handleClick} className={`${Border} h-48 w-56 p-2 mx-3 text-white  flex items-stretch flex-col justify-around `}>
        <h3 className='text-2xl mx-auto '>{`${props.who}`.toUpperCase()}</h3>
        <i className={`${props.icon} fa-solid text-6xl my-3 mx-auto`}></i>
        <button className=' bg-green-500 rounded-full shadow-2xl px-3 py-1'>s'incrire</button>
    </div>
  )
}

export default Card