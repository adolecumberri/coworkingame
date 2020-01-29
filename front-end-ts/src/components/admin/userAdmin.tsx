import React from "react";
import { myFetch } from "src/utils";
import { IAdminUser } from "src/interface/IUser";

interface IProps {}

interface IState {
  users: IAdminUser[] | any;
  userSelected: number;
  idSelected: number;
}

class UserAdmin extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      users: [],
      userSelected: 0,
      idSelected: 0
    };
    this.displayRBtn = this.displayRBtn.bind(this);
  }

  componentDidMount() {
    console.log("fetch lanzao");
    myFetch({
      path: "/admin/user",
      method: "POST"
    }).then(json => {
      this.setState({ users: json });
    });
  }

  displayRBtn() {
    let { idSelected, userSelected, users } = this.state;
    // console.log(idSelected); //id
    // console.log(userSelected); // indice

    return (
      <>
        <input
          type="radio"
          name="adminRB"
          onChange={e => {
            let newUsers = [...users];
            newUsers[userSelected - 1].isAdmin = 1;
            this.setState({ users: [...newUsers] });
            console.log(users);
            myFetch({
              path: "/user/" + idSelected,
              method: "PUT",
              obj: { isAdmin: 1 }
            }).then(() => {
              this.setState({ users: [...newUsers] });
            });
          }}
          checked={users[userSelected - 1].isAdmin}
          id="admin"
          className="form-check-input mr-2"
        />
        <label htmlFor="admin">Admin</label>

        <br></br>
        <input
          type="radio"
          name="adminRB"
          onChange={() => {
            let newUsers = [...users];
            newUsers[userSelected - 1].isAdmin = 0;
            myFetch({
              path: "/user/" + idSelected,
              method: "PUT",
              obj: { isAdmin: 0 }
            }).then(() => {
              this.setState({ users: [...newUsers] });
            });
          }}
          checked={!users[userSelected - 1].isAdmin}
          id="notAdmin"
          className="form-check-input mr-2"
        />
        <label htmlFor="notAdmin">No Admin</label>
      </>
    );
  }

  updateIsAdmin(id: string, value: string) {}

  render() {
    /* Algoritmica para crear las tarjetas? */

    const { users, userSelected } = this.state;
    return (
      <div className="container" style={{marginTop:"100px"}} >
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-2"></div>
          <div
            className="col-6"
            
          >
            <select
              className="form-control form-control-lg"
              defaultValue={"DEFAULT"}
              onChange={e => {
                this.setState({
                  userSelected: e.target.selectedIndex,
                  idSelected: parseInt(e.target.selectedOptions[0].value)
                });
              }}
            >
              <option disabled value="DEFAULT">
                Users to administrate
              </option>
              {users.map((user: any) => {
                return user.active ? (
                  <option key={user.id} value={user.id}>{`${user.id} - ${
                    user.name
                  } - ${user.email} - ${
                    user.isAdmin ? "Admin" : "No Admin"
                  }`}</option>
                ) : (
                  ""
                );
              })}
            </select>
          </div>
          <div className="col-2 ml-4">
            {userSelected ? this.displayRBtn() : ""}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default UserAdmin;
