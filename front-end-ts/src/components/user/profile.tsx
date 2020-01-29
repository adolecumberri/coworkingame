import React from "react";
import { LOCAL_URL } from "src/constants";
import HeaderAvatar from "./profile_conponents/header_avatar";

class Profile extends React.PureComponent {
  render() {
    return (
      <div
        style={{ backgroundColor: "#f1f1f1", width: "100vw", height: "92vh" }}
      >
        <HeaderAvatar />
        <div className="container" style={{ border: "1px solid black" }}></div>
      </div>
    );
  }
}

export default Profile;
