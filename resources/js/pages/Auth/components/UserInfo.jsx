import React,{useState} from 'react'


function InfoUser(props) {

  //styling
  const buttonsStyle="text-white w-1/2 py-1 font-medium text-xl shadow-lg";
  //handleStep
  let step=props.step;
  const prev=(e)=>{
    e.preventDefault()  
    props.setStep(step-1);
  }

  

    
    const [nom,setNom]=useState('')
    const [nomErr,setNomErr]=useState('')  
    const [prenom,setprenom]=useState('')
    const [prenomErr,setprenomErr]=useState('')
    const [email,setemail]=useState('')
    const [emailERR,setEmailERR]=useState('')
    const [password,setpassword]=useState('')
    const [passErr,setPassErr]=useState('')
    
    const [password_conf,setpassword_conf]=useState('')
    const [passConfErr,setPassConfErr]=useState('')
    const [telephone,settelephone]=useState('')
    const [teleErr,setTeleErr]=useState('')

    
    const next=(e)=>{
      e.preventDefault()
      let err=false;
      let regChars=/^[a-zA-Z]+$/;
      //validation
       if(nom.trim()==''){
        setNomErr("obligatoire")
        err=true;
       }
       if(prenom.trim()==''){
        setprenomErr("obligatoire")
        err=true;
       }
       if(email.trim()==''){
        setEmailERR("obligatoire")
        err=true;
       }
       if(password.trim()==''){
        setPassErr("obligatoire")
        err=true;
       }
       if(password_conf.trim()==''){
        setPassConfErr("obligatoire")
        err=true;
       }
       if(telephone.trim()==''){
        setTeleErr("obligatoire")
        err=true;
       }
       
     
      if(!err){
      let data=props.data;
      const newData={
        nom:nom,
        prenom:prenom,
        email:email,
        password:password,
        telephone:telephone}
      data={...data, ...newData}

      props.setDataUser(data)
      props.setStep(step+1);
      }
      
    } 
    


    

    const inputStyle=" rounded-md px-3 text-xl outline-none py-1 my-1";
  return (
    <div className='w-full bg-primary px-4 py-2 flex flex-col items-center justify-between shadow-lg cursor-pointer h-92'>
        <div className='w-full h-full flex flex-col px-3 items-stretch justify-between py-3 '>
        <div className='flex justify-between mb-2 items-center'>
            <input type="text" onChange={(e)=>setNom(e.target.value)}  name='Fname' placeholder='Nom' className={`${inputStyle} w-2/5`} />
            {nomErr!='' && <span className='text-red-600 font-semibold'>{nomErr}</span>} 
            <input type="text" onChange={(e)=>setprenom(e.target.value)} name="Lname" placeholder='Prénom' className={`${inputStyle} w-2/5`}/>
            {prenomErr!='' && <span className='text-red-600 font-semibold'>{prenomErr}</span>}
        </div>
        <input type="email" onChange={(e)=>setemail(e.target.value)} name='Email' placeholder='Email' className={`${inputStyle}`}/>
        {emailERR!='' && <span className='text-red-600 font-semibold'>{emailERR}</span>}
        <input type="password" onChange={(e)=>setpassword(e.target.value)} name="Pass" placeholder='Mot de pass' className={`${inputStyle}`} />
        {passErr!='' && <span className='text-red-600 font-semibold'>{passErr}</span>}
        <input type="password" onChange={(e)=>setpassword_conf(e.target.value)} name="Pass_Conf" placeholder='Confirmez mot de pass' className={`${inputStyle}`} />
        {passConfErr!='' && <span className='text-red-600 font-semibold'n>{passConfErr}</span>}
        <input type="text" onChange={(e)=>settelephone(e.target.value)} name="Telephone" placeholder='Téléphone' className={`${inputStyle}`}/>
        {teleErr!='' && <span className='text-red-600 font-semibold'>{teleErr}</span>}
        </div>
        <div className='flex justify-between w-full'>
            <button onClick={prev} className={`${buttonsStyle}  bg-secondary  rounded-bl-md w-1/2`}>précédent</button>
            <button onClick={next}  className={`${buttonsStyle}  bg-green-500 rounded-br-mg w-1/2`}>suivant</button>
          </div>
    </div>
  )
}

export default InfoUser