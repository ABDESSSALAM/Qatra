import React from 'react'

function Navbar() {
  
  return (
    <div  className='w-full flex flex-row-reverse items-start justify-start py-2 px-3 h-1/6 bg-primary text-white cursor-pointer shadow-md '>
        {/* user */}
        <div className="flex flex-col items-center  text-xl">
            <i className="fa-solid fa-user text-4xl"></i>
            <h4 className='' >username</h4>
        </div>
        <div className='relative mx-3 py-2'>
            <i className="fa-regular fa-bell text-3xl "></i>
            <span className='bg-red-600 text-white rounded-full w-5 h-5 flex flex-col items-center justify-center absolute top-1 right-2 text-sm'>10</span>
        </div>
        <div className='relative py-2'>
            <i className="fa-regular fa-envelope text-3xl "></i>
            <span className='bg-red-600 text-white rounded-full w-5 h-5 flex flex-col items-center justify-center absolute top-1 right-1 text-sm'>10</span>
        </div>
       
    </div>
  )
}

export default Navbar