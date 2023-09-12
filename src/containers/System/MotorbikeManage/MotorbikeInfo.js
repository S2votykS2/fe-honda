import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType, create } from "../../../services/systemService";
import {
  getMotorbikes,
  createNewInfoMotorbike,
  getInfoMotorbikes,
} from "../../../services/motorbikeService";
import { CommonUtils, languages } from "../../../utils";
// import ReactMarkdown from "react-markdown";
// import ReactDom from "react-dom";
class MotorbikeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mass: "",
      V1: "",
      a: "",
      h1: "",
      h2: "",
      V2: "",
      d: "",
      damping1: "",
      damping2: "",
      engine: "",
      P: "",
      V3: "",
      fuel: "",
      gear: "",
      transmission: "",
      starting: "",
      momen: "",
      V4: "",
      dxl: "",
      epsilon: "",

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
    let createdData = await getInfoMotorbikes(event.target.value);
    if (createdData.data && createdData.data.code === 0) {
      this.setState({
        datas: createdData.data.data[0],
      });
    }
  };

  handleOnClick = async () => {
    console.log("Check state", this.state);
    let data = {
      mtbId: this.state.id,
      mass: this.state.mass,
      V1: this.state.V1,
      a: this.state.a,
      h1: this.state.h1,
      h2: this.state.h2,
      V2: this.state.V2,
      d: this.state.d,
      damping1: this.state.damping1,
      damping2: this.state.damping2,
      engine: this.state.engine,
      P: this.state.P,
      V3: this.state.V3,
      fuel: this.state.fuel,
      gear: this.state.gear,
      transmission: this.state.transmission,
      starting: this.state.starting,
      momen: this.state.momen,
      V4: this.state.V4,
      dxl: this.state.dxl,
      epsilon: this.state.epsilon,
    };
    let response = await createNewInfoMotorbike(data);
    if (response.data.response && response.data.response.code === 0) {
      alert("create success");
    }
  };

  render() {
    let { language } = this.props;
    let { motorbikes, datas } = this.state;
    console.log("Check datas", datas);
    return (
      <>
        <div className="title"> Manage Motorbike Info </div>;{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            <FormattedMessage id="manage-user.create-user.header" />
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-12">
              {" "}
              {/*  */}{" "}
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
            {/*  */}{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Khối lượng bản thân{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.mass}
                onChange={(event) => this.handleOnChange(event, "mass")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Dài x Rộng x Cao{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.V1}
                onChange={(event) => this.handleOnChange(event, "V1")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Khoảng cách trục bánh xe{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.a}
                onChange={(event) => this.handleOnChange(event, "a")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Độ cao yên{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.h1}
                onChange={(event) => this.handleOnChange(event, "h1")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Khoảng sáng gầm xe{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.h2}
                onChange={(event) => this.handleOnChange(event, "h2")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Dung tích bình xăng{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.V2}
                onChange={(event) => this.handleOnChange(event, "V2")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Kích cỡ lớp trước / sau{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.d}
                onChange={(event) => this.handleOnChange(event, "d")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Phuộc trước{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.damping1}
                onChange={(event) => this.handleOnChange(event, "damping1")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Phuộc sau{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.damping2}
                onChange={(event) => this.handleOnChange(event, "damping2")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Loại động cơ{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.engine}
                onChange={(event) => this.handleOnChange(event, "engine")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Công suất tối đa{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.P}
                onChange={(event) => this.handleOnChange(event, "P")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Dung tích nhớt máy{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.V3}
                onChange={(event) => this.handleOnChange(event, "V3")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Mức tiêu thụ nhiên liệu{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.fuel}
                onChange={(event) => this.handleOnChange(event, "fuel")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Hộp số{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.gear}
                onChange={(event) => this.handleOnChange(event, "gear")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Loại truyền động{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.transmission}
                onChange={(event) => this.handleOnChange(event, "transmission")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Hệ thống khởi động{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.starting}
                onChange={(event) => this.handleOnChange(event, "starting")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Moment cực đại{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.momen}
                onChange={(event) => this.handleOnChange(event, "momen")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Dung tích xy - lanh{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.D4}
                onChange={(event) => this.handleOnChange(event, "D4")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Đường kính x Hành trình pít tông{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.dxl}
                onChange={(event) => this.handleOnChange(event, "dxl")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Tỷ số nén{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.epsilon}
                onChange={(event) => this.handleOnChange(event, "epsilon")}
              />{" "}
            </div>{" "}
            <div className="col-md-12">
              <div className="btn btn-primary" onClick={this.handleOnClick}>
                Tạo dữ liệu{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter mt-5">
            {" "}
            Table Information Motor{" "}
          </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Khối lượng bản thân </th>{" "}
                <th scope="col"> Dài x Rộng x Cao </th>{" "}
                <th scope="col"> Khoảng cách trục bánh xe </th>{" "}
                <th scope="col"> Độ cao yên </th>{" "}
                <th scope="col"> Khoảng sáng gầm xe </th>{" "}
                <th scope="col"> Dung tích bình xăng </th>{" "}
                <th scope="col"> Kích cỡ lớp trước / sau </th>{" "}
                <th scope="col"> Phuộc trước </th>{" "}
                <th scope="col"> Phuộc sau </th>{" "}
                <th scope="col"> Loại động cơ </th>{" "}
                <th scope="col"> Công suất tối đa </th>{" "}
                <th scope="col"> Dung tích nhớt máy </th>{" "}
                <th scope="col"> Mức tiêu thụ nhiên liệu </th>{" "}
                <th scope="col"> Loại truyền động </th>{" "}
                <th scope="col"> Hệ thống khởi động </th>{" "}
                <th scope="col"> Dung tích xy - lanh </th>{" "}
                <th scope="col"> Đường kính x Hành trình pít tông </th>{" "}
                <th scope="col"> Tỷ số nén </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              <td scope="col"> {datas.mass} </td>{" "}
              <td scope="col"> {datas.V1} </td> <td scope="col"> {datas.a} </td>{" "}
              <td scope="col"> {datas.h1} </td>{" "}
              <td scope="col"> {datas.h2} </td>{" "}
              <td scope="col"> {datas.V2} </td> <td scope="col"> {datas.d} </td>{" "}
              <td scope="col"> {datas.damping1} </td>{" "}
              <td scope="col"> {datas.damping2} </td>{" "}
              <td scope="col"> {datas.engine} </td>{" "}
              <td scope="col"> {datas.P} </td> <td scope="col"> {datas.V3} </td>{" "}
              <td scope="col"> {datas.fuel} </td>{" "}
              <td scope="col"> {datas.gear} </td>{" "}
              <td scope="col"> {datas.transmission} </td>{" "}
              <td scope="col"> {datas.starting} </td>{" "}
              <td scope="col"> {datas.momen} </td>{" "}
              <td scope="col"> {datas.V4} </td>{" "}
              <td scope="col"> {datas.dxl} </td>{" "}
              <td scope="col"> {datas.epsilon} </td>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(MotorbikeInfo);
