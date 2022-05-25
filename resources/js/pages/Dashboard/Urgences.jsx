import React from 'react'
import UrgenceTable from './Compenent/UrgenceTable'
import Informative from './Compenent/Informative'
function Urgences() {
  return (
    <div className="flex flex-col w-full h-full ">
      <Informative bg="bg-secondary" title="la list des Urgences" icon="fa-solid fa-truck-medical" />
      <UrgenceTable />
      
      
    </div>
  )
}

export default Urgences