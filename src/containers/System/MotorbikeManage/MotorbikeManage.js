import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType } from "../../../services/systemService";
import {
  createNewMotorbike,
  getMotorbikes,
} from "../../../services/motorbikeService";
import { CommonUtils, languages } from "../../../utils";
class MotorbikeManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      typeId: "",
      image: "",

      types: [],
      motorbikes: [],
    };
  }

  async componentDidMount() {
    let types = await getAllcodeType("MOTORBIKE");
    if (types.data && types.data.code === 0) {
      this.setState({
        types: types.data.data,
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
  handleOnChangeOption = async (event) => {
    let motorbikes = await getMotorbikes(event.target.value);
    if (motorbikes.data.data && motorbikes.data.code === 0) {
      this.setState({
        motorbikes: motorbikes.data.data,
      });
    }
  };
  handleOnChangeImage = async (event) => {
    let images = event.target.files;
    let image = images[0];
    let toBase64 = await CommonUtils.toBase64FromFile(image);
    if (image) {
      this.setState({
        image: toBase64,
      });
    } else {
      this.setState({
        image: "",
      });
    }
  };
  handleOnClick = async () => {
    let data = {
      name: this.state.name,
      price: this.state.price,
      typeId: this.state.typeId,
      image: this.state.image,
    };
    let res = await createNewMotorbike(data);
    console.log("Check res", res);
    if (res.data && res.data.response.code === 0) {
      alert("Create success");
    }
  };
  render() {
    let { types, motorbikes } = this.state;
    let { language } = this.props;
    return (
      <>
        <div className="title"> Manage products </div>;{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            <FormattedMessage id="manage-user.create-user.header" />
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                {" "}
                Name{" "}
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
                {" "}
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
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Type Motorbike{" "}
              </label>{" "}
              <select
                id="inputState"
                className="form-select"
                value={this.state.typeId}
                onChange={(event) => this.handleOnChange(event, "typeId")}
              >
                <option selected> Choose... </option>{" "}
                {types &&
                  types.length > 0 &&
                  types.map((type, index) => {
                    return (
                      <option value={type.key} key={index}>
                        {" "}
                        {type.valueVi}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Image{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => this.handleOnChangeImage(event)}
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
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.handleOnClick}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            {" "}
            Table Motor{" "}
          </div>{" "}
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Select Type Motorbike{" "}
            </label>{" "}
            <select
              id="inputState"
              className="form-select"
              onChange={(event) => this.handleOnChangeOption(event)}
            >
              <option selected> Choose... </option>{" "}
              <option key={100} value="ALL">
                ALL{" "}
              </option>{" "}
              {types &&
                types.length > 0 &&
                types.map((type, index) => {
                  return (
                    <option value={type.key} key={index}>
                      {" "}
                      {type.valueVi}{" "}
                    </option>
                  );
                })}{" "}
            </select>{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="id"> Id </th> <th scope="col"> Name </th>{" "}
                <th scope="id"> Price </th> <th scope="col"> Type </th>{" "}
                <th scope="col"> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {motorbikes &&
                motorbikes.length > 0 &&
                motorbikes.map((motorbike, index) => {
                  return (
                    <tr>
                      <td> {motorbike.id} </td> <td> {motorbike.mtbName} </td>{" "}
                      <td> {motorbike.mtbPrice} </td>{" "}
                      <td>
                        {" "}
                        {language === "vi"
                          ? motorbike.typeData.valueEn
                          : motorbike.typeData.valueVi}{" "}
                      </td>{" "}
                      <td
                        style={{
                          backgroundColor: "#ddd",
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            motorbike.image
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          height: "75px",
                          width: "75px",
                        }}
                      >
                        {" "}
                      </td>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeManage);
