import React,{useContext} from 'react'
import { AssociationContext } from '../Register';
function AssociationInfo() {

   // data
   const Villes=['Meknes','Fes','Rabat'];
   const ListVilles=Villes.map((ville,idx)=><option key={idx} value={idx}>{ville}</option>)
   
   
   //style
   const inputWrapper="flex mx-auto w-11/12   justify-around my-3";
   const inputStyle="w-7/12 outline-none rounded-md px-3 text-lg";
   const spanStyle="w-5/12 text-white text-xl";

   //handle input
   const {AssociationInfo,setAssociationInfo}=useContext(AssociationContext);
  
   const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    
    switch(name){
      case "NomAssoc":
        setAssociationInfo({
          NomAssoc:value,
          Ville:AssociationInfo.Ville,
          DateCreation:AssociationInfo.DateCreation
        })
        break
      
      case "Ville":
        setAssociationInfo({
          NomAssoc:AssociationInfo.NomAssoc,
          Ville:value,
          DateCreation:AssociationInfo.DateCreation
        })
        break
      
      case "DateCreation":
        setAssociationInfo({
          NomAssoc:AssociationInfo.NomAssoc,
          Ville:AssociationInfo.Ville,
          DateCreation:e.target.value
        })
        break
     
    }
     
   }

   //end handle input
   const test=(e)=>{
     console.log(e.target.value)
   }
   return (
     <div className='w-full bg-primary px-4 py-2 flex md:flex-col items-center  shadow-lg cursor-pointer md:h-80'>
         <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
             <h3 className='text-white text-6xl mr-11'>Association</h3>
             <i className="fa-solid fa-hospital-user text-white text-7xl"></i>
         </div>
         <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
           <div className={`${inputWrapper} `}>
             <span className={`${spanStyle}`}>Nom d'association :</span>
             <input  onChange={handleInput} type="text" name="NomAssoc" className={`${inputStyle}`} />
           </div>
           <div className={`${inputWrapper} `}>
             <span className={`${spanStyle}`}>Date de création :</span>
             <input type="date" name="DateCreation" className={`${inputStyle}`} onChange={handleInput} />
             <span> </span>
           </div>
           <div  className={`${inputWrapper}`} >
             <span className={`${spanStyle}`}>Ville :</span>
             <select onChange={handleInput}  className={`${inputStyle}`} name="Ville">
               {ListVilles}
             </select>
           </div>
           
         </div>
     </div>
   )
}

export default AssociationInfo