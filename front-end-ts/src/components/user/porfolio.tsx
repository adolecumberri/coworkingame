import React from "react";

/* Componentes del porfolio */
import PorfolioUserData from "./porfolio/porfolioUserData";
import Header from "./porfolio/header";
import PorfolioData from "./porfolio/porfolioData";
import { IAccount } from "src/interface/IAccount";
import { IStore } from "src/interface/IStore";
import { connect } from "react-redux";
import { myFetch } from "src/utils";
import { IUser } from "src/interface/IUser";

interface IProps { }
interface IState {
    numProjects: number
}

interface IGlobalStateProps {
    account: IAccount | null;
}

interface IState {
    user: IUser | null
}

type TProps = IProps & IGlobalStateProps
class Porfolio extends React.PureComponent<TProps, IState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            numProjects: 0,
            user: null
        }
        this.setNumProjects = this.setNumProjects.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            myFetch({
                path: `/user/${this?.props?.account?.id}`,
                method: "GET"
            }).then((json) => {
                this.setState({ user: { ...json[0] } });
            });
        }, 1);

    }

    setNumProjects(number: number) {
        this.setState({ numProjects: number });
    }

    render() {
        return (
            <div >
                <Header numOfProjects={this.state.numProjects}></Header>
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-9">
                            <PorfolioData id_user={this?.props?.account?.id}>
                            </PorfolioData>
                        </div>
                        <div className="col-3">
                            <PorfolioUserData user={
                                this.state.user
                            }>
                            </PorfolioUserData>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* algo que recibo */
const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
    account
});

export default connect(mapStateToProps)(Porfolio);
