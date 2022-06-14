import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-primary text-white flex h-32 cursor-pointer '>
        <div className='w-1/3 flex justify-start items-center flex-col border-r border-gray-100'>
            <h2 className='text-2xl mt-1'>réseau sociaux</h2>
            <div className='mt-4 '>
              <i className='fab fa-facebook text-2xl mx-1  hover:translate-y-2'></i>
              <i className='fab fa-twitter text-2xl mx-1 hover:translate-y-2'></i>
              <i className='fab fa-youtube text-2xl mx-1 hover:translate-y-2'></i>
              <i className='fab fa-instagram text-2xl mx-1 hover:translate-y-2'></i>
            </div>
            
        </div>
        <div className='w-1/3 flex flex-col items-center border-r border-gray-100'>
        
          <h2 className='text-2xl '>localisation</h2>
          <div className='flex mt-6 items-center self-start text-lg'>
              <i className="fas fa-map-marker-alt mx-2"></i>
              <p className=''>ISTAG BAB TIZIMI - MEKNES - MAROC</p>
            </div>
          
           
            
        </div>
        <div className='w-1/3 flex flex-col items-center text-lg'>
            <h2 className='text-2xl  mt-2'>contact</h2>
            <div className='flex mt-4 items-center self-start'>
              <i className='fas fa-phone mx-2'></i>
              <p>+212600000000</p>
            </div>
            <div className='flex mt-2 items-center self-start text-lg'>
              <i className="fa-regular fa-envelope mx-2"></i>
              <p>contact@qatra.ma</p>
            </div>
        </div>
    </div>
  )
}

export default Footer