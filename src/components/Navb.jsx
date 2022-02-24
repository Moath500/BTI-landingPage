import React , {useState}from "react";


import logo from '../images/Logo.png';


function Navb(){




return(
        
         // <Nav.Item  className="logo"><img src={logo}/></Nav.Item>
  <div className="nav">
     <div className="logo">
         <img src={logo}/>
     </div>

     <div className="items">
        <span>About</span>
        <span>Pricing</span>
     </div>

     <div>
        <span className="sginin-btn"> Sgin IN</span>
        <button className="signup-btn">Sgin UP</button>
     </div>
  </div>

  
     
); 
}
export default Navb;

