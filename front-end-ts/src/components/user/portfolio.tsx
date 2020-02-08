import React from "react";

/* Componentes del portfolio */
import PortfolioUserData from "./show_profile/portfolioUserData";
import Header from "./show_profile/header";
import PortfolioData from "./show_profile/portfolioData";
import { myFetch } from "src/utils";
import { IUser } from "src/interface/IUser";
import { RouteComponentProps } from "react-router-dom";

type IProps = RouteComponentProps<{
  id?: string;
}>;

// interface IGlobalStateProps {
//   account: IAccount | null;
// }

interface IState {
  user: IUser | null;
  numProjects: number;
}

class portfolio extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      numProjects: 0,
      user: null
    };
    this.setNumProjects = this.setNumProjects.bind(this);
  }

  componentDidMount() {}

  setNumProjects(number: number) {
    this.setState({ numProjects: number });
  }

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Header id_user={(id as unknown) as number}></Header>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-9">
              <PortfolioData
                id_user={(id as unknown) as number}
              ></PortfolioData>
            </div>
            <div className="col-3">
              <PortfolioUserData user={this.state.user}></PortfolioUserData>
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

export default portfolio;
