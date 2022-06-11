import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';



function SideBar(props) {

   // const [open,setopen]=useState(true);
    const open=props.isOpen;
    const navItem=[
        {
        id:0,
        text:'CARANAVALS',
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
        },
        {
        id:3,
        text:'ASSOCIATION',
        icon:'fa-solid fa-hospital-user',
        link:'/dashboard/association'
        },
        {
        id:4,
        text:'STATISTIQUES',
        icon:'fa-solid fa-chart-line',
        link:'/dashboard/statistic'
        }
    ]
        
  return (
    <>
       <i className={`${open ? 'fa-arrow-left ' :'fa-arrow-right'}  fa-solid  absolute top-16 right-0 text-white text-4xl cursor-pointer`} onClick={props.toggleOpen}></i>
        {/*top  */}
        <div className="  flex flex-col justify-center items-center border-b border-gray-300 py-3 h-1/5">
            <i className="fa-solid fa-circle-user text-gray-100 text-5xl"></i>
           {open && <h4 className='text-white font-semibold text-sm'>username</h4>} 
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
        <div className=" flex   items-end px-10 text-gray-50 text-lg cursor-pointer h-1/5">
            <i className="fa-solid fa-right-from-bracket mx-2"></i>
            {open && <h4>Log out</h4>} 
        </div>
        
    </>
  )
}

export default SideBar