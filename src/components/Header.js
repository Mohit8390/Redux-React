import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component{
   render(){
       return(
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
               <Link to="/" className="navbar-brand" href="#"><h1>User App</h1></Link>

               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item" style={{marginLeft:"1038px"}}>
                           <NavLink to="/viewlist" className="nav-link" href="#"><h5>View list</h5></NavLink>
                       </li>
                   </ul>
               </div>

           </nav>
       );
   }
}

export default Header;