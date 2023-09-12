import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./MotorbikeType.scss";
import { Fragment } from "react";
import { withRouter } from "react-router";
import * as action from "../../../../../../store/actions";
import { CommonUtils } from "../../../../../../utils";

class MotorbikeType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeMotorbikes: [],

      image: "",
      price: "",
    };
  }

  componentDidMount() {
    let params = this.props.match.params.id.slice(1);
    this.props.fetchGetTypeMotorbike(params);
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.typeMotorbikes !== this.props.typeMotorbikes) {
      this.setState({
        typeMotorbikes: this.props.typeMotorbikes,
      });
    }
  };
  handleClickType = (item) => {
    this.setState({
      image: item.image,
      price: item.mtbPrice,
    });
  };
  render() {
    let { typeMotorbikes } = this.state;
    let element = {
      mtbPrice: "",
      image: "",
    };
    if (typeMotorbikes[0]) {
      element = typeMotorbikes[0];
    }
    console.log("check element", element);
    let higher = typeMotorbikes.slice(0, 2);
    let special = typeMotorbikes.slice(2, 3);
    let sport = typeMotorbikes.slice(3, 5);
    let standard = typeMotorbikes.slice(5, 6);

    return (
      <div className="type">
        <div className="grid">
          <div className="type-title"> Bảng giá và màu sắc </div>{" "}
          <div className="type-row">
            <div className="type-col">
              <div className="type-left">
                <div
                  className="type-img"
                  style={{
                    backgroundImage: `url(
                      ${
                        this.state.image
                          ? CommonUtils.toBase64FromBuffer(this.state.image)
                          : CommonUtils.toBase64FromBuffer(element.image)
                      }`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "centre",
                    backgroundSize: "contain",
                    height: "335px",
                  }}
                ></div>{" "}
                <div className="type-price">
                  <span className="type-price-text"> Giá bán lẻ đề xuất: </span>{" "}
                  <span className="type-price-price">
                    {" "}
                    {!this.state.price ? element.mtbPrice : this.state.price}
                    VNĐ{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="type-col">
              <div className="type-right">
                <div className="type-component">
                  {" "}
                  <div className="type-version"> Phiên bản cao cấp </div>{" "}
                  <div className="type-item">
                    {" "}
                    {higher &&
                      higher.length > 0 &&
                      higher.map((typeMotorbike, item) => {
                        return (
                          <div
                            className="type-color"
                            onClick={() => this.handleClickType(typeMotorbike)}
                          >
                            <span
                              className="color-icon"
                              style={{
                                display: "block",
                                width: "27.5px",
                                height: "25px",
                                backgroundColor: "#000",
                                border: "1px solid #d2d2d2",
                                transform: "skewX(-30deg)",
                              }}
                            ></span>{" "}
                            <span className="color-text">
                              {" "}
                              {typeMotorbike.mtbColor}{" "}
                            </span>{" "}
                          </div>
                        );
                      })}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="type-component">
                  {" "}
                  <div className="type-version"> Phiên bản đặc biệt </div>{" "}
                  <div className="type-item">
                    {" "}
                    {special &&
                      special.length > 0 &&
                      special.map((typeMotorbike, item) => {
                        return (
                          <div
                            className="type-color"
                            onClick={() => this.handleClickType(typeMotorbike)}
                          >
                            <span
                              className="color-icon"
                              style={{
                                display: "block",
                                width: "27.5px",
                                height: "25px",
                                backgroundColor: "#1C11C0",
                                border: "1px solid #d2d2d2",
                                transform: "skewX(-30deg)",
                              }}
                            ></span>{" "}
                            <span
                              className="color-icon"
                              style={{
                                display: "block",
                                width: "27.5px",
                                height: "25px",
                                backgroundColor: "#000",
                                border: "1px solid #d2d2d2",
                                transform: "skewX(-30deg)",
                              }}
                            ></span>{" "}
                            <span className="color-text">
                              {" "}
                              {typeMotorbike.mtbColor}{" "}
                            </span>{" "}
                          </div>
                        );
                      })}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="type-component">
                  {" "}
                  <div className="type-version"> Phiên bản thể thao </div>{" "}
                  <div className="type-item">
                    {" "}
                    {sport &&
                      sport.length > 0 &&
                      sport.map((typeMotorbike, item) => {
                        return (
                          <div
                            className="type-color"
                            onClick={() => this.handleClickType(typeMotorbike)}
                          >
                            <span
                              className="color-icon"
                              style={{
                                display: "block",
                                width: "27.5px",
                                height: "25px",
                                backgroundColor: "#000",
                                border: "1px solid #d2d2d2",
                                transform: "skewX(-30deg)",
                              }}
                            >
                              {" "}
                            </span>{" "}
                            <span className="color-text">
                              {" "}
                              {typeMotorbike.mtbColor}{" "}
                            </span>{" "}
                          </div>
                        );
                      })}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="type-component">
                  {" "}
                  <div className="type-version">
                    {" "}
                    Phiên bản tiêu chuẩn{" "}
                  </div>{" "}
                  <div className="type-item">
                    {" "}
                    {standard &&
                      standard.length > 0 &&
                      standard.map((typeMotorbike, item) => {
                        return (
                          <div
                            className="type-color"
                            onClick={() => this.handleClickType(typeMotorbike)}
                          >
                            <span
                              className="color-icon"
                              style={{
                                display: "block",
                                width: "27.5px",
                                height: "25px",
                                backgroundColor: "#000",
                                border: "1px solid #d2d2d2",
                                transform: "skewX(-30deg)",
                              }}
                            >
                              {" "}
                            </span>{" "}
                            <span className="color-text">
                              {" "}
                              {typeMotorbike.mtbColor}{" "}
                            </span>{" "}
                          </div>
                        );
                      })}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    typeMotorbikes: state.motorbike.typeMotorbikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetTypeMotorbike: (idInput) => {
      dispatch(action.fetchGetTypeMotorbike(idInput));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MotorbikeType)
);
