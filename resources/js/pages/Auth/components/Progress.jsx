import React from 'react'

function Progress(props) {
  const step=props.step;
  return (
    <div className='w-full cursor-pointer bg-slate-300 h-sq20 flex'>
        <div className='w-1/3 bg-green-600   h-full'></div>
        <div className={`${step>=1 ? 'bg-green-600' : 'bg-white'} w-1/3  shadow-lg border-x-2 border-gray-600   h-full`}></div>
        <div className={`${step == 2 ? 'bg-green-600' : 'bg-white'} w-1/3  h-full shadow-lg `}></div>
      </div>
  )
}

export default Progress