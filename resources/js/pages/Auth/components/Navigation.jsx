import React,{useContext} from 'react'



function Navigation() {

  
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
  return (
    <div className='w-2/4 flex justify-between '>
        <button className={`${buttonsStyle}  bg-secondary  rounded-bl-md `}>prev</button>
        <button className={`${buttonsStyle}  bg-green-500 rounded-br-mg`}>next</button>
      </div>
  )
}

export default Navigation