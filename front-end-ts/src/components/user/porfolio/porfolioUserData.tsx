import React from "react";
import { myFetch } from "src/utils";
import { IUser } from "src/interface/IUser";

/* JSON de ciudades. */
import countries from "src/jsons/cities.json";

interface IProps {
  user: IUser | null
}
interface IState {

}

class PorfolioUserData extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {

    console.log(this?.props?.user);
    let userData: IUser = { ...this?.props?.user };
    const { active } = userData;

    console.log(

    );

    // const {} = this.props.user;
    return (
      active ? (
        <div>
          <div className="card-header p-0">
            Information
        </div>
        <div className="">
          {userData.age?.substring(0,4)}
        </div>
        
        <div className="">
          {userData.gender}
        </div>
          <div className="">
            {countries.find((e) => {
              if (e.code == userData?.country)
                return true;
            })?.name}
          </div>
        </div>

      ) : (
          <div>This user is not active</div>
        )
    );
  }
}

export default PorfolioUserData;
