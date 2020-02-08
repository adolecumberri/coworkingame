import React from "react";
import { myFetch } from "src/utils";
import { IUser } from "src/interface/IUser";

/* JSON de ciudades. */
import countries from "src/jsons/cities.json";
import { IportfolioUser } from "src/interface/IProfile";

interface IProps {
  user: IUser | null;
}
interface IState {
  user_profile: IportfolioUser | undefined;
}

class PortfolioUserData extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user_profile: undefined
    };
  }

  render() {
    let userData: IUser = { ...this?.props?.user };
    const { active } = userData;
    const categories = this.state.user_profile?.categories;
    const result = this.state.user_profile?.result;
    //mientra no cargue, sigo pidiendo los perfiles del usuario
    if (this.state.user_profile === undefined) {
      setTimeout(() => {
        myFetch({
          path: `/profile/user/${userData.id}`,
          method: "POST"
        }).then(profiles => {
          profiles
            ? this.setState({ user_profile: { ...profiles } })
            : console.log("sin profiles");
        });
      }, 100);
    }
    // const {} = this.props.user;
    return active ? (
      <div>
        <div className="card-header p-0">Information</div>
        {userData.age ? (
          <div className="">{userData.age?.substring(0, 4)}</div>
        ) : (
          ""
        )}
        {userData.gender ? <div className="">{userData.gender}</div> : ""}
        {userData?.country ? (
          <div className="">
            {
              countries.find(e => {
                if (e.code === userData?.country) return true;
              })?.name
            }
          </div>
        ) : (
          ""
        )}

        {this.state.user_profile ? (
          <div>
            <div className="card-header p-0">Knowledge</div>
            {result?.map((row, index) => {
              return row.category === null ? (
                <div key={index}>{`${row.name}`}</div>
              ) : (
                ""
              );
            })}
            <div>
              {categories?.map((categ, index) => {
                return (
                  <>
                    <div key={index} className="ml-3">
                      {categ.category}
                    </div>
                    <div>
                      {result?.map((row, index) => {
                        return row.category === categ.category ? (
                          <div key={index}>{`${row.name}`}</div>
                        ) : (
                          ""
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      <div>This user is not active</div>
    );
  }
}

export default PortfolioUserData;
