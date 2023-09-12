import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType, create } from "../../../services/systemService";
import {
  getMotorbikes,
  createNewIntroMotorbike,
  getIntroMotorbikes,
} from "../../../services/motorbikeService";
import { CommonUtils, languages } from "../../../utils";
// import ReactMarkdown from "react-markdown";
// import ReactDom from "react-dom";
class MotorbikeIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      markdownContent: "",
      HTMLcontent: "",
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
    let createdData = await getIntroMotorbikes(event.target.value);
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
      title: this.state.title,
      markdown: this.state.markdownContent,
      html: this.state.HTMLcontent,
      image: this.state.image,
    };
    let response = await createNewIntroMotorbike(data);
    console.log("check res", response);
    if (response.data.response && response.data.response.code === 0) {
      alert("Create success");
    }
  };

  render() {
    let { language } = this.props;
    let { motorbikes, datas } = this.state;
    console.log("Check datas", datas);
    return (
      <>
        <div className="title"> Manage Motorbike Intro </div>;{" "}
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
                value={this.state.name}
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
                Title{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.title}
                onChange={(event) => this.handleOnChange(event, "title")}
              />{" "}
            </div>{" "}
            {/* <div className="col-md-12">
                                                                                                                                                                                                                                                                                              <label for="inputEmail4" className="form-label">
                                                                                                                                                                                                                                                                                                Markdown{" "}
                                                                                                                                                                                                                                                                                              </label>{" "}
                                                                                                                                                                                                                                                                                              <ReactMarkdown> Phai hard code ak </ReactMarkdown>{" "}
                                                                                                                                                                                                                                                                                            </div>{" "} */}{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Content Markdown{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.markdownContent}
                onChange={(event) =>
                  this.handleOnChange(event, "markdownContent")
                }
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                content HTML{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.HTMLcontent}
                onChange={(event) => this.handleOnChange(event, "HTMLcontent")}
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
            Table Introduce Motor{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Id </th> <th scope="col"> Title </th>{" "}
                <th scope="col"> Markdown </th> <th scope="col"> HTML </th>{" "}
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
                      <td> {data.id} </td> {data.mtbTitle}{" "}
                      <td> {data.mtbMarkdown} </td> <td> {data.mtbHTML} </td>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeIntro);
