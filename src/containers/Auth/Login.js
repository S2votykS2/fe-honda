import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { handleLogin } from "../../services/loginService";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      messageError: "",
      userInfo: {},
    };
    this.btnLogin = React.createRef();
  }
  state = {};
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
      messageError: "",
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
      messageError: "",
    });
  };
  handleBtn = async () => {
    let { username, password } = this.state;
    const { adminLoginSuccess, adminLoginFail } = this.props;

    let user = await handleLogin(username, password);
    if (user.data) {
      this.setState({
        messageError: user.data.message,
      });
    }
    if (user.data.user && user.data.code === 0) {
      adminLoginSuccess(user.data);
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  componentDidMount = () => {};
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.adminInfo !== this.props.adminInfo) {
      this.setState({
        userInfo: this.props.adminInfo,
      });
      // Kb tai sao k chay vao ham nay
    }
  }
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 login-text">
              {" "}
              <FormattedMessage id="login.login" />{" "}
            </div>{" "}
            <div className="col-12 form-group login-input">
              <label>
                {" "}
                <FormattedMessage id="login.username" />{" "}
              </label>{" "}
              <input
                className="form-control"
                placeholder="Enter your username"
                type="text"
                value={this.state.username}
                onChange={(event) => this.handleUsername(event)}
              />{" "}
            </div>{" "}
            <div className="col-12 form-group login-input">
              <label>
                {" "}
                <FormattedMessage id="login.username" />{" "}
              </label>{" "}
              <input
                className="form-control"
                placeholder="Enter your password"
                type={this.state.isShowPassword ? "text" : "password"}
                onChange={(event) => this.handlePassword(event)}
                value={this.state.password}
              />{" "}
              <span
                onClick={() => {
                  this.handleShowHidePassword();
                }}
              >
                <i
                  className={
                    this.state.isShowPassword
                      ? "fas fa-eye"
                      : "fas fa-eye-slash"
                  }
                ></i>{" "}
              </span>{" "}
            </div>{" "}
            <div className="col-12 messageErr" style={{ color: "red" }}>
              {" "}
              {this.state.messageError}{" "}
            </div>{" "}
            <div className="col-12 ">
              <button
                className="login-btn"
                onClick={() => {
                  this.handleBtn();
                }}
              >
                <FormattedMessage id="login.login" />
              </button>{" "}
            </div>{" "}
            <div className="col-12">
              <span className="forgot-password">
                {" "}
                <FormattedMessage id="login.forgot" />{" "}
              </span>{" "}
            </div>{" "}
            <div className="col-12">
              <span className="text-centre">
                {" "}
                <FormattedMessage id="login.other-login" />{" "}
              </span>{" "}
            </div>{" "}
            <div className="col-12 login-social">
              <i class="fab fa-google gg"> </i>{" "}
              <i class="fab fa-facebook fb"> </i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.admin.isLoggedIn,
    adminInfo: state.admin.adminInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
