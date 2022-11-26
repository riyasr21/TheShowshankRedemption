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
                {/* {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={fireIcon}
                      alt="snu explore Logo"
                    />
                  )} */}
                Profile
                <div className="arrow-right"></div>
              </NavLink>
            </li>
            {/* <li className="HeaderWrapper__middle--option">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "activePage" : "not-active-class"
                }
              >
                <div className="arrow-left"></div>
                {/* {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={fireIcon}
                      alt="snu explore Logo"
                    />
                  )} */}
                {/* Movies
                <div className="arrow-right"></div>
              </NavLink>
            </li> */} 
          </ul>
        </div>

        <div className="HeaderWrapper__right--title">
          THE SHOWSHANK REDEMPTION
        </div>
        {/* {dropdown && (
                <div style={{ marginTop: "17px", width: "100%" }}>
                  <li className="HeaderWrapper__middle--option">
                    <p>Help and more</p>
                  </li>
                  <div className="HeaderWrapper__middle--lineSep"></div>
                </div>
              )}
              <li className="HeaderWrapper__middle--option">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "activePage" : "not-active-class"
                  }
                >
                  {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={infoIcon}
                      alt="snu explore Logo"
                    />
                  )}
                  Admins & Contact
                </NavLink>
              </li>
              <li className="HeaderWrapper__middle--option">
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive ? "activePage" : "not-active-class"
                  }
                >
                  {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={questionIcon}
                      alt="snu explore Logo"
                    />
                  )}
                  FAQs
                </NavLink>
              </li>
              <li className="HeaderWrapper__middle--option">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "activePage" : "not-active-class"
                  }
                >
                  {dropdown && (
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={usersIcon}
                      alt="snu explore Logo"
                    />
                  )}
                  About Us
                </NavLink>
              </li>
              {dropdown && (
                <div style={{ marginTop: "17px", width: "100%" }}>
                  <li className="HeaderWrapper__middle--option">
                    <p>Themes</p>
                  </li>
                  <div className="HeaderWrapper__middle--lineSep"></div>
                </div>
              )}
              {dropdown && (
                <li className="HeaderWrapper__middle--option">
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("pink");
                      localStorage.setItem("theme", "light");
                    }}
                  >
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={lightModeIcon}
                      alt="snu explore Logo"
                    />
                    Light Mode
                  </button>
                </li>
              )}
              {dropdown && (
                <li className="HeaderWrapper__middle--option">
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("pink");
                      localStorage.setItem("theme", "dark");
                    }}
                  >
                    <img
                      className="HeaderWrapper__middle--option"
                      src={darkModeIcon}
                      alt="snu explore Logo"
                    />
                    Dark Mode #1
                    <img
                      className="HeaderWrapper__middle--option"
                      src={darkModeOneTheme}
                      style={{ marginLeft: "15px", filter: "none" }}
                      alt="snu explore Logo"
                    />
                  </button>
                </li>
              )}
              {dropdown && (
                <li className="HeaderWrapper__middle--option">
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("pink");
                      localStorage.setItem("theme", "pink");
                    }}
                  >
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={darkModeIcon}
                      alt="snu explore Logo"
                    />
                    Dark Mode #2
                    <img
                      className="HeaderWrapper__middle--option fire"
                      src={darkModeTwoTheme}
                      style={{ marginLeft: "15px", filter: "none" }}
                      alt="snu explore Logo"
                    />
                  </button>
                </li>
              )}
            </ul>
            <div className="HeaderWrapper__right">
              {!dropdown && (
                <div
                  className="HeaderWrapper__right--themeButtons"
                  style={{
                    background: themeStyle[currentTheme ? currentTheme : "light"],
                  }}
                >
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("pink");
                      localStorage.setItem("theme", "light");
                      setCurrentTheme("light");
                    }}
                  >
                    <img
                      className={`HeaderWrapper__right--themeButtons--option${
                        currentTheme === "light" ? "--active" : ""
                      }`}
                      src={lightModeDesktop}
                      alt="snu explore Logo"
                    />
                  </button>
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("pink");
                      localStorage.setItem("theme", "dark");
                      setCurrentTheme("dark");
                    }}
                  >
                    <img
                      className={`HeaderWrapper__right--themeButtons--option${
                        currentTheme === "dark" ? "--active" : ""
                      }`}
                      src={themeIconSrc[currentTheme ? currentTheme : "light"]}
                      alt="snu explore Logo"
                    />
                  </button>
                  <button
                    onClick={() => {
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("dark");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.remove("light");
                      document
                        .getElementsByTagName("html")
                        .item(0)
                        .classList.add("pink");
                      localStorage.setItem("theme", "pink");
                      setCurrentTheme("pink");
                    }}
                  >
                    <img
                      className={`HeaderWrapper__right--themeButtons--option--pink${
                        currentTheme === "pink" ? "--active" : ""
                      }`}
                      src={pinkThemeIconSrc[currentTheme ? currentTheme : "light"]}
                      alt="snu explore Logo"
                    />
                  </button>
                </div>
              )}
              {dropdown && (
                <div
                  className="HeaderWrapper__right--themeButtons"
                  style={{
                    background: "inherit",
                  }}
                >
                  <p className="HeaderWrapper__right--paragraph">Social Medias</p>
                  <div className="HeaderWrapper__right--lineSep"></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "20px",
                      paddingBottom: "50px",
                    }}
                  >
                    <a target="_blank" href="www.linkedin.com/company/snuxplore">
                      <img
                        className="HeaderWrapper__right--themeButtons--socialMediaIcons"
                        src={linkedInLogo}
                        alt="LinkedIn logo"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/snu.xplore/"
                      rel="noreferrer"
                    >
                      <img
                        className="HeaderWrapper__right--themeButtons--socialMediaIcons"
                        src={instagramLogo}
                        alt="Instagram logo"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
            {dropdown && (
              <div
                style={{ position: "relative", width: "100%", height: "1000px" }}
              >
                <div className="HeaderWrapper__dots">
                  <span className="HeaderWrapper__dots--dot"></span>
                  <span className="HeaderWrapper__dots--dot"></span>
                  <span className="HeaderWrapper__dots--dot"></span>
                </div>
              </div>
            )}
          </div>
          <div
            className="HeaderWrapper__Hamburger"
            style={{
              position: navState ? "fixed" : "",
              top: "41px",
              right: "30px",
            }}
          >
            <input
              type="checkbox"
              id="NavBarInput"
              onChange={() => {
                setNavState(!navState);
    
                // changed "nav ~ div" to "nav ~ *"
                const nodeList = document.querySelectorAll("nav ~ *");
                for (let i = 0; i < nodeList.length; i++) {
                  nodeList[i].style.filter = `${
                    !navState ? "blur(3.5px)" : "none"
                  }`;
                  nodeList[i].style.transition =
                    "0.5s filter cubic-bezier(0.77, 0.2, 0.05, 1)";
                }
              }}
            />
            <div className="hamButton">
              <label className="HamMenu" htmlFor="NavBarInput">
                <span className="span HL1" />
                <span className="span HL2" />
                <span className="span HL3" />
              </label>
            </div>
          </div> */}
      </div>
    </nav>
  );
}
