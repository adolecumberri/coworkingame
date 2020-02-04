import React from "react";
import { IProfile } from "src/interface/IProfile";

/* JSON de ciudades. */
import countries from "src/jsons/cities.json";
import { myFetch } from "src/utils";

interface IProps {}

interface IState {
  profiles: IProfile;
}

class FilterDev extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      profiles: {
        categories: [],
        catNulls: [],
        catNotNulls: []
      }
    };
  }
  componentDidMount() {
    myFetch({
      path: "/profile",
      method: "GET"
    }).then(prof => {
      let newProfiles: IProfile = {
        categories: prof.categories,
        catNotNulls: prof.catNotNulls,
        catNulls: prof.catNulls
      };
      this.setState({ profiles: newProfiles });
    });
  }

  render() {
    const { categories, catNotNulls, catNulls } = this.state.profiles;
    console.log(categories);
    console.log(catNotNulls);
    console.log(catNulls);

    return (
      <>
        <h2 className="text-secondary mb-5 mt-4">Filters</h2>

        <select
          id="country"
          name="country"
          className="form-control mr-2"
          defaultValue="DEFAULT"
        >
          <option disabled value="DEFAULT" style={{ color: "#eaeaea" }}>
            Countries
          </option>
          {countries.map((country: any, index: number) => {
            return (
              <option key={index + "01"} value={country.code}>
                {country.name}
              </option>
            );
          })}
        </select>

        <h5 className=" text-secondary mt-5"> Profiles </h5>
        <div>
          {catNulls.map(prof => {
            return (
              <>
                <div
                  key={prof.id + "02"}
                  className="form-group form-check m0 mr-0 mb-1 py-0 w-100"
                >
                  {prof.name}
                </div>
              </>
            );
          })}
        </div>
        <div>
          {categories.map(({ category }, index) => {
            let categoriesWithouSpaces = category.replace(/\s/g, "");
            return (
              <>
                <a
                  key={index}
                  href={`#id${categoriesWithouSpaces}0`}
                  className="form-group form-check m0 mr-0 mb-1 py-0 w-100"
                  id={categoriesWithouSpaces}
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls={`#${categoriesWithouSpaces}0`}
                >
                  <label>{category}</label> <i>&darr;</i>
                </a>

                <div className="collapse" id={`id${categoriesWithouSpaces}0`}>
                  {catNotNulls.map((prof, i) => {
                    return prof.category === category ? (
                      <div key={i + "04"}> {prof.name} </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default FilterDev;
