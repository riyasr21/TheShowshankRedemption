import React from "react";
import { NavLink , useLocation} from "react-router-dom";
import appLogo from "../../Assets/Img/logo.svg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (

    <nav className="HeaderWrapper">
     
      <div
        className="HeaderWrapper__menu"
       
      >
        <div className="HeaderWrapper__left">
          <a href="/">
            <img
              className="HeaderWrapper__left--logo"
              src={appLogo}
              alt="Website logo"
            />
          </a>
        </div>
        <div className="HeaderWrapper__middle">
          <ul>
            
            <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activePage" : "not-active-class"
                }
              >
               
                <div className="arrow-left"></div>
                Home
                <div className="arrow-right"></div>
              </NavLink>
            </li>
            <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/shows"
                className={({ isActive}) =>
                  (isActive  || (location.pathname.substring(0,8) == "/movies/") ||  (location.pathname.substring(0,11) == "/favourites") )? "activePage" : "not-active-class"
                }
              >
                <div className="arrow-left"></div>
                
                Profile
                <div className="arrow-right"></div>
              </NavLink>
            </li>
            <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/login"
                className={({ isActive}) =>
                  (isActive  )? "activePage" : "not-active-class"
                }
              >
                <div className="arrow-left"></div>
                
                Log In
                <div className="arrow-right"></div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="HeaderWrapper__right--title">
          <a href="/" className="HeaderWrapper__right--titleTag">THE SHOWSHANK REDEMPTION</a>
        </div>
        
      </div>
    </nav>
  );
}
