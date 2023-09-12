import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import { CommonUtils } from '../../../../../../utils'
import { times } from 'lodash'
// import * as SpriteSpin from 'spritespin'

class Color extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
    }

    componentDidMount() {
        this.setState({
            colors: this.props.data
        })
    }
    componentDidUpdate(prevProps, prevState, snapShot) {}

    render() {
        console.log('check state', this.state)
        console.log('check props', this.props)

        return ( <
            >
            <
            div script = {
                [{
                    src: 'https://unpkg.com/spritespin@4.0.11/release/spritespin.js',
                    type: 'text/javascript'
                }]
            }
            className = "img-introduce"
            style = {
                {
                    backgroundImage: 'url(https://www.honda.com.vn/o-to/san-pham/honda-civic/dist/assets//images/s-color/bg_360.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh'
                }
            } > { ' ' } <
            /div>{' '} <
            div className = "" > < /div>{' '} < /
            >
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Color)