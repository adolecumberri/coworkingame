import React from "react";

interface IProps {
  id_user: number | undefined
}


class PorfolioData extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-header">
        Information
      </div>
    );
  }
}

export default PorfolioData;
