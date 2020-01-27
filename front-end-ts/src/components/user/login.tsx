import React from "react";

/*-------------------------------------- Import de redux: ----------------------------*/
import {connect} from "react-redux"; 
  /* Acciones que voy a usar con la Store de Redux */
import { SetAccountAction } from "../../redux/actions";
  /* Interfaz de tipos de datos acumulados */
import { IAccount } from "../../interface/IAccount";



interface IProps{}

interface IGlobalActionProps{
  setAccount( account: IAccount ): void;
}

type TProps = IProps & IGlobalActionProps;





class login extends React.PureComponent {
  render() {
    return (
      <div
        className="modal fade"
        id="login-modal"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: IGlobalActionProps = {
  setAccount: SetAccountAction
};

export default login;
