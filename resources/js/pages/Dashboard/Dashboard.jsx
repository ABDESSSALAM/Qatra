import React,{useState} from 'react';

function Dashboard({children}) {
    const [open,setopen]=useState(true);
    const toggleOpen=()=>{
        setopen(!open)
    }

    //nav item
    
    return (
        <div className="flex w-screen">{children}
            {/* <div className={`${open ? 'w-1/5' :'w-1/12'}  flex flex-col h-screen bg-primary relative py-3 transition-width ease-in-out duration-500 shadow-lg`}>
                
                <SideBar isOpen={open} toggleOpen={toggleOpen} />
            </div>
            <div className={`${open ? 'w-4/5' : 'w-11/12'} flex flex-col `} >
                <Navbar />
                <main className='h-5/6 px-4 py-2'>{children}</main>
            </div> */}
           
            
        </div>
    );
}

export default Dashboard;
