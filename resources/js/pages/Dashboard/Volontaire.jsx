import React from 'react'
import Informative from './Compenent/Informative'
import VolontaireTable from './Compenent/VolontaireTable'

function Volontaire() {
  return (
    <div className=''>
      <Informative bg="bg-primary" title="la list des Volontaires" icon="fa-solid fa-hand-holding-medical" />
      <VolontaireTable />
    </div>
  )
}

export default Volontaire