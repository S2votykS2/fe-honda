import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Slider2 from "./Slider/Slider";
import Content from "./Content/Content";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Scrollbars style={{ width: "100vw", height: "100vh" }}>
          <Header />

          <Slider2 />
          <Content />
          <Footer />
        </Scrollbars>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
