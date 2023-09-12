import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Operation.scss";
import { Fragment } from "react";
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

class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="operation">
        <div className="grid">
          {" "}
          <div className="pre-carousel">
            <div className="content-left"> Hoạt động của Honda </div>{" "}
          </div>{" "}
          <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={74}
            totalSlides={5}
            visibleSlides={2.7}
            interval={5000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0} className="item">
                <Image
                  src="https://cdn.honda.com.vn/home-active-honda/December2019/sy06eY8i0K2r2A8wyh8H.png"
                  className="image-item"
                ></Image>{" "}
                <div className="title-item">
                  <div className="title-item-name"> Lái xe an toàn </div>{" "}
                </div>{" "}
              </Slide>{" "}
              <Slide index={1} className="item">
                <Image
                  src="https://cdn.honda.com.vn/home-active-honda/December2019/sy06eY8i0K2r2A8wyh8H.png"
                  className="image-item"
                ></Image>{" "}
                <div className="title-item">
                  <div className="title-item-name"> Lái xe an toàn </div>{" "}
                </div>{" "}
              </Slide>{" "}
              <Slide index={2} className="item">
                <Image
                  src="https://cdn.honda.com.vn/home-active-honda/December2019/sy06eY8i0K2r2A8wyh8H.png"
                  className="image-item"
                ></Image>{" "}
                <div className="title-item">
                  <div className="title-item-name"> Lái xe an toàn </div>{" "}
                </div>{" "}
              </Slide>{" "}
              <Slide index={3} className="item">
                <Image
                  src="https://cdn.honda.com.vn/home-active-honda/December2019/sy06eY8i0K2r2A8wyh8H.png"
                  className="image-item"
                ></Image>{" "}
                <div className="title-item">
                  <div className="title-item-name"> Lái xe an toàn </div>{" "}
                </div>{" "}
              </Slide>{" "}
            </Slider>{" "}
            <div className="adjust-customize">
              <ButtonBack className="adjust__btn-left">
                <i class="fas fa-angle-left"> </i>{" "}
              </ButtonBack>{" "}
              <ButtonNext className="adjust__btn-right">
                <i class="fas fa-angle-right"> </i>{" "}
              </ButtonNext>{" "}
            </div>{" "}
          </CarouselProvider>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Operation);
