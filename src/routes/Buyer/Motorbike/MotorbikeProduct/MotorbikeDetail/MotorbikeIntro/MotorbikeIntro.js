import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./MotorbikeIntro.scss";
import { Fragment } from "react";
import { withRouter } from "react-router";
import * as action from "../../../../../../store/actions";
import { CommonUtils } from "../../../../../../utils";

class MotorbikeIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow1: false,
      isShow2: false,
      isShow3: false,

      introMotorbikes: [],
      title: "",
      markdown: "",
      image: "",
    };
  }

  async componentDidMount() {
    let params = this.props.match.params.id.slice(1);
    await this.props.fetchGetIntroMotorbike(params);
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.introMotorbikes !== this.props.introMotorbikes) {
      this.setState({
        introMotorbikes: this.props.introMotorbikes,
      });
    }
  };
  handleShowHide1 = () => {
    this.setState({
      isShow1: !this.state.isShow1,
      isShow2: false,
      isShow3: false,
    });
  };
  handleShowHide2 = () => {
    this.setState({
      isShow1: false,
      isShow2: !this.state.isShow2,
      isShow3: false,
    });
  };
  handleShowHide3 = () => {
    this.setState({
      isShow1: false,
      isShow2: false,
      isShow3: !this.state.isShow3,
    });
  };
  handleShowIntro = (item) => {
    this.setState({
      title: item.mtbTitle,
      markdown: item.mtbMarkdown,
      image: item.image,
    });
  };
  render() {
    let { introMotorbikes } = this.state;
    let element = {
      DataMaping: {
        mtbName: "",
        mtbPrice: "",
        image: "",
      },
    };
    if (introMotorbikes[0]) {
      element = introMotorbikes[0];
    }
    let design = introMotorbikes.slice(1, 7);
    let engine = introMotorbikes.slice(7, 10);
    let safe = introMotorbikes.slice(10, 14);
    return (
      <>
        {" "}
        <div className="intro" style={{ marginTop: "94px" }}>
          <div
            className="slider-intro"
            style={{
              backgroundImage:
                "url(https://cdn.honda.com.vn/motorbikes/December2022/fkeaYaS5YGfjlEztEYjS.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "centre",
              backgroundSize: "contain",
              height: "460px",
            }}
          ></div>{" "}
          <div className="grid">
            <div className="link-router"> Not yet </div>{" "}
            <div className="row-intro">
              <div className="col-intro">
                <div className="intro-left">
                  <div
                    className="intro-img"
                    style={{
                      backgroundImage: `url(${
                        this.state.image
                          ? CommonUtils.toBase64FromBuffer(this.state.image)
                          : "https://cdn.honda.com.vn/motorbike-strong-points/November2022/3ZJP2EtKs2VxtoISRczj.jpg"
                      })`,

                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "centre",
                      backgroundSize: "contain",
                      height: "400px",
                    }}
                  >
                    {" "}
                  </div>{" "}
                  <div className="intro-title">
                    {" "}
                    {this.state.title
                      ? this.state.title
                      : element.mtbTitle}{" "}
                  </div>{" "}
                  <div className="intro-markdown">
                    {" "}
                    {this.state.markdown
                      ? this.state.markdown
                      : element.mtbMarkdown}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-intro">
                <div className="intro-right">
                  <div className="intro-name">
                    {" "}
                    {element.DataMaping.mtbName}{" "}
                  </div>{" "}
                  <div className="intro-price">
                    {" "}
                    Giá từ: {element.DataMaping.mtbPrice}
                    VNĐ{" "}
                  </div>{" "}
                  <div className="feature">
                    <div
                      className="feature-header"
                      onClick={() => this.handleShowHide1()}
                    >
                      <div className="header-text"> thiết kế </div>{" "}
                      <i
                        class={
                          this.state.isShow1 ? "fas fa-minus" : "fas fa-plus"
                        }
                      >
                        {" "}
                      </i>{" "}
                    </div>{" "}
                    <div
                      className={
                        this.state.isShow1
                          ? "row-feature active"
                          : "row-feature"
                      }
                    >
                      {" "}
                      {design &&
                        design.length > 0 &&
                        design.map((item, index) => {
                          return (
                            <div className="col-feature">
                              <div
                                className="feature-img"
                                style={{
                                  backgroundImage: `url(
                                    ${CommonUtils.toBase64FromBuffer(
                                      item.image
                                    )}
                                  )`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "centre",
                                  backgroundSize: "contain",
                                  height: "133px",
                                }}
                                onClick={() => this.handleShowIntro(item)}
                              ></div>{" "}
                              <div className="feature-text">
                                {" "}
                                {item.mtbTitle}{" "}
                              </div>{" "}
                            </div>
                          );
                        })}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="feature">
                    <div
                      className="feature-header"
                      onClick={() => this.handleShowHide2()}
                    >
                      <div className="header-text"> động cơ - công nghê </div>{" "}
                      <i
                        class={
                          this.state.isShow2 ? "fas fa-minus" : "fas fa-plus"
                        }
                      >
                        {" "}
                      </i>{" "}
                    </div>{" "}
                    <div
                      className={
                        this.state.isShow2
                          ? "row-feature active"
                          : "row-feature"
                      }
                    >
                      {" "}
                      {engine &&
                        engine.length > 0 &&
                        engine.map((item, index) => {
                          return (
                            <div className="col-feature">
                              <div
                                className="feature-img"
                                style={{
                                  backgroundImage: `url(
                                    ${CommonUtils.toBase64FromBuffer(
                                      item.image
                                    )}
                                  )`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "centre",
                                  backgroundSize: "contain",
                                  height: "133px",
                                }}
                                onClick={() => this.handleShowIntro(item)}
                              ></div>{" "}
                              <div className="feature-text">
                                {" "}
                                {item.mtbTitle}{" "}
                              </div>{" "}
                            </div>
                          );
                        })}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="feature">
                    <div
                      className="feature-header"
                      onClick={() => this.handleShowHide3()}
                    >
                      <div className="header-text"> tiện ích - an toàn </div>{" "}
                      <i
                        class={
                          this.state.isShow3 ? "fas fa-minus" : "fas fa-plus"
                        }
                      >
                        {" "}
                      </i>{" "}
                    </div>{" "}
                    <div
                      className={
                        this.state.isShow3
                          ? "row-feature active"
                          : "row-feature"
                      }
                    >
                      {" "}
                      {safe &&
                        safe.length > 0 &&
                        safe.map((item, index) => {
                          return (
                            <div className="col-feature">
                              <div
                                className="feature-img"
                                style={{
                                  backgroundImage: `url(
                                    ${CommonUtils.toBase64FromBuffer(
                                      item.image
                                    )}
                                  )`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "centre",
                                  backgroundSize: "contain",
                                  height: "133px",
                                }}
                                onClick={() => this.handleShowIntro(item)}
                              ></div>{" "}
                              <div className="feature-text">
                                {" "}
                                {item.mtbTitle}{" "}
                              </div>{" "}
                            </div>
                          );
                        })}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    introMotorbikes: state.motorbike.introMotorbikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetIntroMotorbike: (idInput) => {
      dispatch(action.fetchGetIntroMotorbike(idInput));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MotorbikeIntro)
);
