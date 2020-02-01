import React from "react";
import { LOCAL_URL } from "src/constants";
import { IStore } from "src/interface/IStore";
import { IAccount } from "src/interface/IAccount";
import { connect } from "react-redux";
import { myFetchFiles } from "src/utils";

interface IProps { }
interface IGlobalStateProps {
  account: IAccount | null;
}
type TProps = IGlobalStateProps & IProps;

interface IState {
  avatarFile: string;
  headerFile: string;
}

class HeaderAvatar extends React.PureComponent<TProps, IState> {
  fileAvatar: React.RefObject<HTMLInputElement>;
  fileHeader: React.RefObject<HTMLInputElement>;

  constructor(props: TProps) {
    super(props);
    this.state = {
      avatarFile: "",
      headerFile: ""
    };
    this.fileAvatar = React.createRef();
    this.fileHeader = React.createRef();
    this.uploadAvatar = this.uploadAvatar.bind(this);
  }

  uploadAvatar() {
    const { account } = this.props;
    if (this.fileAvatar.current?.files) {
      const formData = new FormData();
      const path = this.fileAvatar.current.files[0];
      console.log(path);
      formData.append("avatar", path);

      myFetchFiles({
        method: "POST",
        path: "/file/user",

        formData
      }).then(json => {
        if (json) {
          console.log("Sufro");
          console.log(json);
        }
      });
    }

  }

  render() {
    //var activeRouteName = currentRoutes[currentRoutes.length - 1].name;
    // console.log(activeRouteName);
    return (
      <div className="container">
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
                    name="avatar"
                    ref={this.fileAvatar}
                    onChange={this.uploadAvatar}
                  />
                  <label
                    className="custom-file-label pl-n5 pr-5"
                    htmlFor="avatar"
                  >
                    Choose Avatar
                  </label>
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <img
                  alt="avatar for your Profile!"
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
                    name="header"
                    ref={this.fileHeader}
                    accept=".png, .jpg, .jpeg"
                  // onChange={this.uploadFile}
                  />
                  <label className="custom-file-label pl-n5" htmlFor="header">
                    Choose Header
                  </label>
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <img
                  alt="Header for your profile"
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
const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
  account
});
export default connect(mapStateToProps)(HeaderAvatar);
