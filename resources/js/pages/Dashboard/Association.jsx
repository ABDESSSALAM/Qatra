import React from 'react'
import Informative from './Compenent/Informative'
import AssociationTable from './Compenent/AssociationTable'
function Association() {
  return (
    <div>
      <Informative bg="bg-primary" title="la list des associations" icon="fa-solid fa-hospital-user" />
      <AssociationTable />
    </div>
  )
}

export default Association