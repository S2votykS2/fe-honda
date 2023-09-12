import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { CommonUtils, languages } from '../../../utils'
import { createColorCar, getColorCars, getAllCars } from '../../../services/carService'

class CarBaseInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorName: '',
            carId: '',
            image: '',
            cars: [],
            colors: [],
            carIdSelect: ''
        }
    }

    async componentDidMount() {
        let res = await getAllCars('ALL_SPECIFIC')
        if (res.data && res.data.code === 0) {
            this.setState({
                cars: res.data.data
            })
        }
    }
    handleOnChange = (event, id) => {
        let copyState = {...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }
    handleOnChangeImage = async(event, id) => {
        let images = event.target.files
        let image = images[0]
        let toBase64 = await CommonUtils.toBase64FromFile(image)

        let copyState = {...this.state }
        if (image) {
            copyState[id] = toBase64
            this.setState({
                ...copyState
            })
        }
    }

    handleOnChangeOption = async(event) => {
        this.setState({
            carIdSelect: event.target.value
        })
        let colors = await getColorCars(event.target.value, 'ALL')
        this.setState({
            colors: colors.data.data
        })
    }

    handleOnClick = async() => {
        let data = {
            carId: this.state.carId,
            colorName: this.state.colorName,
            image: this.state.image
        }
        let res = await createColorCar(data)
        if (res.data && res.data.code === 0) {
            alert('create success')
        }
    }
    render() {
        let { cars, colors } = this.state
        return ( <
            React.Fragment >
            <
            div className = "title" > Manage Base Information car < /div>;{' '} <
            div className = "container" >
            <
            div className = "h4 bg-light text-secondary fw-lighter" > Chọn loại xe < /div>{' '} <
            div className = "col-md-12" >
            <
            select id = "inputState"
            className = "form-select"
            value = { this.state.carId }
            onChange = {
                (event) => this.handleOnChange(event, 'carId') } >
            <
            option selected > Choose... < /option>{' '} {
                cars &&
                    cars.length > 0 &&
                    cars.map((car, index) => {
                        return <option value = { car.id } > { car.name } < /option>
                    })
            } { ' ' } <
            /select>{' '} <
            /div>{' '} <
            div className = "h4 bg-light text-secondary fw-lighter mt-5" > Tạo loại màu xe < /div>{' '} <
            form className = "row g-3" >
            <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Image { ' ' } <
            /label>{' '} <
            input className = "form-control"
            type = "file"
            id = "formFile"
            onChange = {
                (event) => this.handleOnChangeImage(event, 'image') }
            />{' '} <
            /div>{' '} <
            div className = "col-md-6"
            style = {
                {
                    backgroundImage: `url(${this.state.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    height: '250px',
                    border: '1px solid purple'
                }
            } > { ' ' } <
            /div>{' '} <
            div className = "col-md-12" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Color Name { ' ' } <
            /label>{' '} <
            input type = "email"
            className = "form-control"
            id = "inputEmail4"
            value = { this.state.colorName }
            onChange = {
                (event) => this.handleOnChange(event, 'colorName') }
            />{' '} <
            /div>{' '} <
            div className = "col-md-12" >
            <
            div className = "btn btn-primary"
            onClick = {
                () => this.handleOnClick() } >
            Tạo dữ liệu { ' ' } <
            /div>{' '} <
            /div>{' '} <
            /form>{' '} <
            div className = "h4 bg-light text-secondary fw-lighter mt-5" > TABLE LIST INFORMATION BASE OF CARS < /div>{' '} <
            div className = "col-12" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Select Type Car { ' ' } <
            /label>{' '} <
            select id = "inputState"
            className = "form-select"
            onChange = {
                (event) => this.handleOnChangeOption(event) }
            value = { this.state.carIdSelect } >
            <
            option selected value = { '' } > { ' ' }
            Choose... { ' ' } <
            /option>{' '} {
                cars &&
                    cars.length > 0 &&
                    cars.map((car, index) => {
                        return <option value = { car.id } > { car.name } < /option>
                    })
            } { ' ' } <
            /select>{' '} <
            /div>{' '} <
            div className = "h4 bg-light text-secondary fw-lighter mt-5" > Bảng màu sắc của xe < /div>{' '} <
            table class = "table" >
            <
            thead >
            <
            tr >
            <
            th > ColorName < /th> <th> Image </th > { ' ' } <
            /tr>{' '} <
            /thead>{' '} <
            tbody > { ' ' } {
                colors &&
                    colors.length > 0 &&
                    colors.map((item, index) => {
                        return ( <
                            tr >
                            <
                            th > { item.colorName } < /th>{' '} <
                            th style = {
                                {
                                    backgroundImage: `url(${CommonUtils.toBase64FromBuffer(item.image)})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    width: '100px',
                                    height: '100px'
                                }
                            } > { ' ' } <
                            /th>{' '} <
                            /tr>
                        )
                    })
            } { ' ' } <
            /tbody>{' '} <
            /table>{' '} <
            /div>{' '} <
            /React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarBaseInfo)