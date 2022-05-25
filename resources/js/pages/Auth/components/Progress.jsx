import React from 'react'

function Progress(props) {
  const step=props.step;
  return (
    <div className='w-2/4 cursor-pointer bg-slate-300 h-sq20 flex rounded-t-lg shadow-lg'>
        <div className='w-1/3 bg-green-600 shadow-lg  rounded-tl-lg  h-full'></div>
        <div className={`${step>=1 ? 'bg-green-600' : 'bg-white'} w-1/3  shadow-lg border-x-2 border-gray-600   h-full`}></div>
        <div className={`${step == 2 ? 'bg-green-600' : 'bg-white'} w-1/3  h-full shadow-lg rounded-tr-lg`}></div>
      </div>
  )
}

export default Progress