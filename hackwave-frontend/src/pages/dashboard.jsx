import React from 'react';
import Navbar from '../components/navbar';
import Agent from '../components/agents';
import Appels from '../components/appels';
import { useState } from 'react';
const Dashboard = () => {

  const [isAgents,setIsAgents] = useState(true)
 
  
  return (
    <div>
      <Navbar/>
    
          <div className='flex items-center mt-16   ml-28'>
              <div className={`h-12 w-32 ${isAgents ? 'bg-[#4D44B5]' : 'bg-[#D9D9D9]'} rounded-l-full rounded-r-none cursor-pointer flex items-center justify-center text-center `} onClick={()=>setIsAgents(true)}>
               <span className={`  ${isAgents ? 'text-white' : 'text-black'}    `}>Agents</span>
          
           </div>
        <div className={`h-12 w-32 ${!isAgents ? 'bg-[#4D44B5]' : 'bg-[#D9D9D9]'} rounded-r-full rounded-l-none cursor-pointer flex items-center justify-center text-center`} onClick={()=>setIsAgents(false)}>
          <span className={`  ${isAgents ? 'text-black' : 'text-white'}    `}>Appels</span>
        </div>
      </div>
      {isAgents && <Agent/>}   
      {!isAgents && <Appels/>}

      
    </div>
  
  )
}  

export default Dashboard;