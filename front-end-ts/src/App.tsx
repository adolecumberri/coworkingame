import React from "react";
import "./assets/App.css";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

/* IMPORT DE COMPONENTES  */
import Navbar from "./components/navbar";
import main from "./components/main/index_main";
import explore from "./components/explore/index_explore";
import developers from "./components/developers/index_developers";
import enterprises from "./components/enterprise/index_enterprise";
import contact_us from "./components/contact_us/index_contact_us";

interface IProps {}

interface IState {}

class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
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

export default App;
