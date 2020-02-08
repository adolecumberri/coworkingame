import React from "react";

/* Componentes del portfolio */
import PortfolioUserData from "./show_profile/portfolio_user_data";
import Header from "./show_profile/header";
import PortfolioData from "./show_profile/portfolio_data";
import { myFetch } from "src/utils";
import { IUser } from "src/interface/IUser";
import { RouteComponentProps } from "react-router-dom";
import { IAccount } from "src/interface/IAccount";

interface IProps {}

interface IState {
  id: string;
}

class UserProfile extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    let url = window.location.href;
    let id_portfolio = url.substring(url.lastIndexOf("/") + 1);
    myFetch({
      path: `/user/${id_portfolio}`,
      method: "GET"
    }).then(json => {
      console.log("EL JSON");
      console.log(json);
    });
  }

  render() {
    //const { id } = this.props.account as IAccount;
    // console.log("La id del profile_index: " + id);
    return (
      <div>
        {/* <Header id_user={(id as unknown) as number}></Header> */}
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-9">
              {/* <PortfolioData
                id_user={(id as unknown) as number}
              ></PortfolioData> */}
            </div>
            <div className="col-3">
              {/* <PortfolioUserData user={this.state.user}></PortfolioUserData> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* algo que recibo */
// const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
//   account
// });

// export default connect(mapStateToProps)(portfolio);

export default UserProfile;
