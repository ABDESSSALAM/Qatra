import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-primary text-white flex h-32 cursor-pointer '>
        <div className='w-1/3 flex justify-start items-center flex-col border-r border-gray-100'>
            <h2 className='text-2xl mt-1'>social media</h2>
            <div className='mt-4 '>
              <i className='fab fa-facebook text-2xl mx-1  hover:translate-y-2'></i>
              <i className='fab fa-twitter text-2xl mx-1 hover:translate-y-2'></i>
              <i className='fab fa-youtube text-2xl mx-1 hover:translate-y-2'></i>
              <i className='fab fa-instagram text-2xl mx-1 hover:translate-y-2'></i>
            </div>
            
        </div>
        <div className='w-1/3 flex flex-col items-center border-r border-gray-100'>
          <div className='flex items-center mt-2'>
             <h2 className='text-2xl uppercase'>Localisation</h2>
            <i className='fas fa-map-marker-alt ml-2 text-2xl'></i>
          </div>
          <p className='mt-6'>ISTAG BAB TIZIMI - MEKNES - MAROC</p>
           
            
        </div>
        <div className='w-1/3 flex flex-col items-center text-lg'>
            <h2 className='text-2xl uppercase mt-2'>contact</h2>
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