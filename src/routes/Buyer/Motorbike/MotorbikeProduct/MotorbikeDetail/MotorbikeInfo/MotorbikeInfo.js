import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./MotorbikeInfo.scss";
import { Fragment } from "react";
import { withRouter } from "react-router";
import * as action from "../../../../../../store/actions";
import { CommonUtils } from "../../../../../../utils";

class MotorbikeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMotorbikes: [],
    };
  }

  componentDidMount() {
    let params = this.props.match.params.id.slice(1);
    this.props.fetchGetInfoMotorbike(params);
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.infoMotorbikes !== this.props.infoMotorbikes) {
      this.setState({
        infoMotorbikes: this.props.infoMotorbikes,
      });
    }
  };
  render() {
    let data = "";
    let { infoMotorbikes } = this.state;
    if (infoMotorbikes[0]) {
      data = infoMotorbikes[0];
    }

    return (
      <div className="info">
        <div className="grid">
          <div className="info-title"> Thông số kĩ thuật </div>{" "}
          <div className="table-container">
            <table className="table-info">
              <tbody>
                <tr className="table-row">
                  <td className="table-col1"> Khối lượng bản thân </td>{" "}
                  <td className="table-col2"> {data.mass} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Khoảng cách trục bánh xe </td>{" "}
                  <td className="table-col2"> {data.a} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Độ cao yên </td>{" "}
                  <td className="table-col2"> {data.h1} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Khoảng sáng gầm xe </td>{" "}
                  <td className="table-col2"> {data.h2} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Dung tích bình xăng </td>{" "}
                  <td className="table-col2"> {data.V2} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Kích cỡ lớp trước / sau </td>{" "}
                  <td className="table-col2"> {data.d} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Phuộc trước </td>{" "}
                  <td className="table-col2"> {data.damping1} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Phuộc sau </td>{" "}
                  <td className="table-col2"> {data.damping2} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Loại động cơ </td>{" "}
                  <td className="table-col2"> {data.engine} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Công suất tối đa </td>{" "}
                  <td className="table-col2"> {data.P} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Dung tích nhớt máy </td>{" "}
                  <td className="table-col2"> {data.V3} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Mức tiêu thụ nhiên liệu </td>{" "}
                  <td className="table-col2"> {data.fuel} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Hộp số </td>{" "}
                  <td className="table-col2"> {data.gear} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Loại truyền động </td>{" "}
                  <td className="table-col2"> {data.transmission} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Hệ thống khởi động </td>{" "}
                  <td className="table-col2"> {data.starting} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Moment cực đại </td>{" "}
                  <td className="table-col2"> {data.momen} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Dung tích xy - lanh </td>{" "}
                  <td className="table-col2"> {data.V4} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1">
                    Đường kính x Hành trình pít tông{" "}
                  </td>{" "}
                  <td className="table-col2"> {data.dxl} </td>{" "}
                </tr>{" "}
                <tr className="table-row">
                  <td className="table-col1"> Tỷ số nén </td>{" "}
                  <td className="table-col2"> {data.epsilon} </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    infoMotorbikes: state.motorbike.infoMotorbikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetInfoMotorbike: (idInput) => {
      dispatch(action.fetchGetInfoMotorbike(idInput));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MotorbikeInfo)
);
