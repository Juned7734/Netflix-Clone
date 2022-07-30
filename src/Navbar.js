import React, {useState,useEffect} from 'react'
import './css/Navbar.css';
function Navbar() {
 const [handleShow, sethandleShow] = useState(false)
 useEffect(() => {
   window.addEventListener('scroll',()=>{
    if(window.scrollY >100){
        sethandleShow(true);
    }
    else 
        {
            sethandleShow(false);
        };
   });
    
//    return ()=>{
//     window.removeEventListener("scrollY");
//    }
   
 }, [])
 
  return (
    <div className={`nav ${handleShow&&'nav_black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix logo" className='netflix logo' />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avtar logo"  className='avatar logo' />
    </div>
  )
}

export default Navbar