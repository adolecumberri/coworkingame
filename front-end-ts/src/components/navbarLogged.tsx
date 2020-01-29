import React from "react";
import { Link } from "react-router-dom";
import Registered from "../components/user/registered";
import { LOCAL_URL } from "src/constants";

class NavbarLogged extends React.PureComponent {

  render() {

    return (
      <>
        <div className="container-fluid" style={{ margin: "0px" }}>
          <div className="row ">
            <div className="col-12" style={{ margin: "0px", padding: "0px" }}>
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="/">
                  <img
                    src={LOCAL_URL+"/images/ico_logo40x40.png"}
                    width="40px"
                    height="40px"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto mx-auto">
                    <li className="nav-item active">
                      <Link to="/main" className="nav-link">
                        MAIN
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/explore" className="nav-link">
                        EXPLORE
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/developers" className="nav-link">
                        DEVELOPERS
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/enterprises" className="nav-link">
                        ENTERPRISES
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/contact_us" className="nav-link">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                  <Registered/>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavbarLogged;
