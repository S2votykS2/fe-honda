import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import "./Home.scss";
import Header from "../Header/Header";
import Slider2 from "./Slider/Slider";
import Product from "./Product/Product";
import Operation from "./Operation/Operation";
import News from "./News/News";
import Footer from "../Footer/Footer";
class Home extends Component {
  render() {
    // const { isLoggedIn } = this.props;
    // let linkToRedirect = isLoggedIn ? "/system" : "/login";

    return (
      <React.Fragment>
        <Scrollbars style={{ width: "100vw", height: "100vh" }}>
          {" "}
          {/* <Redirect to={linkToRedirect} />; */} <Header />
          <Slider2 />
          <Product />
          <Operation />
          <News /> <Footer />
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
