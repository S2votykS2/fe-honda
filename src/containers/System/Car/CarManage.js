import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeType } from "../../../services/systemService";
import { createNewCar, getAllCars } from "../../../services/carService";
import { CommonUtils, languages } from "../../../utils";
class CarManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            version: "",
            color: "",
            image: "",

            cars: [],
        };
    }

    async componentDidMount() {
        let cars = await getAllCars("ALL");
        if (cars.data && cars.data.code === 0) {
            this.setState({
                cars: cars.data.data,
            });
        }
    }

    handleOnChange = (event, id) => {
        let copyState = {...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };
    handleOnChangeImage = async(event) => {
        let base64 = await CommonUtils.toBase64FromFile(event.target.files[0]);
        this.setState({
            image: base64,
        });
    };
    handleOnClick = async() => {
        let data = {
            name: this.state.name,
            price: this.state.price,
            version: this.state.version,
            color: this.state.color,
            image: this.state.image,
        };
        let res = await createNewCar(data);
        if (res.data && res.data.code === 0) {
            alert("create success");
        }
    };
    render() {
        let { cars } = this.state;
        return ( <
            >
            <
            div className = "title" > Manage products < /div>;{" "} <
            div className = "container" >
            <
            div className = "h4 bg-light text-secondary fw-lighter" > { " " } <
            FormattedMessage id = "manage-user.create-user.header" / >
            <
            /div>{" "} <
            form className = "row g-3" >
            <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" > { " " }
            Name { " " } <
            /label>{" "} <
            input type = "email"
            className = "form-control"
            id = "inputEmail4"
            value = { this.state.name }
            onChange = {
                (event) => this.handleOnChange(event, "name") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" > { " " }
            Price { " " } <
            /label>{" "} <
            input type = "email"
            className = "form-control"
            id = "inputEmail4"
            value = { this.state.price }
            onChange = {
                (event) => this.handleOnChange(event, "price") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Version { " " } <
            /label>{" "} <
            input type = "email"
            className = "form-control"
            id = "inputEmail4"
            value = { this.state.version }
            onChange = {
                (event) => this.handleOnChange(event, "version") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Version { " " } <
            /label>{" "} <
            input type = "email"
            className = "form-control"
            id = "inputEmail4"
            value = { this.state.color }
            onChange = {
                (event) => this.handleOnChange(event, "color") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            label
            for = "inputEmail4"
            className = "form-label" >
            Image { " " } <
            /label>{" "} <
            input className = "form-control"
            type = "file"
            id = "formFile"
            onChange = {
                (event) => this.handleOnChangeImage(event) }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6"
            style = {
                {
                    backgroundImage: `url(${this.state.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "250px",
                    border: "1px solid purple",
                }
            } >
            < /div>{" "} <
            div className = "col-md-12" >
            <
            div className = "btn btn-primary"
            onClick = { this.handleOnClick } >
            Tạo dữ liệu { " " } <
            /div>{" "} <
            /div>{" "} <
            /form>{" "} <
            div className = "h4 bg-light text-secondary fw-lighter mt-5" > { " " }
            Table car { " " } <
            /div>{" "} <
            table class = "table" >
            <
            thead >
            <
            tr >
            <
            th scope = "id" > Id < /th> <th scope="col"> Name </th > { " " } <
            th scope = "id" > Price < /th> <th scope="col"> Version </th > { " " } <
            th scope = "col" > Color < /th> <th scope="col"> Image </th > { " " } <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { " " } {
                cars &&
                    cars.length > 0 &&
                    cars.map((car, index) => {
                        return ( <
                            tr >
                            <
                            td > { car.id } < /td> <td> {car.name} </td > { " " } <
                            td > { car.price } < /td> <td> {car.version} </td > { " " } <
                            td > { car.color } < /td>{" "} <
                            td style = {
                                {
                                    backgroundColor: "#ddd",
                                    backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                            car.image
                          )})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    height: "120px",
                                }
                            } >
                            < /td>{" "} <
                            /tr>
                        );
                    })
            } { " " } <
            /tbody>{" "} <
            /table>{" "} <
            /div>{" "} <
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(CarManage);