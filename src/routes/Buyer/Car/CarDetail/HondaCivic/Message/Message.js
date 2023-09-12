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
                    backgroundImage: "url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets//images/s-message/bg.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "100vh",
                }
            } >
            <
            h3 className = "text1"
            style = {
                {
                    color: "#cc0000",
                    fontSize: "30px",
                    marginTop: "120px",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    textShadow: "rgb(255, 0, 0) 0px 0px 30px",
                    textAlign: "center",
                }
            } >
            Thông điệp { " " } <
            /h3>{" "} <
            h3 className = "text2"
            style = {
                {
                    color: "#fff",
                    fontSize: "44px",
                    marginTop: "12px",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    textAlign: "center",
                }
            } >
            kiến tạo chuẩn mực hoàn hảo { " " } <
            /h3>{" "} <
            p className = "text3"
            style = {
                {
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#fff",
                    textAlign: "center",
                }
            } >
            Tách mình khỏi những chuẩn mực cố định, Honda Civic chuyển mình để bứt phá trong từng đường nét thiết kế và tính năng, kiến tạo nên những thành công mới cho chủ sở hữu { " " } <
            /p>{" "} <
            /div>{" "} <
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