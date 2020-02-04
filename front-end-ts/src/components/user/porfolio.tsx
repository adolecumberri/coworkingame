import React from "react";

/* Componentes del porfolio */
import PorfolioUserData from "./porfolio/porfolioUserData";
import Header from "./porfolio/header";
import PorfolioData from "./porfolio/porfolioData";
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

class Porfolio extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      numProjects: 0,
      user: null
    };
    this.setNumProjects = this.setNumProjects.bind(this);
  }

  componentDidMount() {
    /* this.props.match.params.id saca la ID de la URL*/

    setTimeout(() => {
      myFetch({
        path: `/user/${this.props.match.params.id}`,
        method: "GET"
      }).then(json => {
        this.setState({ user: { ...json[0] } });

        /* cargo los profiles del usuario */
      });
    }, 1);
  }

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
              <PorfolioData id_user={(id as unknown) as number}></PorfolioData>
            </div>
            <div className="col-3">
              <PorfolioUserData user={this.state.user}></PorfolioUserData>
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

// export default connect(mapStateToProps)(Porfolio);

export default Porfolio;
