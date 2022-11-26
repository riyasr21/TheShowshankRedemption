import React from "react";
import { NavLink , useLocation} from "react-router-dom";
import appLogo from "../../Assets/Img/logo.svg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (

    <nav className="HeaderWrapper">
      {/* {dropdown && (
            <a href="/">
              <img
                className={`
                  HeaderWrapper__left--logo 
                  ${navState ? "HeaderWrapper__left--logo--blur" : ""}`}
                src={appLogo}
                alt="snu explore Logo"
              />
            </a>
          )} */}
      <div
        className="HeaderWrapper__menu"
        // className={`HeaderWrapper__menu ${
        //   navState ? "HeaderWrapper__menu--open" : ""
        // }`}
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
            {/* {dropdown && (
                <div style={{ width: "100%" }}>
                  <li className="HeaderWrapper__middle--option">
                    <p>Features</p>
                  </li>
                  <div className="HeaderWrapper__middle--lineSep"></div>
                </div>
              )} */}
            <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activePage" : "not-active-class"
                }
              >
                {/* {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option"
                      src={locationIcon}
                      alt="snu explore Logo"
                    />
                  )} */}
                <div className="arrow-left"></div>
                Home
                <div className="arrow-right"></div>
              </NavLink>
            </li>
            <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/shows"
                className={({ isActive}) =>
                  (isActive || (location.pathname == "/login") || (location.pathname.substring(0,8) == "/movies/") ||  (location.pathname.substring(0,11) == "/favourites") )? "activePage" : "not-active-class"
                }
              >
                <div className="arrow-left"></div>
                
                Profile
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
