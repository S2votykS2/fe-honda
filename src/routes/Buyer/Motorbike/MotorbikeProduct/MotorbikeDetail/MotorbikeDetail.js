import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import MotorbikeIntro from "./MotorbikeIntro/MotorbikeIntro";
import MotorbikeType from "./MotorbikeType/MotorbikeType";
import MotorbikeInfo from "./MotorbikeInfo/MotorbikeInfo";
class MotorbikeDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Scrollbars style={{ width: "100vw", height: "100vh" }}>
          {" "}
          <Header /> <MotorbikeIntro />
          <MotorbikeType />
          <MotorbikeInfo /> <Footer />
        </Scrollbars>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeDetail);
