import React from "react";
import { IPortfolioCard } from "src/interface/IPorfolio";
import { API_URL } from "src/constants";
import { Link } from "react-router-dom";

interface IProps {
  portfolio: IPortfolioCard;
  id_user: number | undefined;
}

interface IState {}

class PortfolioCard extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { id_user } = this.props;
    const { portfolio } = this.props;
    return (
      <>
        <div className="col-3 p-2">
          <div
            className="p-2 rounded"
            style={{
              border: "solid 1px #eee",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.2)"
            }}
          >
            <div className="" style={{ backgroundColor: "#fff" }}>
              <Link to={`/portfolio/${portfolio.id}`}>
                <img
                  src={`${API_URL}/multimedia/user_${id_user}/portfolios/portfolio${portfolio.id}/${portfolio.avatar}`}
                  alt="Avatar"
                  className="image"
                  style={{
                    borderRadius: "5px 5px 0px 0px",
                    maxHeight: "169px",
                    maxWidth: "169px"
                  }}
                />
                {/* <i className="" aria-hidden="true"></i> Mostrar cuando hover*/}
              </Link>
              <div className="row">
                <div className="col-12 text-secondary mt-2">Likes here...</div>
                <div className="col-2"></div>
                <div
                  className="col-8"
                  style={{ borderBottom: "1px solid black" }}
                ></div>
                <div className="col-12 text-secondary align-middle">
                  Views here...
                </div>
              </div>
              <div
                className="text bg-danger p-2 px-3 mr-2 mt-2 rounded"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                <span style={{ color: "#f1f1f1" }}> D </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioCard;
