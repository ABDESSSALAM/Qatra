import React,{useContext} from 'react'
import { VolontaireContext } from '../Register';


function VolontaireInfo() {
  
  // data
  const Villes=['Meknes','Fes','Rabat'];
  const ListVilles=Villes.map((ville,idx)=><option key={idx} value={idx}>{ville}</option>)
  const groupSang=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  const ListGroupSang=groupSang.map((sg,idx)=><option key={idx} value={sg}>{sg}</option>)
  
  //style
  const inputWrapper="flex mx-auto w-10/12   justify-around my-3";
  const inputStyle="w-8/12 outline-none rounded-md px-3 text-lg";
  const spanStyle="w-4/12 text-white text-xl";

  //handle input
  const {VolontaireInfo,setVolontaireInfo}=useContext(VolontaireContext)
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    switch(name){
      case "CIN":
        setVolontaireInfo({
          CIN:value,
          Ville:VolontaireInfo.Ville,
          SangV:VolontaireInfo.SangV
        })
        break
      
      case "Ville":
        setVolontaireInfo({
          CIN:VolontaireInfo.CIN,
          Ville:value,
          SangV:VolontaireInfo.SangV
        })
        break
      
      case "SangV":
        setVolontaireInfo({
          CIN:VolontaireInfo.CIN,
          Ville:VolontaireInfo.Ville,
          SangV:value
        })
        break
    }

  }

  let Volon=VolontaireInfo;

  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center  shadow-lg cursor-pointer h-72'>
        <div className='w-full flex justify-center items-center h-1/3 border-b-2 border-white'>
            <h3 className='text-white text-6xl mr-11'>Volontaire</h3>
            <i className="fa-solid fa-hand-holding-medical text-white text-7xl"></i>
        </div>
        <div  className='w-10/12 h-2/3 py-2  flex flex-col items-stretch'>
          <div className={`${inputWrapper} `}>
            <span className={`${spanStyle}`}>CIN :</span>
            <input type="text" name="CIN" onChange={handleInput} className={`${inputStyle}`} />
          </div>
          <div  className={`${inputWrapper}`} >
            <span className={`${spanStyle}`}>Ville :</span>
            <select className={`${inputStyle}`} name="Ville" onChange={handleInput}>
              {ListVilles}
            </select>
          </div>
          <div className={`${inputWrapper}`} >
            <span className={`${spanStyle} text-lg`}>Sanguin group :</span>
            <select className={`${inputStyle}`} name="SangV" onChange={handleInput}>
              {ListGroupSang}
            </select>
          </div>
        </div>
        
    </div>
  )
}

export default VolontaireInfo