import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import { Redirect } from "react-router-dom";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

import Home from "../routes/Buyer/HomePage/Home";
import MotorbikeProduct from "../routes/Buyer/Motorbike/MotorbikeProduct/MotorbikeProduct";
import MotorbikeDetail from "../routes/Buyer/Motorbike/MotorbikeProduct/MotorbikeDetail/MotorbikeDetail";
import MotorbikeAccessory from "../routes/Buyer/Motorbike/MotorbikeAccessory/MotorbikeAccessory";
import CarProduct from "../routes/Buyer/Car/CarProduct/CarProduct";
import TryDrive from "../routes/Buyer/Car/CarProduct/TryDrive/TryDrive";
import ConfirmTryDrive from "../routes/Buyer/Car/CarProduct/TryDrive/ConfirmTryDrive";
import HondaCivic from "../routes/Buyer/Car/CarDetail/HondaCivic/HondaCivic";
import Login from "../containers/Auth/Login";
import System from "../routes/System";

import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";

class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    const { isLoggedIn } = this.props;
    let linkToRedirect = isLoggedIn ? "/system" : "/login";
    return (
      <Fragment>
        <Router history={history}>
          {" "}
          {/* <Redirect to={linkToRedirect} />{" "} */}{" "}
          <div className="main-container">
            <ConfirmModal />
            <span className="content-container">
              <Switch>
                <Route path={path.HOME} exact component={Home} />{" "}
                <Route
                  path={path.MOTORBIKE_PRODUCT}
                  exact
                  component={MotorbikeProduct}
                />{" "}
                <Route
                  path={path.MOTORBIKE_ACCESSORY}
                  component={MotorbikeAccessory}
                  exact
                />{" "}
                <Route
                  path={path.MOTORBIKE_DETAIL}
                  component={MotorbikeDetail}
                  exact
                />{" "}
                <Route path={path.CAR_PRODUCT} component={CarProduct} exact />{" "}
                <Route path={path.HONDA_CIVIC} component={HondaCivic} exact />{" "}
                <Route path={path.CAR_TRY_DRIVE} component={TryDrive} exact />{" "}
                <Route
                  path={path.CONFIRM_TRY_DRIVE}
                  component={ConfirmTryDrive}
                />{" "}
                <Route
                  path={path.LOGIN}
                  component={userIsNotAuthenticated(Login)}
                />{" "}
                <Route
                  path={path.SYSTEM}
                  component={userIsAuthenticated(System)}
                />{" "}
              </Switch>{" "}
            </span>{" "}
            <ToastContainer
              className="toast-container"
              toastClassName="toast-item"
              bodyClassName="toast-item-body"
              autoClose={false}
              hideProgressBar={true}
              pauseOnHover={false}
              pauseOnFocusLoss={true}
              closeOnClick={false}
              draggable={false}
              closeButton={<CustomToastCloseButton />}
            />{" "}
          </div>{" "}
        </Router>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
