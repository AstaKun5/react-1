import React from "react";
import { Link } from "react-router-dom";



function Nav(){
    return(
        <nav>        
            
            <ul>
                <h1>Black Clover
                </h1>
                </ul>
  
        
        <h3>
            <Link to="/">Home</Link>
            </h3>
            
        <h3>
            <Link to="/about">About </Link>
            </h3>
        <h3>
            <Link to="/contact">Countact</Link>
            </h3>

              
    </nav>
    )
}
export default Nav;
