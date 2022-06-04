import React,{useState} from 'react'
import { DataAssociation } from '../FakeData/DataCarnavals'

function AssociationTable(props) {
    const DATA_HEADER=['nom','Ville','Telephone','Etat'];
    
     //header
     const STYLE_THEAD="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mt-4";
     const DateHeader=DATA_HEADER.map((head,idx)=>{
         return( 
             
             <th key={idx} scope="col" className="px-6 py-3">
                         {head}
             </th>
             
             )
     })
     
     //end header
     const pending=<span className='bg-yellow-300 text-black font-semibold px-2 py-1 rounded-lg shadow-sm'>pending</span>
     const done=<span className='bg-green-400 text-black font-semibold px-2 py-1 rounded-lg shadow-sm'>done</span>
       
     const ROW_TR_STYLE=" border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
     const ROW_TH_STYLE="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap";
     //inserting data
     const data=props.data;
     const dataRow=data.map((row,idx)=>{
         return(
             <tr key={row.IdAssoc} className={ROW_TR_STYLE}>
                 <th scope='row' className={ROW_TH_STYLE}>
                     {row.nomAssoc}
                 </th>
                 <td className="px-6 py-4">
                     {row.nomVille}
                 </td>
                 <td className="px-6 py-4">
                     {row.telephone}
                 </td>
                
                 <td className="px-6 py-4">
                     {row.etat==0? pending : done }
                 </td>
                 <td className="px-6 py-4 text-right">
                     <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Valider</button>
                 </td>
             </tr>
         )
     })
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2 mt-3 cursor-pointer">

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className={STYLE_THEAD}>
            <tr>
                {DateHeader}
            </tr>
            
        </thead>
        <tbody>
            {dataRow}
           
        </tbody>
    </table>
    
    </div>
  )
}

export default AssociationTable