import React from 'react'

function Informative(props) {

  return (
    <div className={`${props.bg}  text-white flex w-full items-end justify-center py-3 rounded-md shadow-lg cursor-pointer my-3`}>
    <i className={`text-5xl ${props.icon}`}></i>
    <span className="text-5xl mx-4 mb-2">{props.title}</span>
  </div>
  )
}

export default Informative