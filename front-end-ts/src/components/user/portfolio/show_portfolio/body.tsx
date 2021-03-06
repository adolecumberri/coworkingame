import React from "react";
import { IFile } from "src/interface/IFile";
import { API_URL } from "src/constants";

interface IProps {
  portfolio_file: IFile;
  id_user: number;
}

class BodyP extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const id_user = this.props.id_user;
    const { name, id_portfolio } = this.props.portfolio_file;

    return (
      <>
        <div className="container">
          <div className="row mb-5">
            <div className="col-2"></div>
            <div className="col-8">
              {name ? (
                <img
                  alt="portfolio header"
                  src={`${API_URL}/multimedia/user_${id_user}/portfolios/portfolio${id_portfolio}/body/${name}`}
                  className="m-0 p-0 rounded float-left"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                ""
              )}
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default BodyP;
