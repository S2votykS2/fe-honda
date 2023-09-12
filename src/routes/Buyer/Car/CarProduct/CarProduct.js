import React, { Component } from "react";
import { connect } from "react-redux";
import "./CarProduct.scss";
import { Fragment } from "react";
import * as actions from "../../../../store/actions";
import { Scrollbars } from "react-custom-scrollbars";
import { CommonUtils } from "../../../../utils";
import { Redirect } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Slider from "./Slider/Slider";
import Content from "./Content/Content";

class CarProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
      cars: [],
    };
  }

  componentDidMount() {
    this.props.fetchGetSlider("SLI3");
    this.props.fetchGetAllCars("ALL_SPECIFIC");
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.sliders !== this.props.sliders) {
      this.setState({
        sliders: this.props.sliders,
      });
    }
    if (prevProps.cars !== this.props.cars) {
      this.setState({
        cars: this.props.cars,
      });
    }
  }

  render() {
    console.log("Check props", this.props);
    return (
      <>
        <Scrollbars style={{ width: "100vw", height: "100vh" }}>
          <Header />
          <Slider sliders={this.state.sliders} />{" "}
          <Content cars={this.state.cars} /> <Footer />
        </Scrollbars>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sliders: state.home.sliders,
    cars: state.car.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetSlider: (typeInput) => {
      dispatch(actions.fetchGetSlider(typeInput));
    },
    fetchGetAllCars: (name) => {
      dispatch(actions.fetchGetAllCars(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarProduct);
