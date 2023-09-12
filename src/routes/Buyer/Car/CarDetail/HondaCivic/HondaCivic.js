import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'
import { SnapList, SnapItem, useVisibleElements, useScroll, useDragToScroll, isTouchDevice } from 'react-snaplist-carousel'
import { Scrollbars } from 'react-custom-scrollbars'
import './HondaCivic.scss'
import Introduce from './Introduce/Introduce'
import Message from './Message/Message'
import Color from './Color/Color'
import Exterior from './Exterior/Exterior'
import Interior from './Interior/Interior'
import Operation from './Operation/Operation'
import Safe from './Safe/Safe'
import Accessory from './Accessory/Accessory'
import Technology from './Technology/Technology'
import Library from './Library/Library'
import TryDriveCar from './TryDriveCar/TryDriveCar'

class HondaCivic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exteriors: [],
      interiors: [],
      operations: [],
      safes: [],
      accessories: [],
      libraries: [],
      colors: []
    }
  }

  async componentDidMount() {
    this.props.fetchGetExteriorCars('ALL')
    this.props.fetchGetInteriorCars('ALL')
    this.props.fetchGetOperationCars('ALL')
    this.props.fetchGetSafeCars('ALL')
    this.props.fetchGetAccessoryCars('ALL')
    this.props.fetchGetLibraryCars('ALL')
    this.props.fetchGetColorCars(9)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.exteriors !== this.props.exteriors) {
      this.setState({
        exteriors: this.props.exteriors
      })
    }
    if (prevProps.interiors !== this.props.interiors) {
      this.setState({
        interiors: this.props.interiors
      })
    }
    if (prevProps.operations !== this.props.operations) {
      this.setState({
        operations: this.props.operations
      })
    }
    if (prevProps.safes !== this.props.safes) {
      this.setState({
        safes: this.props.safes
      })
    }
    if (prevProps.accessories !== this.props.accessories) {
      this.setState({
        accessories: this.props.accessories
      })
    }
    if (prevProps.libraries !== this.props.libraries) {
      this.setState({
        libraries: this.props.libraries
      })
    }
    if (prevProps.colors !== this.props.colors) {
      this.setState({
        colors: this.props.colors
      })
    }
  }
  render() {
    return (
      <>
        <Scrollbars style={{ width: '100vw', height: '100vh' }}>
          <div className="nav">
            <div className="grid">
              <ul class="row-nav">
                <li className="col-nav">
                  {' '}
                  <a href="" className="nav-link">
                    {' '}
                    Home{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#message" className="nav-link">
                    {' '}
                    Thông điệp{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#color" className="nav-link">
                    {' '}
                    Màu sắc{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#exterior" className="nav-link">
                    {' '}
                    Ngoại thất{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#interior" className="nav-link">
                    {' '}
                    Nội thất{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#operation" className="nav-link">
                    {' '}
                    Vận hành{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#safe" className="nav-link">
                    {' '}
                    An toàn{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#accessory" className="nav-link">
                    {' '}
                    Phụ kiện{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#technology" className="nav-link">
                    {' '}
                    Thông số kỹ thuật{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#library" className="nav-link">
                    {' '}
                    Thư viện{' '}
                  </a>{' '}
                </li>{' '}
                <li className="col-nav">
                  {' '}
                  <a href="#try-drive-car" className="nav-link">
                    {' '}
                    Lái thử{' '}
                  </a>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </div>{' '}
          <SnapList direction="vertical">
            <SnapItem snapAlign="center">
              <div className="" id="introduce">
                {' '}
              </div>{' '}
              <Introduce />
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="message">
                {' '}
              </div>{' '}
              <Message />
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="color">
                {' '}
              </div>{' '}
              <Color data={this.state.colors} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="exterior">
                {' '}
              </div>{' '}
              <Exterior data={this.state.exteriors} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="interior">
                {' '}
              </div>{' '}
              <Interior data={this.state.interiors} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="operation">
                {' '}
              </div>{' '}
              <Operation data={this.state.operations} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="safe">
                {' '}
              </div>{' '}
              <Safe data={this.state.safes} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="accessory">
                {' '}
              </div>{' '}
              <Accessory data={this.state.accessories} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="technology">
                {' '}
              </div>{' '}
              <Technology />
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="library">
                {' '}
              </div>{' '}
              <Library data={this.state.libraries} />{' '}
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="" id="try-drive-car">
                {' '}
              </div>{' '}
              <TryDriveCar />
            </SnapItem>{' '}
            <SnapItem snapAlign="center">
              <div className="footer">
                <div className="grid">
                  <div className="row-footer">
                    <div className="col-left">
                      <i class="fas fa-copyright"> </i>
                      2022. Copyright by Honda Viet Nam{' '}
                    </div>{' '}
                    <div className="col right">
                      <i class="fab fa-facebook"> </i>. <i class="fab fa-youtube"> </i>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </SnapItem>{' '}
          </SnapList>{' '}
        </Scrollbars>{' '}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    exteriors: state.car.exteriors,
    interiors: state.car.interiors,
    operations: state.car.exteriors,
    safes: state.car.safes,
    accessories: state.car.accessories,
    libraries: state.car.libraries,
    colors: state.car.colors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetExteriorCars: (id) => {
      dispatch(actions.fetchGetExteriorCars(id))
    },
    fetchGetInteriorCars: (id) => {
      dispatch(actions.fetchGetInteriorCars(id))
    },
    fetchGetOperationCars: (id) => {
      dispatch(actions.fetchGetOperationCars(id))
    },
    fetchGetSafeCars: (id) => {
      dispatch(actions.fetchGetSafeCars(id))
    },
    fetchGetAccessoryCars: (id) => {
      dispatch(actions.fetchGetAccessoryCars(id))
    },
    fetchGetLibraryCars: (id) => {
      dispatch(actions.fetchGetLibraryCars(id))
    },
    fetchGetColorCars: (id) => {
      dispatch(actions.fetchGetColorCars(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HondaCivic)
