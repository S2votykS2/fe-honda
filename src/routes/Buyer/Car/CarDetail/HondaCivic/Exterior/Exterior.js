import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import { CommonUtils } from '../../../../../../utils'

class Exterior extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {}

  render() {
    console.log('check props', this.props)
    return (
      <>
        <div
          className="img-introduce"
          style={{
            backgroundImage: 'url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets//images/s-exterior/bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
          }}></div>{' '}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Exterior)
