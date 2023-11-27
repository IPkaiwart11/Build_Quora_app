import React, { useState } from 'react'
import './css/space.css'
export default function Space() {
  
  // const [menu,setMenu]=useState(false)
  // const Openmenu =()=>{
   
  //   setMenu(!menu)
    
  // }
  return (
    <>
    {/* <div className="menu">
     <button>
      <span className='menuspan'></span>
      <span className='menuspan'></span>
      <span className='menuspan'></span></button>
    </div> */}
   
      <div className='space_container'>
      <div className='space createS'>
           <img src="./images/plus.svg" alt="" />
               <p>Create space</p>
           </div>
           <div className='space'>
               <img src="./images/ChatGPT.svg" alt="" />
               <p>ChatGPT community</p>
           </div>
           <div className='space'>
           <img src="./images/javascript.svg" alt="" />
               <p>javascript page</p>
           </div>
           <div className='space'>
           <img src="./images/microsoft-access.svg" alt="" />
               <p>microsoft-access </p>
           </div>
           <div className='space'>
           <img src="./images/nodejs.svg" alt="" />
               <p>nodejs community</p>
           </div>
           <div className='space'>
           <img src="./images/python.svg" alt="" />
               <p>python quiz</p>
           </div>
          
      </div>
    </>
  )
}
