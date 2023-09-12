import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType, create } from "../../../services/systemService";
import {
  getMotorbikes,
  createNewTypeMotorbike,
  getTypeMotorbikes,
} from "../../../services/motorbikeService";
import { CommonUtils, languages } from "../../../utils";
// import ReactMarkdown from "react-markdown";
// import ReactDom from "react-dom";
class MotorbikeType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      version: "",
      color: "",
      price: "",
      image: "",

      motorbikes: [],
      datas: [],
    };
  }

  async componentDidMount() {
    let motorbikes = await getMotorbikes("ALL");
    if (motorbikes.data && motorbikes.data.code === 0) {
      this.setState({
        motorbikes: motorbikes.data.data,
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
      id: event.target.value,
    });
    let createdData = await getTypeMotorbikes(event.target.value);
    if (createdData.data && createdData.data.code === 0) {
      this.setState({
        datas: createdData.data.data,
      });
    }
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
  handleOnClick = async () => {
    let data = {
      id: this.state.id,
      version: this.state.version,
      color: this.state.color,
      price: this.state.price,
      image: this.state.image,
    };
    let response = await createNewTypeMotorbike(data);
    if (response.data.response && response.data.response.code === 0) {
      alert("create success");
    }
  };

  render() {
    let { language } = this.props;
    let { motorbikes, datas } = this.state;
    console.log("checlk data", datas);
    return (
      <>
        <div className="title"> Manage Motorbike Type </div>;{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            <FormattedMessage id="manage-user.create-user.header" />
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                {" "}
                Name Motorbike{" "}
              </label>{" "}
              <select
                id="inputState"
                className="form-select"
                onChange={(event) => this.handleOnChangeSelect(event)}
              >
                <option selected> Choose... </option>{" "}
                {motorbikes &&
                  motorbikes.length > 0 &&
                  motorbikes.map((motorbike, index) => {
                    return (
                      <option value={motorbike.id} key={index}>
                        {" "}
                        {motorbike.mtbName}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
            </div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Version{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.version}
                onChange={(event) => this.handleOnChange(event, "version")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Content Markdown{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.color}
                onChange={(event) => this.handleOnChange(event, "color")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
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
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.handleOnClick}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            {" "}
            Table Type Motor{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Id </th> <th scope="col"> Version </th>{" "}
                <th scope="col"> Color </th> <th scope="col"> Price </th>{" "}
                <th scope="col"> Image </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {datas &&
                datas.length > 0 &&
                datas.map((data, index) => {
                  return (
                    <tr>
                      <td> {data.id} </td> {data.mtbVersion}{" "}
                      <td> {data.mtbColor} </td> <td> {data.mtbPrice} </td>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeType);
