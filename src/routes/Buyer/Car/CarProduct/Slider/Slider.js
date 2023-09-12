import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Slider.scss";
import { Fragment } from "react";
import { CommonUtils } from "../../../../../utils";

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

class Slider2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
        };
    }

    componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (prevProps.sliders !== this.props.sliders) {
            this.setState({
                sliders: this.props.sliders,
            });
        }
    }
    render() {
        let { sliders } = this.state;
        return ( <
            div className = "slider" >
            <
            div className = "grid" >
            <
            CarouselProvider naturalSlideWidth = { 100 }
            naturalSlideHeight = { 33 }
            totalSlides = { 7 }
            visibleSlides = { 1 }
            interval = { 5000 }
            isPlaying = { true }
            infinite = { true } >
            <
            Slider className = "slider-customize"
            style = {
                {
                    borderBottom: "2.4px solid red",
                }
            } >
            { " " } {
                sliders &&
                    sliders.length > 0 &&
                    sliders.map((slider, index) => {
                        return ( <
                            Slide index = { index } > { " " } <
                            Image src = { CommonUtils.toBase64FromBuffer(slider.image) }
                            />{" "} <
                            /Slide>
                        );
                    })
            } { " " } <
            /Slider>{" "} <
            div className = "adjust" >
            <
            ButtonBack className = "adjust__btn" >
            <
            i class = "fas fa-angle-left" > < /i>{" "} <
            /ButtonBack>{" "} <
            DotGroup className = "adjust__dot" > < /DotGroup>{" "} <
            ButtonNext className = "adjust__btn" >
            <
            i class = "fas fa-angle-right" > < /i>{" "} <
            /ButtonNext>{" "} <
            /div>{" "} <
            /CarouselProvider>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider2);