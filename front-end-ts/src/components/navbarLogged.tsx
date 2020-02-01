import React from "react";
import { Link } from "react-router-dom";
import Registered from "../components/user/registered";
import { LOCAL_URL } from "src/constants";

import { connect } from "react-redux";
import { IStore } from "src/interface/IStore";
import { IAccount } from "src/interface/IAccount";
import AdminButtons from "./admin/adminButtons";

interface IGlobalStateProps {
  account: IAccount | null;
}

interface IGlobalActionProps {}

type TProps = IGlobalStateProps & IGlobalActionProps;

class NavbarLogged extends React.PureComponent<TProps> {
  render() {
    const { account } = this.props;
    const isAdmin = account?.isAdmin;

    return (
      <>
        <div className="container-fluid " style={{ padding: "0px" }}>

            <div className="col-12" style={{ margin: "0px", padding: "0px" }}>
              <nav className="navbar navbar-expand navbar-light bg-light ">
                <a className="navbar-brand ml-4" href="/">
                  <img
                    src={LOCAL_URL + "/images/ico_logo40x40.png"}
                    width="40px"
                    height="40px"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main_navbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="main_navbar"
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
                    {/* <li className="nav-item active">
                      <Link to="/enterprises" className="nav-link">
                        ENTERPRISES
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/contact_us" className="nav-link">
                        CONTACT US
                      </Link>
                    </li> */}
                    {isAdmin ? (
                      <li className="nav-item active mt-n2">
                        <AdminButtons />
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                  <Registered />
                </div>
              </nav>
            </div>
          </div>
      
      </>
    );
  }
}

const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
  account
});

export default connect(mapStateToProps)(NavbarLogged);
