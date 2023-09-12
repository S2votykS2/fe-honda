import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType, create } from "../../../services/systemService";
import {
  createNewAccessoryMotorbike,
  getAccessoryMotorbikes,
  createNewAccessoryItemMotorbike,
  getAccessoryItemMotorbikes,
} from "../../../services/motorbikeService";
import { CommonUtils, languages } from "../../../utils";
import * as action from "../../../store/actions";

class MotorbikeAccessory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      image: "",

      itemId: "",
      typeItem: "",
      priceItem: "",

      accessories: "",
    };
  }

  async componentDidMount() {
    let response = await getAccessoryMotorbikes("ALL");
    if (response.data && response.data.code === 0) {
      this.setState({
        accessories: response.data.data,
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

  handleOnChangeSelect = async (event) => {
    this.setState({
      itemId: event.target.value,
    });
  };
  handleOnChangeImage = async (event, id) => {
    let images = event.target.files;
    let image = images[0];
    let toBase64 = await CommonUtils.toBase64FromFile(image);
    let copyState = { ...this.state };
    if (image) {
      copyState[id] = toBase64;
    } else {
      copyState[id] = "";
    }
    this.setState({
      ...copyState,
    });
  };
  handleOnClick1 = async () => {
    let data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      image: this.state.image,
    };
    console.log("check data", data);
    let response = await createNewAccessoryMotorbike(data);
    if (response.data.response && response.data.response.code === 0) {
      alert("Create success");
    }
  };
  handleOnClick2 = async () => {
    let data = {
      itemId: this.state.itemId,
      type: this.state.typeItem,
      price: this.state.priceItem,
    };
    let response = await createNewAccessoryItemMotorbike(data);
    if (response.data.response && response.data.response.code === 0) {
      alert("Create success");
    }
  };

  render() {
    let { language } = this.props;
    let { accessories } = this.state;
    return (
      <>
        <div className="title"> Manage Motorbike Accesssory </div>;{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            <FormattedMessage id="manage-user.create-user.header" />
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                {" "}
                Name Motorbike Accessory{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event, "name")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Price{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.price}
                onChange={(event) => this.handleOnChange(event, "price")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Description{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.description}
                onChange={(event) => this.handleOnChange(event, "description")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => this.handleOnChangeImage(event, "image")}
              />{" "}
            </div>{" "}
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${this.state.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid purple",
              }}
            ></div>{" "}
            <div className="col-md-12 mb-5">
              <div className="btn btn-primary" onClick={this.handleOnClick1}>
                Tạo phụ tùng{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="col-md-12 mt-5">
            <label for="inputEmail4" className="form-label">
              {" "}
              Accessory with each motorbike{" "}
            </label>{" "}
            <select
              id="inputState"
              className="form-select"
              onChange={(event) => this.handleOnChangeSelect(event)}
            >
              <option selected> Choose... </option>{" "}
              {accessories &&
                accessories.length > 0 &&
                accessories.map((accessory, index) => {
                  return (
                    <option value={accessory.id} key={index}>
                      {" "}
                      {accessory.name} - {accessory.itemData.type}{" "}
                    </option>
                  );
                })}{" "}
            </select>{" "}
          </div>{" "}
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              {" "}
              Type Motorbike{" "}
            </label>{" "}
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={this.state.typeItem}
              onChange={(event) => this.handleOnChange(event, "typeItem")}
            />{" "}
          </div>{" "}
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              {" "}
              Price of Type{" "}
            </label>{" "}
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={this.state.priceItem}
              onChange={(event) => this.handleOnChange(event, "priceItem")}
            />{" "}
          </div>{" "}
          <div className="col-md-12">
            <div className="btn btn-primary" onClick={this.handleOnClick2}>
              Tạo dữ liệu{" "}
            </div>{" "}
          </div>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            {" "}
            Table Accessory{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Id </th> <th scope="col"> Name </th>{" "}
                <th scope="col"> Description </th>{" "}
                <th scope="col"> TypeMotorbikeAccessory </th>{" "}
                <th scope="col"> PriceMotorbikeAccessory </th>{" "}
                <th scope="col"> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {accessories &&
                accessories.length > 0 &&
                accessories.map((data, index) => {
                  return (
                    <tr>
                      <td> {data.id} </td> {data.name}{" "}
                      <td> {data.description} </td>{" "}
                      <td> {data.itemData.type} </td>{" "}
                      <td> {data.itemData.price} </td>{" "}
                      <td
                        style={{
                          backgroundColor: "#ddd",
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            data.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          height: "75px",
                          width: "75px",
                        }}
                      ></td>{" "}
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeAccessory);
