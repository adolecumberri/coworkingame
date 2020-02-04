import React from "react";

interface IProps {
  id_user: number;
}

interface IState {}

class PorfolioData extends React.PureComponent<IProps, IState> {
  render() {
    return <div className="card-header">Information</div>;
  }
}

export default PorfolioData;
