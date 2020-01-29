import React from "react";
import { Link } from "react-router-dom";

class NavbarAdmin extends React.PureComponent {

  

  render() {
    return (
      <div
        className="row"
        style={{
          backgroundColor: "#f1f1f1",
          width: "100vw",
          height: "7vh",
          borderBottom: "1px solid gray",
          margin: "0px"
        }}
      >
        <div className="col-4"></div>

        <Link to="/admin/user" style={{textDecoration: "none", color: "inherit"}}>
        <button className="btn btn-danger ml-2 mt-2 mb-2">
       
            Users
        
        </button>
        </Link>

        <div className="col-4"></div>
      </div>
    );
  }
}

export default NavbarAdmin;
