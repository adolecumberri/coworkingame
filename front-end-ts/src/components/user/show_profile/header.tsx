import React from "react";
import { myFetch } from "src/utils";
import { runInThisContext } from "vm";

interface IProps {
  id_user: number;
}

interface IState {
  portfolioNumber: string;
  userName: string;
}

class Header extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      portfolioNumber: "0",
      userName: "User.?"
    };
  }

  componentDidMount() {}

  render() {
    let { portfolioNumber, userName } = this.state;
    return (
      <div className="container-fluid px-0">
        <div
          className="col-12 d-flex justify-content-center align-items-end "
          id="header"
          style={{
            backgroundColor: "#eaeaea",
            height: "350px"
          }}
        >
          <div
            className=" mb-3"
            style={{
              backgroundColor: "#f1f1f1",
              height: "120px",
              width: "120px",
              borderRadius: "20%"
            }}
          ></div>
        </div>
        <div
          className="col-12 d-flex align-items-center pl-4"
          style={{
            backgroundColor: "#3f3f3f",
            height: "45px",
            color: "#f1f1f1"
          }}
        >
          Proyects published by {userName} :{" "}
          {portfolioNumber ? portfolioNumber : "0"}
        </div>
      </div>
    );
  }
}

export default Header;
