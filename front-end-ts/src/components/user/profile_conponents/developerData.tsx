import React from "react";
import countries from "../../../jsons/cities.json";
import { IStore } from "../../../interface/IStore";
import { myFetch } from "../../../utils";
import { API_URL } from "../../../constants";
import { connect } from "react-redux";
import { IAccount } from "../../../interface/IAccount.js";

interface IGlobalStateProps {
  account: IAccount | null;
}

interface IGlobalActionProps {
  logout(): void;
}

interface IState {
  day: string;
  month: string;
  year: string;
  error_name: boolean;
}

type TProps = IGlobalStateProps & IGlobalActionProps;

class DeveloperData extends React.PureComponent<TProps, IState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
      error_name: false
    };

    this.checkDay = this.checkDay.bind(this);
    this.checkMonth = this.checkMonth.bind(this);
    this.checkYear = this.checkYear.bind(this);
    this.selectEvent = this.selectEvent.bind(this);

    this.updateUserFromInput = this.updateUserFromInput.bind(this);
    this.updateUserFromSelect = this.updateUserFromSelect.bind(this);
    this.UpdateUserBirth = this.UpdateUserBirth.bind(this);
  }

  checkDay(e: { target: { value: any } }) {
    let {
      target: { value }
    } = e;

    if (parseInt(value) <= 31 || !parseInt(value)) {
      this.setState({ day: value });
    }

    if (value.length == "2") {
      document.getElementById("month-input")?.focus();
    }
    /* Esto puede fallar porque aunque no se actualice el estado,
    puede que el valor del imput se almacene */
  }

  checkMonth(e: { target: { value: any } }) {
    let {
      target: { value }
    } = e;

    if (parseInt(value) <= 12 || !parseInt(value)) {
      this.setState({ month: value });
    }

    if (value.length == "2") {
      document.getElementById("year-input")?.focus();
    }
  }

  checkYear(e: { target: { value: any }; type: any }) {
    let {
      target: { value }
    } = e;
    if (e.type === "blur") {
      console.log(e.type);
    } else {
    }
    if (parseInt(value) <= new Date().getFullYear() || !parseInt(value)) {
      if (
        (value.length == "4" && parseInt(value) <= 1950) &&
        e.type === "blur"
      ) {
        this.setState({ year: "1970" });
      } else {
        this.setState({ year: value });
      }
    } else {
      this.setState({ year: "" + new Date().getFullYear() });
    }
    if (value.length == "4") {
      document.getElementById("country")?.focus();
    }
  }

  selectEvent(e: any) {
    let select = e.target;
    console.log(select);
    if (e.type === "mousedown") {
      select.size = 8;
    } else {
      if (e.type === "blur") {
        select.size = 0;
      } else {
        select.size = 0;
      }
    }
  }

  updateUserFromInput(e: any) {
    let { account } = this.props;
    let { name, value } = e.target;
    let obj: any = {};
    if (value.length >= 3) {
      if (name === "name") {
        obj = { name: value };
      } else {
        obj = { state: value };
      }

      myFetch({
        path: `/user/${account?.id}`,
        method: "PUT",
        obj: obj
      }).then(res => {
        //si resp es null, falla el insert porque el name ya existe
        if (!res && name == "name") {
          this.setState({ error_name: true });
        } else {
          this.setState({ error_name: false });
        }
        console.log(res);
      });
    }
  }

  updateUserFromSelect(e: { target: HTMLSelectElement }) {
    let { account } = this.props;
    let { name, selectedOptions, selectedIndex } = e.target;
    let obj: any = {};
    console.log(selectedIndex);
    console.log(e.target);
    console.log(selectedOptions);
    console.log(selectedOptions[0]);
    if (name === "gender") {
      obj = { gender: selectedOptions[0].value };
    } else {
      obj = { country: selectedOptions[0].value };
    }
    console.log(obj);
    try {
      myFetch({
        path: `/user/${account?.id}`,
        method: "PUT",
        obj: obj
      });
    } catch (err) {
      console.log(err);
    }
  }
  UpdateUserBirth() {
    setTimeout(() => {
      let { day, month, year } = this.state;
      let { account } = this.props;

      if (day !== "" || month !== "" || year !== "") {
        let obj: any = {};
        obj = {
          age: `STR_TO_DATE(CONCAT('${year}','-',LPAD('${month}',2,'00'),'-',LPAD('${day}',2,'00')), '%Y-%m-%d')`
        };
        myFetch({
          path: `/user/${account?.id}`,
          method: "PUT",
          obj: obj
        });
      }
    }, 1000);
  }

  render() {
    const { day, month, year, error_name } = this.state;

    return (
      <>
        <div className="container">
          <div className="card text-center  mt-4">
            <div className="card-header">
              <h5 className="col-12 mt-1">Developer Information</h5>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="form-group col-5">
                  {!error_name ? (
                    <label htmlFor="name">Username</label>
                  ) : (
                    <label htmlFor="name" style={{ color: "red" }}>
                      User Already Exist{" "}
                    </label>
                  )}
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your username? ;)"
                    onBlur={this.updateUserFromInput}
                  />
                </div>
                <div className="form-group col-3">
                  <label htmlFor="name">Gender</label>
                  <select
                    name="gender"
                    className="form-control"
                    defaultValue="DEFAULT"
                    onChange={this.updateUserFromSelect}
                  >
                    <option value="DEFAULT" disabled>
                      Find yourst, able?{" "}
                    </option>
                    <option value="other">Other</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group col-4">
                  <label htmlFor="name">Username</label>
                  <div
                    className="form-control m-0 p-0 border-0"
                    style={{ textAlign: "left" }}
                  >
                    <input
                      id="day-input"
                      type="number"
                      className=" form-control col-4 float-left my-numeric-input"
                      placeholder="DD"
                      value={day}
                      onChange={this.checkDay}
                      onBlur={this.UpdateUserBirth}
                      min="1"
                      max="31"
                    />

                    <input
                      id="month-input"
                      type="number"
                      className=" form-control col-4 float-left"
                      placeholder="MM"
                      value={month}
                      onChange={this.checkMonth}
                      onBlur={this.UpdateUserBirth}
                      min="1"
                      max="12"
                    />
                    <input
                      id="year-input"
                      type="number"
                      className=" form-control col-4 float-left"
                      placeholder="YYYY"
                      value={year}
                      onChange={this.checkYear}
                      onBlur={e => {
                        this.checkYear(e);
                        this.UpdateUserBirth();
                      }}
                      min="1950"
                      max={new Date().getFullYear()}
                    />
                  </div>
                </div>
                <div className="form-group col-6">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    className="form-control"
                    defaultValue={"DEFAULT"}
                    onMouseDown={this.selectEvent}
                    onChange={event => {
                      this.selectEvent(event);
                      this.updateUserFromSelect(event);
                    }}
                    onBlur={this.selectEvent}
                    style={{ position: "absolute", maxWidth: "94%" }}
                  >
                    <option
                      disabled
                      value="DEFAULT"
                      style={{ color: "#eaeaea" }}
                    >
                      Where do you come from?
                    </option>
                    {countries.map((country: any, index: number) => {
                      return (
                        <option key={index} value={country.code}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-6">
                  <label htmlFor="state">City</label>
                  <input
                    name="state"
                    type="text"
                    className="form-control"
                    placeholder=" City ? <---"
                    onBlur={this.updateUserFromInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

/* algo que recibo */
const mapStateToProps = ({ account }: IStore): IGlobalStateProps => ({
  account
});

export default connect(mapStateToProps)(DeveloperData);
