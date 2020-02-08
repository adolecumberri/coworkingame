import React from "react";
import { LOCAL_URL, API_URL } from "src/constants";
import { IStore } from "src/interface/IStore";
import { IAccount } from "src/interface/IAccount";
import { connect } from "react-redux";
import { myFetchFiles, myLocalStorage } from "src/utils";
import { SetAccountAction } from "src/redux/actions";
import { decode } from "jsonwebtoken";

interface IProps {}
interface IGlobalStateProps {
  account: IAccount | null;
}

interface IGlobalActionProps {
  setAccount(account: IAccount): void;
}

type TProps = IGlobalStateProps & IProps & IGlobalActionProps;

interface IState {
  update: boolean;
}

class HeaderAvatar extends React.PureComponent<TProps, IState> {
  fileAvatar: React.RefObject<HTMLInputElement>;
  fileHeader: React.RefObject<HTMLInputElement>;

  constructor(props: TProps) {
    super(props);
    this.state = {
      update: false
    };
    this.fileAvatar = React.createRef();
    this.fileHeader = React.createRef();

    this.uploadAvatar = this.uploadAvatar.bind(this);
    this.uploadHeader = this.uploadHeader.bind(this);
  }

  uploadAvatar() {
    if (this.fileAvatar.current?.files) {
      const formData = new FormData();
      const path = this.fileAvatar.current.files[0];
      formData.append("file", path);

      myFetchFiles({
        method: "PUT",
        path: `/records/user/${this.props.account?.id}/avatar`,
        formData
      }).then(json => {
        //TODO: sustituir
        if (json) {
          /* Actualizacion del token tras el update */
          let token = localStorage.getItem("coworkin_token");
          // El token trae expire & VALUE. VALUE es el token como tal.
          // lo convierto en objeto y saco el VALUE.
          // al VALUE <--! lo decodifico, porque es un token.
          let newToken: any = token ? decode(JSON.parse(token).value) : null;
          // decodifico newToken en un objeto
          newToken.avatar = json.avatar;
          newToken.header = json.header;
          /* Actualizacion TOKEN y ACCOUNT (redux) */
          myLocalStorage("coworkin_token", newToken);
          this.props.setAccount(newToken);

          //Estado para que se actualice el componente
          this.setState({ update: !this.state.update });
        }
      });
    }
  }

  uploadHeader() {
    if (this.fileHeader.current?.files) {
      const formData = new FormData();
      const path = this.fileHeader.current.files[0];
      formData.append("file", path);

      myFetchFiles({
        method: "PUT",
        path: `/records/user/${this.props.account?.id}/header`,
        formData
      }).then(json => {
        //TODO: sustituir
        if (json) {
          /* Actualizacion del token tras el update */
          let token = localStorage.getItem("coworkin_token");
          // El token trae expire & value. Value es el token como tal.
          // lo convierto en objeto y saco el value.
          let newToken = token ? JSON.parse(token).value : null;
          // decodifico newToken en un objeto
          newToken.avatar = json.avatar;
          newToken.header = json.header;
          myLocalStorage("coworkin_token", newToken);
          this.props.setAccount(newToken);

          //Estado para que se actualice el componente
          this.setState({ update: !this.state.update });
        }
      });
    }
  }

  componentDidMount() {}

  render() {
    const header = this.props.account?.header;
    const avatar = this.props.account?.avatar;
    const id = this.props.account?.id;
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
                  src={
                    avatar
                      ? `${API_URL}/multimedia/user_${id}/avatar/${avatar}`
                      : `${LOCAL_URL}/images/ico_logo40x40.png`
                  }
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
                    onChange={this.uploadHeader}
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
                  src={
                    header
                      ? `${API_URL}/multimedia/user_${id}/header/${header}`
                      : `${LOCAL_URL}/images/header.jpeg`
                  }
                  className="rounded mt-3"
                  id="foto_avatar"
                  style={{ width: "100%", maxHeight: "163px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: IGlobalActionProps = {
  setAccount: SetAccountAction
};

const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
  account
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAvatar);
