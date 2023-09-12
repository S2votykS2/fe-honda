import React, { Component } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import { CommonUtils } from "../../../../../../utils";

class TryDriveCar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapShot) {}

    render() {
        return ( <
            >
            <
            div className = "img-introduce"
            style = {
                {
                    backgroundColor: "#12141D",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "100vh",
                }
            } >
            <
            /div>{" "} < /
            >
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TryDriveCar);