import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Content from "./Content/Content";
import * as action from "../../../../store/actions";

class MotorbikeAccessory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accessories: [],
            accessoriesNotItem: [],
        };
    }

    async componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapShot) {

    }
    render() {
        console.log("check props", this.props);
        return ( <
            React.Fragment >
            <
            Scrollbars style = {
                { width: "100vw", height: "100vh" } } > { " " } <
            Header / >
            <
            Content / >
            <
            Footer / >
            <
            /Scrollbars>{" "} <
            /React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeAccessory);