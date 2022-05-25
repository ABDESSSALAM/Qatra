import React,{useState} from 'react'
import { DataVolontaire } from '../FakeData/DataCarnavals';
function VolontaireTable() {
    const DATA_HEADER=['Nom','Prenom','Ville', 'Sanguin Groupe','Telephone'];
    const [data,setData]=useState([DataVolontaire]);
     //header
     const STYLE_THEAD="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mt-4";
     const DateHeader=DATA_HEADER.map((head,idx)=>{
         return<th key={idx} scope="col" className="px-6 py-3"> {head} </th>
             
     })
     
     //end header

     //start row
     const ROW_TR_STYLE="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
     const ROW_TH_STYLE="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap";
     const dataRow=data[0].map((row,idx)=>{
         return(
             <tr key={idx} className={ROW_TR_STYLE}>
                 <th scope='row' className={ROW_TH_STYLE}>
                     {row.nom}
                 </th>
                 <td className="px-6 py-4">
                     {row.prenom}
                 </td>
                 <td className="px-6 py-4">
                     {row.ville}
                 </td>
                 <td className="px-6 py-4">
                     {row.SanguinV}
                 </td>
                 <td className="px-6 py-4">
                     {row.telephone}
                 </td>
                
             </tr>
         )
     })

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

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

export default VolontaireTable