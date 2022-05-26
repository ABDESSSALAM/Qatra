import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='flex justify-center container w-11/12  my-2 cursor-pointer'>
        <Card   localisation="Lahdim - Meknes" debut="01-02-2022" fin="04-05-2022" />
        <Card   localisation="Lahdim - Meknes" debut="01-02-2022" fin="04-05-2022" />
        <Card   localisation="Lahdim - Meknes" debut="01-02-2022" fin="04-05-2022" />
    </div>
  )
}

export default Cards