import React from "react";
import { Link } from "react-router-dom";
import Login from "./user/login";
import Register from "./user/register";
import { LOCAL_URL } from "src/constants";
interface IProps {}

interface IState {
  loginFlag: boolean;
  registerFlag: boolean;
}

class Navbar extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loginFlag: false,
      registerFlag: false
    };

    this.loginActivation = this.loginActivation.bind(this);
    this.registerActivation = this.registerActivation.bind(this);
    this.navbarClicked = this.navbarClicked.bind(this);
  }

  loginActivation() {
    const { loginFlag } = this.state;
    this.setState({ loginFlag: !loginFlag, registerFlag: false });
  }
  registerActivation() {
    const { registerFlag } = this.state;
    this.setState({ registerFlag: !registerFlag, loginFlag: false });
  }
  navbarClicked() {
    this.setState({ loginFlag: false, registerFlag: false });
  }

  render() {
    const { loginFlag, registerFlag } = this.state;
    return (
      <>
        <div className="container-fluid" style={{ margin: "0px" }}>
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                  <img
                    src={LOCAL_URL + "/images/ico_logo40x40.png"}
                    width="40px"
                    height="40px"
                    alt=""
                  />
                  Coworkingame
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
                      <Link
                        to="/main"
                        className="nav-link"
                        onClick={this.navbarClicked}
                      >
                        MAIN
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link
                        to="/explore"
                        className="nav-link"
                        onClick={this.navbarClicked}
                      >
                        EXPLORE
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link
                        to="/developers"
                        className="nav-link"
                        onClick={this.navbarClicked}
                      >
                        DEVELOPERS
                      </Link>
                    </li>
                    {/* <li className="nav-item active">
                      <Link to="/enterprises" className="nav-link" onClick={this.navbarClicked}>
                        ENTERPRISES
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/contact_us" className="nav-link" onClick={this.navbarClicked}>
                        CONTACT US
                      </Link>
                    </li> */}
                  </ul>
                  <ul className="navbar-nav ">
                    <li>
                      <button
                        type="button"
                        className="btn btn-danger mr-3"
                        data-toggle="modal"
                        onClick={this.loginActivation}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-toggle="modal"
                        onClick={this.registerActivation}
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
        {loginFlag && <Login />}
        {registerFlag && <Register registered={this.navbarClicked} />}
      </>
    );
  }
}

export default Navbar;
