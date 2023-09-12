import React, { Component } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import { withRouter } from "react-router";
import { postVerifyTryDrive } from "../../../../../services/carService";
// import queryString from "query-string";

class ConfirmTryDrive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirm: false,
        };
    }

    async componentDidMount() {
        // let parsed = queryString.parse(this.props.location.search);
        let urlParams = new URLSearchParams(this.props.location.search);
        let token = urlParams.get("token");
        let email = urlParams.get("email");
        console.log("check token:", token);
        console.log("check email:", email);
        let response = await postVerifyTryDrive(email, token);
        if (response.data && response.data.code === 0)
            this.setState({
                isConfirm: true,
            });
    }
    componentDidUpdate(prevProps, prevState, snapShot) {}

    render() {
        let { isConfirm } = this.state;
        return ( <
            React.Fragment >
            <
            Scrollbars style = {
                { width: "100vw", height: "100vh" } } >
            <
            Header / >
            <
            div className = ""
            style = {
                {
                    marginTop: "97px",
                    fontSize: "32px",
                    margin: "0 auto",
                    fontWeight: "700",
                    color: "yellow",
                    width: "1200px",
                    maxWidth: "100%",
                }
            } > { " " } {
                isConfirm
                    ?
                    "Xác nhận lịch lái thử thành công" :
                    "Bạn đã xác nhận lịch rồi hoặc lịch không tồn tại"
            } { " " } <
            /div>{" "} <
            Footer / >
            <
            /Scrollbars>{" "} <
            /React.Fragment>
        );
    }
}
export default withRouter(ConfirmTryDrive);