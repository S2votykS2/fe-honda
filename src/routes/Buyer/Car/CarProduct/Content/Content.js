import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Content.scss";
import { Fragment } from "react";
import { CommonUtils } from "../../../../../utils";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.cars !== this.props.cars) {
      this.setState({
        cars: this.props.cars,
      });
    }
  }
  clickTryDrive = () => {
    <Redirect to={"/o-to/dang-ky-lai-thu"} />;
  };
  render() {
    console.log("chck state", this.state);
    let { cars } = this.state;
    return (
      <>
        <div className="content-car">
          <div className="grid">
            <div className="breadcrumbs"> Chua Update </div>{" "}
            <div className="row-car">
              {" "}
              {cars &&
                cars.length > 0 &&
                cars.map((car, index) => {
                  return (
                    <div className="col-car">
                      <div
                        className="img-car"
                        style={{
                          backgroundColor: "#fff",
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            car.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          height: "220px",
                        }}
                      ></div>{" "}
                      <div className="name-car"> {car.name} </div>{" "}
                      <div className="price-car"> {car.price} </div>{" "}
                      <div className="more">
                        <span
                          className="try-drive"
                          onClick={this.clickTryDrive}
                        >
                          Lái thử{" "}
                        </span>{" "}
                        <span className="cal-price"> Dự toán chi phí </span>{" "}
                      </div>{" "}
                    </div>
                  );
                })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
