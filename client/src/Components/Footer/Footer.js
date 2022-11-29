import React from "react";
import "./Footer.css";
import appLogo from "../../Assets/Img/logo.svg";

function Footer({href1, href2, text1, text2}) {
  return (
    <div className="FooterWrapper">
      <div className="FooterWrapper__left">
        <div className="FooterWrapper__left--logo">
         
          <a href="/" className="FooterWrapper__left--logoTag">
            <img
              className="FooterWrapper__left--logoImg"
              src={appLogo}
              alt="Website logo"
            />
          </a>
         
        </div>
        
      </div>
      <div className="FooterWrapper__middle">
            
            <a href={href1} className="FooterWrapper__middle--anchorTag">
            {text1}
          </a>
            
            <a href={href2} className="FooterWrapper__middle--anchorTag">
            {text2}
          </a>
            
             </div>
             <div className="FooterWrapper__right">
        <div className="FooterWrapper__right--title">
         
          <a href="/" className="FooterWrapper__right--titleTag">
            THE SHOWSHANK REDEMPTION
          </a>
         
        </div>
        
      </div>

    </div>
  );
}

export default Footer;
