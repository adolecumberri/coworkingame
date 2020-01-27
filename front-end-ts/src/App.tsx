import React from "react";
import "./assets/App.css";
import { generateAccountFromToken } from "./utils";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

/* IMPORT DE COMPONENTES  */
import NavbarUnlogged from "./components/navbarUnlogged";
import main from "./components/main/index_main";
import explore from "./components/explore/index_explore";
import developers from "./components/developers/index_developers";
import enterprises from "./components/enterprise/index_enterprise";
import contact_us from "./components/contact_us/index_contact_us";
import { IAccount } from "./interface/IAccount";
import NavbarLogged from "./components/navbarLogged";
import { SetAccountAction } from "./redux/actions";
import { IStore } from "./interface/IStore";
import { connect } from "react-redux";


interface IGlobalStateProps {
  account: IAccount | null;
}

interface IGlobalActionProps {
  setAccount(account: IAccount): void;
}

type TProps = IGlobalStateProps & IGlobalActionProps;

class App extends React.PureComponent<TProps> {

  componentWillMount() {
    const { setAccount } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      setAccount(generateAccountFromToken(token));
    }
  }

  render() {
    const {account} = this.props;
    
    return (
      <div className="app">
        <BrowserRouter>
          {!account && <NavbarUnlogged />}
          {account && <NavbarLogged /> }
          <Switch>
            <Route path="/" exact component={main} />
            <Route path="/contact_us" exact component={contact_us} />
            <Route path="/developers" exact component={developers} />
            <Route path="/enterprises" exact component={enterprises} />
            <Route path="/explore" exact component={explore} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
  account
});

const mapDispatchToProps: IGlobalActionProps = {
  setAccount: SetAccountAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);