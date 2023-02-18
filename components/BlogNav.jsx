import React, { useState } from 'react'
import Button from './Button';
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
    let Links =[
      {name:"Home",link:"/dashboard"},
      {name:"Login",link:"/login"},
      {name:"About",link:"/"},
      {name:"Contact",link:"/"},
      {name:"Settings",link:"/settings"}
    ];
    let [open,setOpen]=useState(false);
    
  function openDashboard () {
  router.push('/dashboard');
  }
  return (
    <div className='fixed top-0 left-0 w-full shadow-md'>
      <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
        <span className='pt-2 mr-1 text-3xl text-indigo-600'>
       {/*  <img className='pb-2 w-9 h-9' src=''/> */}
        </span>
       <p className='ml-1 font-medium'>KRAYEN NOTION SITE</p> 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 duration-500 hover:text-red-600'>{link.name}</a>
            </li>
          ))
        }
        <button 
        // href='/settings'
        onClick={openDashboard}
        className="bg-red-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
        >
          Create a blog
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar