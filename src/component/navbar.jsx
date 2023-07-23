import React from 'react'

import {TbHome2} from "react-icons/tb";
import {FaNutritionix} from "react-icons/fa";
 import {BsFillPersonFill} from "react-icons/bs";
 import {IoIosFitness} from "react-icons/io";
export default function Header({Link}) {
    return (
        <nav className='  '>
            
                <div  >
                  <div className='className= flex  justify-evenly items-center max-w-full h-14 shadow-md rounded-b-full
                   bg-[#95adbe]  lg:h-20 '>
                     <li className=' list-none'>
                     <Link to='/nutrition'><FaNutritionix className=' hover:text-[#271B31] lg:h-20'  size={30} /></Link>
                    
                       </li>
                     
                      <li className='list-none'>
                      <Link to='/fitness'>{<IoIosFitness  className='  hover:text-[#271B31] lg:h-20' size={32} />}</Link>
                     
                      </li>
                     <li className='list-none'>
                     <Link to='/'>{<TbHome2  className='  hover:text-[#271B31] lg:h-20' size={30} />}</Link>
                      
                       </li>
                      <li className='list-none'>
                      <Link to='/profile'> {<BsFillPersonFill className='  hover:text-[#271B31] lg:h-20'  size={30} />} </Link>
                    
                      </li>
                  </div>
                </div>
        </nav>
        
    )
}