import React from "react";
import { Link } from "react-router-dom";
import Login from "./user/login";
import Register from "./user/register";
interface IProps{

}


class Navbar extends React.PureComponent <IProps>{
  constructor(props: IProps){
    super(props);
  }

  render() {

    return (
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img
                  src="images/ico_logo40x40.png"
                  width="30"
                  height="30"
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
                    <Link to="/" className="nav-link">
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
                <ul className="navbar-nav ">
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary mr-3"
                      data-toggle="modal"
                      data-target="#login-modal"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#register-modal"
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
{ <Login />}
{ <Register />}

     </>
    );
  }
}

export default Navbar;
