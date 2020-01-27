import React from "react";
import { Link } from "react-router-dom";
import Login from "./user/login";
import Register from "./user/register";
interface IProps {}

interface IState {
  loginFlag: boolean;
  registerFlag: boolean;
}

class NavbarLogged extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loginFlag: false,
      registerFlag: false
    };

    this.loginActivation = this.loginActivation.bind(this);
    this.registerActivation = this.registerActivation.bind(this);
  }

  loginActivation() {
    const {loginFlag} = this.state;
    this.setState( { loginFlag : !loginFlag, registerFlag: false});
  }
  registerActivation() {
    const {registerFlag} = this.state;
    
    this.setState( { registerFlag : !registerFlag, loginFlag: false});
  }
  render() {
    const { loginFlag, registerFlag } = this.state;
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
                   hola
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

export default NavbarLogged;
