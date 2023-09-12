import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Content.scss";
import { Fragment } from "react";
import * as actions from "../../../../../store/actions";
import { CommonUtils } from "../../../../../utils";
import { getAllcodeType } from "../../../../../services/systemService";
import { withRouter } from "react-router";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motorbikes: [],
      typeMotorbikes: [],
      typed: "ALL",
    };
  }

  async componentDidMount() {
    let typeMotorbikes = await getAllcodeType("MOTORBIKE");
    if (typeMotorbikes.data && typeMotorbikes.data.code === 0) {
      this.setState({
        typeMotorbikes: typeMotorbikes.data.data,
      });
    }
    this.props.fetchGetMotorbike("ALL");
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.motorbikes !== this.props.motorbikes) {
      this.setState({
        motorbikes: this.props.motorbikes,
      });
    }
  }
  handleOption = (typeInput) => {
    this.props.fetchGetMotorbike(typeInput);
    this.setState({
      typed: typeInput,
    });
  };
  handleDetailProduct = (motorbike) => {
    console.log("Check prop", this.props);
    if (this.props.history) {
      // this.props.history.push(`xe-may/san-pham/:${motorbike.id}`);
      this.props.history.push(`:${motorbike.id}`);
    }
  };
  render() {
    let { motorbikes, typeMotorbikes } = this.state;
    return (
      <div className="content-product">
        <div className="grid">
          <div className="breadcrumb"> Chưa Update </div>{" "}
          <div className="title-product">
            Lựa Chọn Phong Cách Riêng Của Bạn{" "}
          </div>{" "}
          <div className="row-option">
            {" "}
            <div
              className="option-product"
              onClick={() => this.handleOption("ALL")}
            >
              <span
                className={
                  this.state.typed === "ALL" ? "optional active" : "optional"
                }
              >
                {" "}
                Tất cả{" "}
              </span>{" "}
            </div>{" "}
            {typeMotorbikes &&
              typeMotorbikes.length > 0 &&
              typeMotorbikes.map((type, index) => {
                return (
                  <div
                    className="option-product"
                    onClick={() => this.handleOption(type.key)}
                  >
                    <span
                      className={
                        this.state.typed === type.key
                          ? "optional active"
                          : "optional"
                      }
                    >
                      {" "}
                      {type.valueVi}{" "}
                    </span>{" "}
                  </div>
                );
              })}{" "}
          </div>{" "}
          <div className="product-row">
            {" "}
            {motorbikes &&
              motorbikes.length > 0 &&
              motorbikes.map((motorbike, index) => {
                return (
                  <div
                    className="product-column"
                    onClick={() => this.handleDetailProduct(motorbike)}
                  >
                    <div
                      className="product-image"
                      style={{
                        backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                          motorbike.image
                        )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "centre",
                        height: "200px",
                      }}
                    ></div>{" "}
                    <div className="product-name"> {motorbike.mtbName} </div>{" "}
                    <div className="product-price">
                      {" "}
                      Từ {motorbike.mtbPrice}
                      VNĐ{" "}
                    </div>{" "}
                  </div>
                );
              })}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    motorbikes: state.motorbike.motorbikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetMotorbike: (typeInput) => {
      dispatch(actions.fetchGetMotorbike(typeInput));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
