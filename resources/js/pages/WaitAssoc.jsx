import React from 'react'

function WaitAssoc() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-yellow-300'>
        <div className='flex flex-col h-1/3 items-center'>
          <p className='text-4xl font-semibold text-black'>Bon jour , <span className='font-bold capitalize'>prenom</span> </p> 
          <div className='mt-5 flex items-end'>
            <i className="fa-solid fa-hospital-user text-6xl mx-2"></i>
            <p className='text-lg '>Votre compte d'association n'est pas encore vérifier,Merci!!</p>
          </div>
          <p className='text-lg '>contacter nous en <span className='font-bold'>contact@qatra.ma</span></p>
          <button className='bg-secondary text-white self-stretch mt-5 rounded-xl shadow-2xl text-xl py-1 hover:text-gray-300'>déconnecter</button>
        </div>
        

    </div>
  )
}

export default WaitAssoc