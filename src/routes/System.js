import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import UserManage from '../containers/System/UserManage'
import HomeHeader from '../containers/System/HomeHeader/HomeHeader'
import HomeSlider from '../containers/System/HomeSlider/HomeSlider'
import MotorbikeManage from '../containers/System/MotorbikeManage/MotorbikeManage'
import MotorbikeIntro from '../containers/System/MotorbikeManage/MotorbikeIntro'
import MotorbikeType from '../containers/System/MotorbikeManage/MotorbikeType'
import MotorbikeInfo from '../containers/System/MotorbikeManage/MotorbikeInfo'
import MotorbikeAccessory from '../containers/System/MotorbikeManage/MotorbikeAccessory'
import Header from '../containers/Header/Header'
import CarManage from '../containers/System/Car/CarManage'
import ManageTryDrive from '../containers/System/Car/ManageTryDrive'
import CarBaseInfo from '../containers/System/Car/CarBaseInfo'
import CarColorType from '../containers/System/Car/CarColorType'
import { Scrollbars } from 'react-custom-scrollbars'

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props
    return (
      <React.Fragment>
        <Scrollbars style={{ width: '100vw', height: '100vh' }}>
          {' '}
          {isLoggedIn && <Header />}{' '}
          <div className="system-container">
            <div className="system-list">
              <Switch>
                <Route path="/system/user-manage" component={UserManage} /> {/* HomePage */}{' '}
                <Route path="/system/home-header" component={HomeHeader} /> <Route path="/system/home-slider" component={HomeSlider} />{' '}
                <Route path="/system/motorbike-manage" component={MotorbikeManage} />{' '}
                <Route path="/system/motorbike-manage-intro" component={MotorbikeIntro} />{' '}
                <Route path="/system/motorbike-manage-type" component={MotorbikeType} />{' '}
                <Route path="/system/motorbike-manage-info" component={MotorbikeInfo} />{' '}
                <Route path="/system/motorbike-manage-accessory" component={MotorbikeAccessory} />{' '}
                <Route path="/system/car-manage" component={CarManage} />{' '}
                <Route path="/system/booking-try-drive" component={ManageTryDrive} />{' '}
                <Route path="/system/car-manage-base-inf" component={CarBaseInfo} />{' '}
                <Route path="/system/car-manage-color" component={CarColorType} />{' '}
                <Route
                  component={() => {
                    return <Redirect to={systemMenuPath} />
                  }}
                />{' '}
              </Switch>{' '}
            </div>{' '}
          </div>{' '}
        </Scrollbars>{' '}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.admin.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(System)
