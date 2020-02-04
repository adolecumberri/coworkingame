import React from "react";
import FilterDev from "./developers_components/filter";
import HeadDev from "./developers_components/head";
import BodyDev from "./developers_components/body";

class developers extends React.PureComponent {
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "antiquewhite",
          width: "100vw",
          height: "92vh"
        }}
      >
        <div className="row">
          <div
            className="col-3"
            style={{
              backgroundColor: "beige",
              height: "92vh"
            }}
          >
            <FilterDev />
          </div>

          <div
            className="col-9"
            style={{
              backgroundColor: "#f1f1f1",
              height: "92vh"
            }}
          >
            <HeadDev />
            <BodyDev />
          </div>
        </div>
      </div>
    );
  }
}

export default developers;
