import React,{useContext} from 'react'
import { DemandeContext } from '../Register';

function CitoyenInfo() {
    //data
    const Villes=['Meknes','Fes','Rabat'];
    const ListVilles=Villes.map((ville,idx)=><option key={idx} value={idx} >{ville}</option>)
    const groupSang=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
    const ListGroupSang=groupSang.map((sg,idx)=><option key={idx} value={sg}>{sg}</option>)
    //style
    const inputWrapper="flex mx-auto w-10/12   justify-around my-1";
    const inputStyle="w-8/12 outline-none rounded-md px-2 text-lg";
    const spanStyle="w-4/12 text-white text-xl";

    //handle Form
    const {Demande,SetDemande}=useContext(DemandeContext);

   const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      switch(name){
        case "CIN":
          SetDemande({
            CIN:value,
            Ville:Demande.Ville,
            Hospitale:Demande.Hospitale,
            SangP:Demande.SangP,
          })
          break
        
        case "Hospitale":
          SetDemande({
            CIN:Demande.CIN,
            Ville:Demande.Ville,
            Hospitale:value,
            SangP:Demande.SangP,
          })
          break
        case "Ville":
          SetDemande({
            CIN:Demande.CIN,
            Ville:value,
            Hospitale:Demande.Hospitale,
            SangP:Demande.SangP,
          })
          break
        case "SangP":
          SetDemande({
            CIN:Demande.CIN,
            Ville:Demande.Ville,
            Hospitale:Demande.Hospitale,
            SangP:value,
          })
          break
      }
    }
    //end handle Input
    


 return (
   <div className='w-full bg-primary px-4 py-2 flex flex-col items-center  shadow-lg cursor-pointer h-80'>
       <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
           <h3 className='text-white text-4xl mr-5'>Demande de sang</h3>
           <i className="fa-solid fa-truck-medical text-white text-7xl"></i>
       </div>
       <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
         <div className={`${inputWrapper} `}>
           <span className={`${spanStyle}`}>CIN :</span>
           <input onChange={handleInput}  type="text" name="CIN" className={`${inputStyle}`} />
         </div>
         <div className={`${inputWrapper} `}>
           <span className={`${spanStyle}`}>Hospitale :</span>
           <input onChange={handleInput} type="text" name="Hospitale" className={`${inputStyle}`} />
         </div>
         <div  className={`${inputWrapper}`} >
           <span className={`${spanStyle}`}>Ville :</span>
           <select className={`${inputStyle}`} name="Ville" onChange={handleInput} >
             {ListVilles}
           </select>
         </div>
         <div className={`${inputWrapper}`} >
           <span className={`${spanStyle} text-lg`}>Sanguin group :</span>
           <select className={`${inputStyle}`} name="SangP" onChange={handleInput} >
             {ListGroupSang}
           </select>
         </div>
       </div>
   </div>
 )
}

export default CitoyenInfo