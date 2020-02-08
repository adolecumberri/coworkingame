import React from "react";

interface IProps {
  id_user: number;
}

interface IState {}

class PortfolioData extends React.PureComponent<IProps, IState> {
  render() {
    return <div className="card-header">Information</div>;
  }
}

export default PortfolioData;
