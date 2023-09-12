import React, { Component } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import { CommonUtils } from "../../../../../../utils";

class Introduce extends Component {
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
                    backgroundImage: "url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets//images/s-intro/bg_desktop.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                }
            } >
            <
            div class = "img1"
            style = {
                {
                    backgroundImage: "url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets/images/s-intro/bg_text.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "560px",
                    height: "140px",
                    position: "absolute",
                    top: "100px",
                    left: "125px",
                }
            } >
            <
            /div>{" "} <
            div className = "img2"
            style = {
                {
                    backgroundImage: "url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets/images/s-intro/bg_text2.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "560px",
                    height: "54px",
                    position: "absolute",
                    bottom: "25px",
                    right: "25px",
                }
            } >
            <
            /div>{" "} <
            div className = "img3"
            style = {
                {
                    backgroundImage: "url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets//images/icon/mouse.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "100px",
                    height: "50px",
                    position: "absolute",
                    bottom: "25px",
                    left: "50%",
                    cursor: "pointer",
                }
            } >
            <
            /div>{" "} < /
            div > { " " } <
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduce);