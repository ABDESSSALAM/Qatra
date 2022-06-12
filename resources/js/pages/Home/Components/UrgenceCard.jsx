import React from 'react'

function UrgenceCard(props) {
  return (
    <div className='my-2 py-2 bg-secondary flex flex-col items-stretch text-white rounded-lg shadow-lg mx-2'>
        <p className='text-xl text-center font-bold border-b-2 border-gray-300'>urgnece</p>
        <div className='px-1 my-1'>
            <span className=' font-extrabold text- mr-2 capitalize'> sanguin groupe  :</span>
            <span>{props.sangP} </span>
        </div>
        <div className='px-1 my-1'>
            <span className='capitalize font-extrabold text- mr-2'>ville :</span>
            <span>{props.ville}</span>
        </div>
        <div className='px-1 my-1'>
            <span className='capitalize font-extrabold text- mr-2'>hospitale :</span>
            <span>{props.hospitale}</span>
        </div>
        <button className='bg-white text-secondary text-lg mx-1 rounded-md'>participer</button>
    </div>
  )
}

export default UrgenceCard