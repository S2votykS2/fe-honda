import React, { Component } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import * as actions from "../../../../../store/actions";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import DatePicker from "react-datepicker";
import Moment from "react-moment";
import "react-datepicker/dist/react-datepicker.css";
import { bookTryDrive } from "../../../../../services/carService";
import { getAllCars } from "../../../../../services/carService";
import { getAllcodeType } from "../../../../../services/systemService";

class TryDrive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            age: "",
            email: "",
            phoneNumber: "",
            date: "",
            city1: "",
            car: "",
            city2: "",
            agency: "",
            cars: [],
            genders: [],
        };
    }

    async componentDidMount() {
        let cars = await getAllCars("ALL_SPECIFIC");
        if (cars.data && cars.data.code === 0) {
            this.setState({
                cars: cars.data.data,
            });
        }
        let genders = await getAllcodeType("GENDER");
        if (genders.data && genders.data.code === 0) {
            this.setState({
                genders: genders.data.data,
            });
        }
    }
    componentDidUpdate(prevProps, prevState, snapShot) {}

    handleOnChange = (event, id) => {
        let copyState = {...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };
    checkValid = () => {
        let datas = [
            this.state.name,
            this.state.gender,
            this.state.age,
            this.state.email,
            this.state.phoneNumber,
            this.state.date,
            this.state.city1,
            this.state.car,
            this.state.city2,
            this.state.agency,
        ];
        let isValid = true;
        for (let i = 0; i < datas.length; i++) {
            if (datas[i] === "") {
                isValid = false;
                alert(`Missing required parameters`);
                break;
            }
        }
        return isValid;
    };

    handleClick = async() => {
        console.log("check state", this.state);
        let isValid = this.checkValid();
        if (isValid === false) {
            return;
        }
        let datas = {
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            date: this.state.date,
            city1: this.state.city1,
            car: this.state.car,
            city2: this.state.city2,
            agency: this.state.agency,
        };
        let response = await bookTryDrive(datas);
        if (response.data && response.data.code === 0) {
            this.setState({
                name: "",
                gender: "",
                age: "",
                email: "",
                phoneNumber: "",
                date: "",
                city1: "",
                car: "",
                city2: "",
                agency: "",
            });
            alert("Create success Booking Try Drive Car");
        } else {
            alert(response.data.message);
        }
    };
    handleOnChangeDate = (date) => {
        this.setState({
            date: date,
        });
    };
    render() {
        let { genders, cars } = this.state;
        const startDate = new Date();
        return ( <
            React.Fragment >
            <
            Scrollbars style = {
                { width: "100vw", height: "100vh" } } >
            <
            Header / >
            <
            div className = "slider"
            style = {
                {
                    backgroundImage: "url(https://www.honda.com.vn/images/banner-du-toan-chi-phi.jpg)",
                    backgroundRepeate: "no-repeat",
                    backgroundSize: "contain",
                    height: "460px",
                }
            } >
            < /div>{" "} <
            div className = "container mt-5" >
            <
            div className = "content" >
            <
            div className = "title"
            style = {
                {
                    color: "#cc0000",
                    fontWeight: "700",
                    fontSize: "32px",
                }
            } >
            { " " }
            ĐĂNG KÝ LÁI THỬ { " " } <
            /div>{" "} <
            form className = "row g-3 p-4" >
            <
            label
            for = "inputEmail4"
            className = "form-label fst-italic" >
            Xin vui lòng điền đầy đủ thông tin bên dưới { " " } <
            /label>{" "} <
            div className = "col-md-6 my-4" >
            <
            input className = "form-control form-control-lg p-3"
            id = "inputEmail4"
            value = { this.state.name }
            onChange = {
                (event) => this.handleOnChange(event, "name") }
            placeholder = "Tên khách hàng" /
            > { " " } <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            select class = "form-select form-select-lg p-3"
            // aria-label=".form-select-lg example"
            value = { this.state.gender }
            onChange = {
                (event) => this.handleOnChange(event, "gender") } >
            <
            option selected > Giới tính < /option>{" "} {
                genders &&
                    genders.length > 0 &&
                    genders.map((gender, index) => {
                        return ( <
                            option value = { gender.valueVi } > { " " } { gender.valueVi } { " " } <
                            /option>
                        );
                    })
            } <
            /select>{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "number"
            className = "form-control form-control-lg p-3 "
            id = "inputEmail4"
            value = { this.state.age }
            placeholder = "Tuổi"
            onChange = {
                (event) => this.handleOnChange(event, "age") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "email"
            className = "form-control form-control-lg p-3"
            id = "inputEmail4"
            value = { this.state.email }
            placeholder = "Email"
            // required
            onChange = {
                (event) => this.handleOnChange(event, "email") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "email"
            className = "form-control form-control-lg p-3"
            id = "inputEmail4"
            value = { this.state.phoneNumber }
            placeholder = "Số điện thoại"
            onChange = {
                (event) =>
                this.handleOnChange(event, "phoneNumber")
            }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            span class = "input-group-text"
            id = "basic-addon1" > { " " }
            Chọn ngày đặt lịch { " " } <
            /span>{" "} <
            DatePicker className = "form-control form-control-lg p-3"
            selected = { this.state.date }
            onChange = {
                (date) => this.handleOnChangeDate(date) }
            // showTimeSelect
            value = { this.state.date }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "email"
            className = "form-control form-control-lg p-3"
            id = "inputEmail4"
            value = { this.state.city1 }
            placeholder = "Tỉnh thành phố nơi sinh sống"
            onChange = {
                (event) => this.handleOnChange(event, "city1") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            select class = "form-select form-select-lg p-3"
            // aria-label=".form-select-lg example"
            value = { this.state.car }
            onChange = {
                (event) => this.handleOnChange(event, "car") } >
            <
            option selected > Mẫu xe đăng ký lái thử < /option>{" "} {
                cars &&
                    cars.length > 0 &&
                    cars.map((car, index) => {
                        return <option value = { car.name } > { car.name } < /option>;
                    })
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "email"
            className = "form-control form-control-lg p-3 "
            id = "inputEmail4"
            value = { this.state.city2 }
            placeholder = "Tỉnh thành phố mong muốn lái thử"
            onChange = {
                (event) => this.handleOnChange(event, "city2") }
            />{" "} <
            /div>{" "} <
            div className = "col-md-6 my-4" >
            <
            input type = "email"
            className = "form-control form-control-lg p-3"
            id = "inputEmail4"
            value = { this.state.agency }
            placeholder = "Đại lý đăng ký lái thử"
            onChange = {
                (event) => this.handleOnChange(event, "agency") }
            />{" "} <
            /div>{" "} <
            /form>{" "} <
            /div>{" "} <
            div className = "mb-2"
            style = {
                { color: "#cc0000" } } >
            Ghi chú: Chương trình lái thử xe chỉ dành cho những khách hàng đã có bằng lái xe ô tô. { " " } <
            /div>{" "} <
            div className = "mb-5"
            style = {
                { color: "#cc0000" } } >
            Bằng việc cung cấp thông tin cho Honda Việt Nam, Quý khách đồng ý với Chính Sách Quyền Riêng Tư của Honda Việt Nam tại website này,
            theo đó cho phép chúng tôi và các bên liên quan xử lý dữ liệu cá nhân của Quý khách cho mục đích liên hệ mời tham gia lái thử.Nếu Quý khách không đồng ý hoặc có ý kiến nào khác, vui lòng thông tin lại với chúng tôi { " " } <
            /div>{" "} <
            div className = "btn btn-secondary"
            style = {
                {
                    borderRadius: "20px",
                    padding: "5px 10px",
                    lineHeight: "20px",
                }
            }
            onClick = { this.handleClick } >
            GỬI ĐĂNG KÝ { " " } <
            /div>{" "} <
            /div>{" "} <
            Footer / >
            <
            /Scrollbars>{" "} <
            /React.Fragment>
        );
    }
}
export default TryDrive;