import React from "react";

class HeadDev extends React.PureComponent {
  render() {
    return (
      <>
        <div className="row mt-4">
          <div className="col-4 ">
            <h2 className="text-secondary mb-5 float-left">Desarrolladores</h2>
          </div>
          <div className="col-8 ">
            <input
              id="buscador"
              className="form-control mr-sm-2 pl-5"
              style={{ height: "50px" }}
              type="text"
              placeholder="User Searcher"
            />
          </div>
        </div>
      </>
    );
  }
}

export default HeadDev;
