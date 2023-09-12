import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  getAllcodeType,
  createNewUser,
  getAllUsers,
  DeleteUser,
} from "../../services/systemService";
import { languages } from "../../utils";
import { CommonUtils } from "../../utils";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ModalEditUser from "./UserManage/ModalEditUser";
import ModalDeleteUser from "./UserManage/ModalDeleteUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      roles: [],
      language: "",

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      address: "",
      phoneNumber: "",
      role: "",
      avatar: "",

      users: [],

      isOpenUpdateModal: false,
      isOpenDeleteModal: false,

      userUpdate: {},
      userDelete: {},
    };
  }

  async componentDidMount() {
    this.setState({
      language: this.props.language,
    });

    let genders = await getAllcodeType("gender");
    if (genders.data && genders.data.code === 0) {
      this.setState({
        genders: genders.data.data,
      });
    }
    let roles = await getAllcodeType("role");
    if (roles.data && roles.data.code === 0) {
      this.setState({
        roles: roles.data.data,
      });
    }

    // C1 - Call function (tham tri)
    await this.getAllUsers();
    // C2 - tham chieu
    // let test = async () => await this.getAllUsers();
  }
  handleOnChange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleOnChangeImage = async (event) => {
    let images = event.target.files;
    let avatar = images[0];
    let toBase64 = await CommonUtils.toBase64FromFile(avatar);
    let toBase64simple = URL.createObjectURL(avatar);
    if (avatar) {
      this.setState({
        avatar: toBase64,
      });
    } else {
      this.setState({
        avatar: "",
      });
    }
  };
  handleOnClickSave = async () => {
    let dataInput = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role,
      avatar: this.state.avatar,
    };
    let res = await createNewUser(dataInput);
    if (res.data && res.data.code === 0) {
      alert("Create success");
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        address: "",
        phoneNumber: "",
        role: "",
        avatar: "",
      });

      await this.getAllUsers();
    } else {
      toast.warn("CHua fix dc");
    }
  };

  getAllUsers = async () => {
    let users = await getAllUsers();
    if (users.data && users.data.code === 0) {
      this.setState({
        users: users.data.users,
      });
    }
  };

  handleUpdateUser = (user) => {
    if (user) {
      let bufferInDB = user.avatar;
      let toBase64 = CommonUtils.toBase64FromBuffer(bufferInDB);
      this.setState({
        userUpdate: {
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          address: user.address,
          phoneNumber: user.phoneNumber,
          role: user.roleId,
          avatar: toBase64,
        },

        avatar: toBase64,
      });
    }
    this.handleModalUpdatefromParent();
  };
  handleModalUpdatefromParent = () => {
    this.setState({
      isOpenUpdateModal: !this.state.isOpenUpdateModal,
    });
  };

  handleDeleteUser = async (user) => {
    // let responseDel = await DeleteUser(user.id);
    // if (responseDel.data && responseDel.data.code === 0) {
    this.setState({
      userDelete: user,
      isOpenDeleteModal: true,
    });
    console.log("Check state", this.state);
    await this.getAllUsers();
    // } else {
    //   alert("Delete user fail");
    // this.setState({
    //   userDelete: {},
    //   isOpenDeleteModal: false,
    // });
    // }
  };

  handleModalDeletefromParent = () => {
    this.setState({
      isOpenDeleteModal: !this.state.isOpenDeleteModal,
    });
  };
  render() {
    // console.log("Check state", this.state);
    let { roles, genders, users } = this.state;
    let { language } = this.props;
    return (
      <React.Fragment>
        <div className="title">
          {" "}
          <FormattedMessage id="menu.system.manage.manage-user" />{" "}
        </div>{" "}
        <div className="container">
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            <FormattedMessage id="manage-user.create-user.header" />
          </div>{" "}
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                {" "}
                Email{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={this.state.email}
                onChange={(event) => this.handleOnChange(event, "email")}
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.password" />
              </label>{" "}
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={this.state.password}
                onChange={(event) => this.handleOnChange(event, "password")}
              />{" "}
            </div>{" "}
            <div className="col-4">
              <label for="inputAddress" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.firstName" />
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                value={this.state.firstName}
                onChange={(event) => this.handleOnChange(event, "firstName")}
              />{" "}
            </div>{" "}
            <div className="col-4">
              <label for="inputAddress" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.lastName" />
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                value={this.state.lastName}
                onChange={(event) => this.handleOnChange(event, "lastName")}
              />{" "}
            </div>{" "}
            <div className="col-4">
              <label for="inputAddress" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.gender" />
              </label>{" "}
              <br />{" "}
              {genders &&
                genders.length > 0 &&
                genders.map((gender, index) => {
                  return (
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value={gender.key}
                        // value={this.state.gender}
                        onChange={(event) => {
                          this.handleOnChange(event, "gender");
                        }}
                      />{" "}
                      <label className="form-check-label" for="inlineRadio1">
                        {" "}
                        {language === languages.VI
                          ? gender.valueVi
                          : gender.valueEn}{" "}
                      </label>{" "}
                    </div>
                  );
                })}{" "}
            </div>{" "}
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.address" />
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                value={this.state.address}
                onChange={(event) => this.handleOnChange(event, "address")}
              />{" "}
            </div>{" "}
            <div className="col-md-4">
              <label for="inputCity" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.phoneNumber" />
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={this.state.phoneNumber}
                onChange={(event) => this.handleOnChange(event, "phoneNumber")}
              />{" "}
            </div>{" "}
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.role" />
              </label>{" "}
              <select
                id="inputState"
                className="form-select"
                value={this.state.role}
                onChange={(event) => this.handleOnChange(event, "role")}
              >
                <option selected> Choose... </option>{" "}
                {roles &&
                  roles.length > 0 &&
                  roles.map((role, index) => {
                    return (
                      <option value={role.key} key={index}>
                        {" "}
                        {language === languages.VI
                          ? role.valueVi
                          : role.valueEn}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
            </div>{" "}
            <div className="col-md-2">
              <label for="inputCity" className="form-label">
                {" "}
                <FormattedMessage id="manage-user.create-user.avatar" />
              </label>{" "}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => {
                  this.handleOnChangeImage(event);
                }}
              />{" "}
            </div>{" "}
            <div
              className="col-md-2"
              style={{
                backgroundImage: `url(${this.state.avatar})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "250px",
                border: "1px solid blue",
              }}
            ></div>{" "}
            <div className="col-12">
              <div
                className="btn btn-primary px-2"
                onClick={() => this.handleOnClickSave()}
              >
                Sign in{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="h4 bg-light text-secondary fw-lighter">
            {" "}
            Table User{" "}
          </div>{" "}
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="id"> Id </th> <th scope="col"> Email </th>{" "}
                <th scope="col"> Password </th> <th scope="col"> FistName </th>{" "}
                <th scope="col"> LastName </th> <th scope="col"> Gender </th>{" "}
                <th scope="col"> Address </th>{" "}
                <th scope="col"> PhoneNumber </th> <th scope="col"> Role </th>{" "}
                <th scope="col"> Avatar </th> <th scope="col"> Action </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {users &&
                users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr>
                      <td> {user.id} </td> <td> {user.email} </td>{" "}
                      <td> {user.password} </td> <td> {user.firstName} </td>{" "}
                      <td> {user.lastName} </td> <td> {user.gender} </td>{" "}
                      <td> {user.address} </td> <td> {user.phoneNumber} </td>{" "}
                      <td> {user.roleId} </td>{" "}
                      <td
                        style={{
                          backgroundColor: "#ddd",
                          backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            user.avatar
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          height: "75px",
                          width: "75px",
                        }}
                      >
                        {" "}
                      </td>{" "}
                      <td>
                        {" "}
                        <i
                          className="fas fa-user-edit m-2 p-2 d-block bg-dark text-light rounded"
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleUpdateUser(user)}
                        >
                          {" "}
                        </i>{" "}
                        <i
                          className="fas fa-user-times m-2 p-2 d-block bg-dark text-light rounded"
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleDeleteUser(user)}
                        ></i>{" "}
                      </td>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
        <ModalEditUser
          handleModalfromChild={this.handleModalUpdatefromParent}
          isOpen={this.state.isOpenUpdateModal}
          userFromParent={this.state.userUpdate}
        />{" "}
        <ModalDeleteUser
          handleModalfromChild={this.handleModalDeletefromParent}
          isOpen={this.state.isOpenDeleteModal}
          userFromParent={this.state.userDelete}
        />{" "}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />{" "}
        <ToastContainer />
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
