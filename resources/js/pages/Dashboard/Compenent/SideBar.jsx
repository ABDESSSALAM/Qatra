import React,{ useContext,useState }  from 'react'
import { Link ,Navigate} from 'react-router-dom';
import { UserContext } from '../../../../Context/UserContext';
import axios_api from '../../../CONF_AXIOS';

function SideBar(props) {
  const {user,setUser}=useContext(UserContext)
   // const [open,setopen]=useState(true);
    const open=props.isOpen;
    let items=[
     
        {
        id:3,
        text:'ASSOCIATION',
        icon:'fa-solid fa-hospital-user',
        link:'/dashboard/association'
        },
        
        {
        id:5,
        text:'DEMANDES',
        icon:'fa-regular fa-envelope',
        link:'/dashboard/demandes'    
        }
    ]
    let navItem=[
      {
        id:0,
        text:'CARNAVALS',
        icon:'fa-solid fa-caravan',
        link:'/dashboard/carnaval'
        },
        {
        id:1,
        text:'URGENCES',
        icon:'fa-solid fa-truck-medical',
        link:'/dashboard/uregence'
        },
        {
        id:2,
        text:'VOLONTAIRES',
        icon:'fa-solid fa-hand-holding-medical',
        link:'/dashboard/volontaire'
        }
    ]
    if(user.role==5){
      navItem=[...navItem,{
        id:3,
        text:'ASSOCIATION',
        icon:'fa-solid fa-hospital-user',
        link:'/dashboard/association'
        }]
    }else{
      navItem=[...navItem,{
        id:5,
        text:'DEMANDES',
        icon:'fa-regular fa-envelope',
        link:'/dashboard/demandes'
      }]
    }
        
    //logout
    const [logout,setLogout]=useState(false)
  const LogOut = async ()=>{
    await axios_api.post('logout')
    .then(res=>{
      if( res.data.message=="Success"){
          setLogout(true);
      }
       
    })
  }
  if(logout){
    setUser({})
    return <Navigate to='/' />

  }
  return (
    <>
       <i className={`${open ? 'fa-arrow-left ' :'fa-arrow-right'}  fa-solid  absolute top-16 right-0 text-white text-4xl cursor-pointer`} onClick={props.toggleOpen}></i>
        {/*top  */}
        <div className="  flex flex-col justify-center items-center cursor-pointer border-b border-gray-300 py-3 h-1/5">
            <i className="fa-solid fa-circle-user text-gray-100 text-5xl"></i>
           {open && <>
           <h4 className='text-white font-semibold text-lg'>{user.prenom + ' ' + user.nom }</h4>
          <h5 className='text-gray-50'>{user.role==5 ? 'administrateur' : 'responsable'}</h5>
           </> } 
        </div>
        {/* middle */}
        <div className="flex flex-col items-center justify-start py-2 h-3/5">
        {navItem.map(item=>{
            return (<div key={item.id} className="text-white text-2xl mt-1 mb-5  w-full cursor-pointer bg-blend-darken h-11">
               <Link to={item.link}><i className={`text-white  mx-2 ${item.icon}`}></i>
                <span className={ `${open ? '' : 'hidden'}  text-white ml-4 text-left ease-in duration-1000`}>{item.text}</span> 
               </Link> 
            </div>)
            
        })}
        </div>
        {/* <Link to="/dashboard/volontaire">test</Link> */}
        {/* bottom */}
        <div className=" flex  items-center  px-10 text-gray-50 text-lg cursor-pointer h-1/5">
            <i className="fa-solid fa-right-from-bracket mx-2"></i>
            {open && <h4 className='text-xl' onClick={LogOut}>déconnecter</h4>} 
        </div>
        
    </>
  )
}

export default SideBar