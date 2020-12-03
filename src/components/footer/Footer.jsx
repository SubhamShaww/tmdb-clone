import React from "react";
import Column from "./Column";
import footerLogo from "./moviesdb-footer.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="blue-bg">
      <div className="footer-nav">
        <div className="join-community">
          <img src={footerLogo} alt="footer-logo" width="130" height="94" />
          <a className="footer-btn" href="#!">
            JOIN THE COMMUNITY
          </a>
        </div>
        <Column
          title="THE BASICS"
          link1="About TMDb"
          link2="Contact Us"
          link3="Support Forums"
          link4="API"
          link5="System Status"
        />
        <Column
          title="GET INVOLVED"
          link1="Contribution Bible"
          link2="3rd Party Applications"
          link3="Add New Movie"
          link4="Add New TV Show"
        />
        <Column
          title="COMMUNITY"
          link1="Guidelines"
          link2="Discussions"
          link3="Leaderboard"
          link4="Twitter"
        />
        <Column
          title="LEGAL"
          link1="Terms of Use"
          link2="API Terms of Use"
          link3="Privacy Policy"
        />
      </div>
      <section>Build 31374e0 (620)</section>
    </footer>
  );
}

export default Footer;
