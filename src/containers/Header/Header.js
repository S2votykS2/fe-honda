import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { languages } from "../../utils/constant";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
    };
  }
  componentDidMount = () => {
    this.setState({
      language: this.props.language,
    });
  };
  componentDidUpdate = (prevProps) => {};

  handleChangeLanguage = (lang) => {
    this.props.changeLanguage(lang);
    this.setState({
      language: lang,
    });
  };
  render() {
    const { processLogout } = this.props;
    const { language } = this.state;
    return (
      <div className="header-container">
        {" "}
        {/* thanh navigator */}{" "}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />{" "}
        </div>{" "}
        {/* nút logout */}{" "}
        <div className="header-button-container">
          <div className="language-btn">
            <span
              className={
                language === languages.VI ? "vietnam active" : "vietnam"
              }
              onClick={() => this.handleChangeLanguage(languages.VI)}
            >
              VI{" "}
            </span>{" "}
            <span
              className={
                language === languages.EN ? "english active" : "english"
              }
              onClick={() => this.handleChangeLanguage(languages.EN)}
            >
              EN{" "}
            </span>{" "}
          </div>{" "}
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"> </i>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguage: (lang) => dispatch(actions.changeLanguage(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
