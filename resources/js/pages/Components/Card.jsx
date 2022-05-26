import React from 'react'

function Card(props) {
  return (
    <div className='w-52 py-2 bg-primary flex flex-col items-stretch text-white rounded-lg shadow-lg mx-2'>
        <p className='text-xl text-center font-bold border-b-2 border-gray-300'>Caranaval</p>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>à :</span>
            <span>{props.localisation} </span>
        </div>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>de:</span>
            <span>{props.debut}</span>
        </div>
        <div className='px-1 my-1'>
            <span className='uppercase font-extrabold text- mr-2'>jusqu'à :</span>
            <span>{props.fin}</span>
        </div>
        <button className='bg-white text-primary text-lg mx-1 rounded-md'>participer</button>
    </div>
  )
}

export default Card