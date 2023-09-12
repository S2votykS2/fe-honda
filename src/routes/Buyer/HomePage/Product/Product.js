import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Product.scss";
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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="product">
        <div className="grid">
          {" "}
          <div className="pre-carousel">
            <div className="content-left"> Sản phẩm </div>{" "}
            <div className="content-right">
              <div className="motorbike"> Xe máy </div>{" "}
              <div className="car"> Ô tô </div>{" "}
            </div>{" "}
          </div>{" "}
          <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={74}
            totalSlides={5}
            visibleSlides={4}
            interval={5000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0} className="slide-item">
                <Image
                  src="https://cdn.honda.com.vn/motorbikes/July2023/lRSLOVgUWsWtYYKw0FSP.png"
                  className="image-item"
                ></Image>{" "}
                <div className="name-item"> Wave 2023 </div>{" "}
                <div className="price-item"> Từ 18.900 .000 VNĐ </div>{" "}
                <div className="item-hover hover-active">
                  <div className="item-hover-name"> Xem chi tiết </div>{" "}
                </div>{" "}
                <ul className="color-item">
                  <li className="color-item-specific"> </li>{" "}
                  <li className="color-item-specific"> </li>{" "}
                </ul>{" "}
              </Slide>{" "}
              <Slide index={1} className="slide-item">
                <Image
                  src="https://cdn.honda.com.vn/motorbikes/July2023/lRSLOVgUWsWtYYKw0FSP.png"
                  className="image-item"
                ></Image>{" "}
                <div className="name-item"> Wave 2023 </div>{" "}
                <div className="price-item"> Từ 18.900 .000 VNĐ </div>{" "}
                <div className="item-hover hover-active">
                  <div className="item-hover-name"> Xem chi tiết </div>{" "}
                </div>{" "}
                <ul className="color-item">
                  <li className="color-item-specific"> </li>{" "}
                  <li className="color-item-specific"> </li>{" "}
                </ul>{" "}
              </Slide>{" "}
              <Slide index={2} className="slide-item">
                <Image
                  src="https://cdn.honda.com.vn/motorbikes/July2023/lRSLOVgUWsWtYYKw0FSP.png"
                  className="image-item"
                ></Image>{" "}
                <div className="name-item"> Wave 2023 </div>{" "}
                <div className="price-item"> Từ 18.900 .000 VNĐ </div>{" "}
                <div className="item-hover hover-active">
                  <div className="item-hover-name"> Xem chi tiết </div>{" "}
                </div>{" "}
                <ul className="color-item">
                  <li className="color-item-specific"> </li>{" "}
                  <li className="color-item-specific"> </li>{" "}
                </ul>{" "}
              </Slide>{" "}
              <Slide index={3} className="slide-item">
                <Image
                  src="https://cdn.honda.com.vn/motorbikes/July2023/lRSLOVgUWsWtYYKw0FSP.png"
                  className="image-item"
                ></Image>{" "}
                <div className="name-item"> Wave 2023 </div>{" "}
                <div className="price-item"> Từ 18.900 .000 VNĐ </div>{" "}
                <div className="item-hover hover-active">
                  <div className="item-hover-name"> Xem chi tiết </div>{" "}
                </div>{" "}
                <ul className="color-item">
                  <li className="color-item-specific"> </li>{" "}
                  <li className="color-item-specific"> </li>{" "}
                </ul>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
