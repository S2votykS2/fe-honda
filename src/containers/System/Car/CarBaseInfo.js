import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCars } from "../../../services/carService";
import { CommonUtils, languages } from "../../../utils";
import {
  getExteriorCars,
  createExteriorCar,
  getInteriorCars,
  createInteriorCar,
  getOperatorCars,
  createOperatorCar,
  getSafeCars,
  createSafeCar,
  getAccessoryCars,
  createAccessoryCar,
  getLibraryCars,
  createLibraryCar,
} from "../../../services/carService";
class CarBaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carId: "",
      exteriorDes: "",
      exteriorImg: "",
      interiorDes: "",
      interiorImg: "",
      operationDes: "",
      operationImg: "",
      safeDes: "",
      safeImg: "",
      accessoryDes: "",
      accessoryImg: "",
      libraryImg: "",

      cars: [],
      exteriors: [],
      interiors: [],
      operators: [],
      safes: [],
      accessories: [],
      libraries: [],
    };
  }

  async componentDidMount() {
    let res = await getAllCars("ALL_SPECIFIC");
    if (res.data && res.data.code === 0) {
      this.setState({
        cars: res.data.data,
      });
    }
  }
  handleOnChange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleOnChangeImage = async (event, id) => {
    let images = event.target.files;
    let image = images[0];
    let toBase64 = await CommonUtils.toBase64FromFile(image);

    let copyState = { ...this.state };
    if (image) {
      copyState[id] = toBase64;
      this.setState({
        ...copyState,
      });
    }
  };
  handleOnChangeOption = async (event) => {
    let id = event.target.value;
    let exteriors = await getExteriorCars(id);
    if (exteriors.data && exteriors.data.code === 0) {
      this.setState({
        exteriors: exteriors.data.data,
      });
    }
    let interiors = await getInteriorCars(id);
    if (interiors.data && interiors.data.code === 0) {
      this.setState({
        interiors: interiors.data.data,
      });
    }
    let operators = await getOperatorCars(id);
    if (operators.data && operators.data.code === 0) {
      this.setState({
        operators: operators.data.data,
      });
    }
    let safes = await getSafeCars(id);
    if (safes.data && safes.data.code === 0) {
      this.setState({
        safes: safes.data.data,
      });
    }
    let accessories = await getAccessoryCars(id);
    if (accessories.data && accessories.data.code === 0) {
      this.setState({
        accessories: accessories.data.data,
      });
    }
    let libraries = await getLibraryCars(id);
    if (libraries.data && libraries.data.code === 0) {
      this.setState({
        libraries: libraries.data.data,
      });
    }
  };
  createExterior = async () => {
    let data = {
      carId: this.state.carId,
      description: this.state.exteriorDes,
      image: this.state.exteriorImg,
    };
    let res = await createExteriorCar(data);
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  createInterior = async () => {
    let data = {
      carId: this.state.carId,
      description: this.state.interiorDes,
      image: this.state.interiorImg,
    };
    let res = await createInteriorCar(data);
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  createOperator = async () => {
    let data = {
      carId: this.state.carId,
      description: this.state.operationDes,
      image: this.state.operationImg,
    };
    let res = await createOperatorCar(data);
    console.log("check res");
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  createSafe = async () => {
    let data = {
      carId: this.state.carId,
      description: this.state.safeDes,
      image: this.state.safeImg,
    };
    let res = await createSafeCar(data);
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  createAccessory = async () => {
    let data = {
      carId: this.state.carId,
      description: this.state.accessoryDes,
      image: this.state.accessoryImg,
    };
    let res = await createAccessoryCar(data);
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  createLibrary = async () => {
    let data = {
      carId: this.state.carId,
      image: this.state.libraryImg,
    };
    let res = await createLibraryCar(data);
    if (res.data && res.data.code === 0) {
      alert("create success");
    }
  };
  handleOnClick = async () => {
    console.log("check state", this.state);
  };
  render() {
    let {
      cars,
      exteriors,
      interiors,
      operators,
      safes,
      accessories,
      libraries,
    } = this.state;
    return (
      <>
        <div className="title"> Manage Base Information car </div>;{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            Chọn loại xe{" "}
          </div>{" "}
          <div className="col-md-12">
            <select
              id="inputState"
              className="form-select"
              value={this.state.carId}
              onChange={(event) => this.handleOnChange(event, "carId")}
            >
              <option selected> Choose... </option>{" "}
              {cars &&
                cars.length > 0 &&
                cars.map((car, index) => {
                  return <option value={car.id}> {car.name} </option>;
                })}{" "}
            </select>{" "}
          </div>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo ngoại thất xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) =>
                  this.handleOnChangeImage(event, "exteriorImg")
                }
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.exteriorImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.exteriorDes}
                onChange={(event) => this.handleOnChange(event, "exteriorDes")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div
                className="btn btn-primary"
                onClick={() => this.createExterior()}
              >
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo nội thất xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) =>
                  this.handleOnChangeImage(event, "interiorImg")
                }
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.interiorImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.interiorDes}
                onChange={(event) => this.handleOnChange(event, "interiorDes")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.createInterior}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo các chức năng vận hành xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) =>
                  this.handleOnChangeImage(event, "operationImg")
                }
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.operationImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.operationDes}
                onChange={(event) => this.handleOnChange(event, "operationDes")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.createOperator}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo chức năng an toàn của xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => this.handleOnChangeImage(event, "safeImg")}
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.safeImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.safeDes}
                onChange={(event) => this.handleOnChange(event, "safeDes")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.createSafe}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo các phụ kiện của xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) =>
                  this.handleOnChangeImage(event, "accessoryImg")
                }
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.accessoryImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.accessoryDes}
                onChange={(event) => this.handleOnChange(event, "accessoryDes")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.createAccessory}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Tạo các thư viện của xe{" "}
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) =>
                  this.handleOnChangeImage(event, "libraryImg")
                }
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.libraryImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.createLibrary}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            {" "}
            TABLE LIST INFORMATION BASE OF CARS{" "}
          </div>{" "}
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Select Type Car{" "}
            </label>{" "}
            <select
              id="inputState"
              className="form-select"
              onChange={(event) => this.handleOnChangeOption(event)}
              value={this.state.carIdSelect}
            >
              <option selected value={""}>
                {" "}
                Choose...{" "}
              </option>{" "}
              {cars &&
                cars.length > 0 &&
                cars.map((car, index) => {
                  return <option value={car.id}> {car.name} </option>;
                })}{" "}
            </select>{" "}
          </div>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng ngoại thất của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {exteriors &&
                exteriors.length > 0 &&
                exteriors.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng nội thất của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {interiors &&
                interiors.length > 0 &&
                interiors.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng các chi tiêt vận hành của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {operators &&
                operators.length > 0 &&
                operators.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng các chức năng an toàn của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {safes &&
                safes.length > 0 &&
                safes.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng phụ tùng của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {accessories &&
                accessories.length > 0 &&
                accessories.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            Bảng thư viện của xe{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th> Description </th> <th> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {libraries &&
                libraries.length > 0 &&
                libraries.map((item, index) => {
                  return (
                    <tr>
                      <th> {item.description} </th>{" "}
                      <th
                        style={{
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            item.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {" "}
                      </th>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CarBaseInfo);
