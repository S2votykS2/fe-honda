import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  getBookTryDrives,
  completeBookTryDrive,
} from "../../../services/carService";
import moment from "react-moment";
class ManageTryDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }

  async componentDidMount() {
    let bookings = await getBookTryDrives();
    if (bookings.data && bookings.data.code === 0) {
      this.setState({
        bookings: bookings.data.data,
      });
    }
  }
  refreshTable = async () => {
    let bookings = await getBookTryDrives();
    if (bookings.data && bookings.data.code === 0) {
      this.setState({
        bookings: bookings.data.data,
      });
    }
  };
  clickConfirm = async (booking) => {
    let response = await completeBookTryDrive(booking);
    this.refreshTable();
  };
  render() {
    let { bookings } = this.state;
    return (
      <>
        <div className="title"> Manage Booking Try Drive </div>;{" "}
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Tên </th> <th scope="col"> Email </th>{" "}
                <th scope="col"> Tuổi </th> <th scope="col"> Giới tính </th>{" "}
                <th scope="col"> Số điện thoại </th>{" "}
                <th scope="col"> Ngày đặt lịch </th>{" "}
                <th scope="col"> Trạng thái </th> <th scope="col"> Action </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {bookings &&
                bookings.length > 0 &&
                bookings.map((booking, index) => {
                  return (
                    <tr>
                      <td> {booking.name} </td> <td> {booking.email} </td>{" "}
                      <td> {booking.age} </td> <td> {booking.gender} </td>{" "}
                      <td> {booking.phoneNumber} </td> <td>{booking.date}</td>{" "}
                      <td> {booking.statusData.valueVi} </td>{" "}
                      <td>
                        {" "}
                        {booking.statusId === "TRY1" ? (
                          <span
                            style={{
                              backgroundColor: "#ddd",
                              padding: "5px",
                              border: "1px solid #555",
                              borderRadius: "8px",
                            }}
                          >
                            Chờ xác nhận{" "}
                          </span>
                        ) : (
                          ""
                        )}{" "}
                        {booking.statusId === "TRY2" ? (
                          <span
                            style={{
                              marginRight: "10px",
                              backgroundColor: "rgb(38 217 235 )",
                              padding: "8px",
                              color: "#fff",
                              border: "1px solid yellow",
                              cursor: "pointer",
                              borderRadius: "8px",
                            }}
                            onClick={() => this.clickConfirm(booking)}
                          >
                            {" "}
                            Xác nhận{" "}
                          </span>
                        ) : (
                          ""
                        )}{" "}
                        {booking.statusId === "TRY3" ? (
                          <span
                            style={{
                              marginRight: "10px",
                              backgroundColor: "rgb(28 225 34)",
                              padding: "8px",
                              color: "#fff",
                              border: "1px solid yellow",
                              borderRadius: "8px",
                            }}
                          >
                            Hoàn tất đăng ký{" "}
                          </span>
                        ) : (
                          ""
                        )}{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageTryDrive);
