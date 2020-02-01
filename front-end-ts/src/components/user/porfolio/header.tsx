import React from "react";


interface IProps {
    numOfProjects: number
}

interface IState {

}

class Header extends React.PureComponent<IProps>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        let {numOfProjects} = this.props;
        return (
            <div className="container-fluid px-0">
                <div
                    className="col-12 d-flex justify-content-center align-items-end "
                    id="header"
                    style={{
                        backgroundColor: "#eaeaea",
                        height: "350px"
                    }}>
                    <div
                        className=" mb-3"
                        style={{
                            backgroundColor: "#f1f1f1",
                            height: "120px",
                            width: "120px",
                            borderRadius: "20%"
                        }
                        }>

                    </div>
                </div>
                <div
                    className="col-12 d-flex align-items-center pl-4"
                    style={{
                        backgroundColor: "#3f3f3f",
                        height: "45px",
                        color: "#f1f1f1"
                    }}>
                    Proyects published by $User: {numOfProjects}
    
                </div>

            </div>
        );
    }
}

export default Header;
