import React from "react";
import "./AppMain.css";
import { Link } from "react-router-dom";

function FooterMain() {
  return (
    <div className="  z-10">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
          rel="stylesheet"
        />
      </div>
      <div className="bodyfooter">
        <footer>
          <div className="footer">
            <div className="row">
              <Link to="#">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-youtube"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-twitter"></i>
              </Link>
            </div>

            <div className="row">
              <ul>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Our Services</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Career</Link>
                </li>
              </ul>
            </div>

            <div className="row flex flex-row justify-center ">
              <img
                src="/dashdrop-express-high-resolution-logo-transparent.png"
                style={{ width: "200px", fontFamily: "Georgia, serif" }}
                alt="logo"
                className="text-2xl pt-5"
              ></img>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default FooterMain;
