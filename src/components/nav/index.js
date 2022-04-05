import React from "react";


function Nav(props) {
    const{
        currentSelection, 
        setCurrentSelection
    }=props;
    return(
       <nav>
           <ul className='flex-row flex-end'>
               <li className= 'mx-2'>
                   <button onClick={() => {setCurrentSelection('About')}}>About Me</button>
               </li>
               <li className= 'mx-2'>
                   <button onClick={() => {setCurrentSelection('Contact')}}>Contact Me</button>
               </li>
               <li className= 'mx-2'>
                   <button onClick={() => {setCurrentSelection('Work')}}>My Work</button>
               </li>
           </ul>
       </nav>
    )
}

export default Nav;