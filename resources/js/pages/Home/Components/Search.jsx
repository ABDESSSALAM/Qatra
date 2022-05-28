import React from 'react'

function Search() {
    const Villes=['Meknes','Fes','Rabat'];
    const ListVilles=Villes.map((ville,idx)=><option key={idx}  value={idx} >{ville}</option>)
  return (
    <form className='flex justify-end items-center bg-primary py-2 px-1 text-white rounded-md shadow-lg mx-2'>
        <div className='mx-12'>
            <span className='text-xl font-normal mr-1'>Ville :</span>
            <select name="ville" className='text-black outline-none text-lg py-1 px-2 rounded-md ' >
                {ListVilles}
            </select>
        </div>
        <button type="submit" className='bg-white text-primary rounded-lg shadow-xl py-1 px-2 uppercase text-lg mx-2 font-semibold hover:bg-gray-100'>rechercher</button>
    </form>
  )
}

export default Search