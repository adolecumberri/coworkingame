import React from "react";
import { LOCAL_URL } from "src/constants";

class HeaderAvatar extends React.PureComponent {
  render() {
    return (
      <div className="container" style={{ border: "1px solid black" }}>
        <div className="card text-center  mt-4">
          <div className="card-header">
            <h5 className="col-12 mt-1">Header and Avatar of the portfolio </h5>
          </div>

          <div className="row">
            <div className="card-body  col-4 px-5">
              <div className="form-group col-10 m-auto py-1">
                <label>Upload avatar</label>
              </div>
              <div className="panel-body centered">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="fileAvatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={e => {
                      console.log(e);
                    }}
                  />
                  <label
                    className="custom-file-label pl-n5"
                    htmlFor="fileAvatar"
                  >
                    Choose Avatar
                  </label>
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <img
                  src={LOCAL_URL + "/images/ico_logo40x40.png"}
                  className="rounded-circle mt-3"
                  id="foto_avatar"
                  style={{ height: "160px", width: "160px" }}
                />
              </div>
            </div>

            <div className="card-body  col-8 px-5">
              <div className="form-group col-10 m-auto py-1">
                <label>Upload Header</label>
              </div>
              <div className="panel-body centered">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="fileAvatar"
                    accept=".png, .jpg, .jpeg"
                  />
                  <label
                    className="custom-file-label pl-n5"
                    htmlFor="fileAvatar"
                  >
                    Choose Avatar
                  </label>
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <img
                  src={LOCAL_URL + "/images/header.jpeg"}
                  className="rounded mt-3"
                  id="foto_avatar"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderAvatar;
