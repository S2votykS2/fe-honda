import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { CommonUtils } from "../../../utils";
import { getSliders, createNewSlider } from "../../../services/homeService";
import { getAllcodeType } from "../../../services/systemService";
class MotorbikeManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      images: [],
      types: [],
    };
  }

  async componentDidMount() {
    let typeCodes = await getAllcodeType("SLIDER");
    if (typeCodes.data && typeCodes.data.code === 0) {
      this.setState({
        types: typeCodes.data.data,
      });
    }
    let images = await getSliders("ALL");
    if (images.data && images.data.code === 0) {
      this.setState({
        images: images.data.slider,
        type: "",
      });
    }
  }
  handleOnChange = (event) => {
    this.setState({
      type: event.target.value,
    });
  };
  handleOnChangeImage = async (event) => {
    let file = event.target.files[0];
    if (file) {
      let toBase64 = await CommonUtils.toBase64FromFile(file);
      this.setState({
        image: toBase64,
      });
    }
  };
  handleAddSlider = async () => {
    if (this.state.image !== "") {
      let response = await createNewSlider(this.state.image, this.state.type);
      if (response.data && response.data.code === 0) {
        alert("create success");
      }
    }
  };
  render() {
    let { images, types } = this.state;
    return (
      <React.Fragment>
        <div className="title"> Manage HomePage Slider </div>;{" "}
        <div className="container">
          <div className="row">
            <div className="col-9">
              <label for="inputEmail4" className="form-label">
                {" "}
                Upload Slider{" "}
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => this.handleOnChangeImage(event)}
              />{" "}
            </div>{" "}
            <div className="col-3">
              <label for="inputEmail4" className="form-label">
                {" "}
                Type Slider{" "}
              </label>{" "}
              <select
                id="inputState"
                className="form-select"
                value={this.state.type}
                onChange={(event) => this.handleOnChange(event)}
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
          </div>{" "}
        </div>{" "}
        <div
          className="col-12 mt-5"
          style={{
            backgroundImage: `url(${this.state.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "350px",
            width: "100%",
            border: "1px solid red",
          }}
        ></div>{" "}
        <div
          className="btn btn-primary mt-5 ml-5"
          onClick={() => this.handleAddSlider()}
        >
          Thêm Slider{" "}
        </div>{" "}
        <div className=""> </div>{" "}
        <table class="table ">
          <thead>
            <tr>
              <th scope="id"> Id </th> <th scope="col">List Slider Image</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {images &&
              images.length > 0 &&
              images.map((image, index) => {
                return (
                  <tr className="mt-5">
                    <td> {image.id} </td>{" "}
                    <td
                      style={{
                        backgroundColor: "#ddd",
                        backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                          image.image.data
                        )})`,

                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        height: "400px",
                        width: "90%",
                      }}
                    ></td>{" "}
                  </tr>
                );
              })}{" "}
          </tbody>{" "}
        </table>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeManage);
