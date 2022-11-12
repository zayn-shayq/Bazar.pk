import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Team Members </h4>
        <p>
        Zain
        <br/>
        Ammar
        <br/>
        Anam
        <br/>
        Mehreen
        </p>

      </div>

      <div className="midFooter">
        <h1>Bazar.pk</h1>
        <p>Complete Bazar On a Single Click</p>

        <p>Copyrights 2022 &copy; Software Construction & Development</p>
      </div>

      <div className="rightFooter">
        <h4>Navigation</h4>
        <a href="http://instagram.com/meabhisingh">About Us</a>
        <a href="http://youtube.com/6packprogramemr">Contact Us</a>
        <a href="http://instagram.com/meabhisingh">Privicy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
