import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalEditUser extends Component {
  state = {
    // modal: true,

    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    phoneNumber: "",
    role: "",
    avatar: "",
  };

  componentDidMount() {}
  handleGetData = () => {
    this.setState({
      firstName: this.props.userFromParent.firstName,
      lastName: this.props.userFromParent.lastName,
      gender: this.props.userFromParent.gender,
      address: this.props.userFromParent.address,
      phoneNumber: this.props.userFromParent.phoneNumber,
      role: this.props.userFromParent.role,
      avatar: this.props.userFromParent.avatar,
    });
  };
  toggle = () => {
    // this.setState({
    //   modal: !this.state.modal,
    // });
    this.props.handleModalfromChild();
  };
  hanleFilledInfo = () => {};

  isCloseModal = () => {};

  render() {
    console.log("Check props", this.props);
    console.log("Check state", this.state);
    let { isOpen, userFromParent } = this.props;
    return (
      <React.Fragment>
        <div>
          <Modal isOpen={isOpen} toggle={this.toggle} size="lg">
            <ModalHeader toggle={this.toggle}> Update User </ModalHeader>{" "}
            <ModalBody>
              <div
                className="btn btn-secondary"
                onClick={() => this.handleGetData()}
              >
                Get data{" "}
              </div>{" "}
              <form className="row g-3">
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
                    // onChange={(event) => this.handleOnChange(event, "firstName")}
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
                    // onChange={(event) => this.handleOnChange(event, "lastName")}
                  />{" "}
                </div>{" "}
                <div className="col-4">
                  <label for="inputAddress" className="form-label">
                    {" "}
                    <FormattedMessage id="manage-user.create-user.gender" />
                  </label>{" "}
                  <br />{" "}
                  {/* {genders &&
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
                                                                                                                                                                                                                                                                                                                                                })} */}{" "}
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
                    // onChange={(event) => this.handleOnChange(event, "address")}
                  />{" "}
                </div>{" "}
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    {" "}
                    <FormattedMessage id="manage-user.create-user.phoneNumber" />
                  </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    value={this.state.phoneNumber}
                    // onChange={(event) => this.handleOnChange(event, "phoneNumber")}
                  />{" "}
                </div>{" "}
                <div className="col-md-6">
                  <label for="inputState" className="form-label">
                    {" "}
                    <FormattedMessage id="manage-user.create-user.role" />
                  </label>{" "}
                  <select
                    id="inputState"
                    className="form-select"
                    value={this.state.role}
                    // onChange={(event) => this.handleOnChange(event, "role")}
                  >
                    <option selected> Choose... </option>{" "}
                    {/* {roles &&
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
                                                                                                                                                                                                                                                                                                                                                  })} */}{" "}
                  </select>{" "}
                </div>{" "}
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    {" "}
                    <FormattedMessage id="manage-user.create-user.avatar" />
                  </label>{" "}
                  <input
                    value={this.state.avatar}
                    className="form-control"
                    type="file"
                    id="formFile"
                    // onChange={(event) => {
                    //   this.handleOnChangeImage(event);
                    // }}
                  />{" "}
                </div>{" "}
                <div
                  className="col-md-6"
                  style={{
                    backgroundImage: `url(${""})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "250px",
                    border: "1px solid blue",
                  }}
                ></div>{" "}
              </form>{" "}
            </ModalBody>{" "}
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Update{" "}
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel{" "}
              </Button>{" "}
            </ModalFooter>{" "}
          </Modal>{" "}
        </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
