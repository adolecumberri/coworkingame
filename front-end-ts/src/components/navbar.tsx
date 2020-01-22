import React from "react";
import { Link } from "react-router-dom";

interface IProps{

}
interface IState{
  loginOpen : boolean;
  registerOpen : boolean;
}
class Navbar extends React.PureComponent <IProps, IState>{

  constructor(props: IProps){
    super(props);
    this.state = {
      loginOpen : false,
      registerOpen : false
    }


    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    
  }

  showRegister(){

  }

  showLogin(){

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
                  src="ico_logo.png"
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
                      onClick = { this.showLogin }
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#login-modal"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick = { this.showRegister }
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

     </>
    );
  }
}

export default Navbar;
