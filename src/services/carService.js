import axios from "axios";

let getAllCars = (name) => {
    return axios.get(`http://localhost:8888/api/get-all-cars?name=${name}`, {
        name,
    });
};

let createNewCar = (data) => {
    return axios.post("http://localhost:8888/api/create-new-car", {
        name: data.name,
        price: data.price,
        version: data.version,
        color: data.color,
        image: data.image,
    });
};
let bookTryDrive = (data) => {
    return axios.post("http://localhost:8888/api/book-try-drive", {
        name: data.name,
        gender: data.gender,
        age: data.age,
        email: data.email,
        phoneNumber: data.phoneNumber,
        date: data.date,
        city1: data.city1,
        car: data.car,
        city2: data.city2,
        agency: data.agency,
    });
};
let postVerifyTryDrive = (email, token) => {
    return axios.post("http://localhost:8888/api/post-verify-try-drive", {
        email,
        token
    });
};

let completeBookTryDrive = (data) => {
    return axios.post("http://localhost:8888/api/complete-booking-try-drive", {
        name: data.name,
        gender: data.gender,
        age: data.age,
        email: data.email,
        phoneNumber: data.phoneNumber,
        date: data.date,
        city1: data.city1,
        car: data.car,
        city2: data.city2,
        agency: data.agency,
        token: data.token,

    });
};

let getBookTryDrives = () => {
    return axios.get("http://localhost:8888/api/get-book-try-drives")
}

// Base Info
let getExteriorCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-exterior-cars?id=${id}`, {
        id,
    });
};

let createExteriorCar = (data) => {
    return axios.post("http://localhost:8888/api/create-exterior-car", {
        carId: data.carId,
        description: data.description,
        image: data.image,
    });
};
let getInteriorCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-interior-cars?id=${id}`, {
        id,
    });
};

let createInteriorCar = (data) => {
    return axios.post("http://localhost:8888/api/create-interior-car", {
        carId: data.carId,
        description: data.description,
        image: data.image,
    });
};
let getOperatorCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-operation-cars?id=${id}`, {
        id,
    });
};

let createOperatorCar = (data) => {
    return axios.post("http://localhost:8888/api/create-operation-car", {
        carId: data.carId,
        description: data.description,
        image: data.image,
    });
};
let getSafeCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-safe-cars?id=${id}`, {
        id,
    });
};

let createSafeCar = (data) => {
    return axios.post("http://localhost:8888/api/create-safe-car", {
        carId: data.carId,
        description: data.description,
        image: data.image,
    });
};
let getAccessoryCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-accessory-cars?id=${id}`, {
        id,
    });
};

let createAccessoryCar = (data) => {
    return axios.post("http://localhost:8888/api/create-accessory-car", {
        carId: data.carId,
        description: data.description,
        image: data.image,
    });
};
let getLibraryCars = (id) => {
    return axios.get(`http://localhost:8888/api/get-library-cars?id=${id}`, {
        id,
    });
};

let createLibraryCar = (data) => {
    return axios.post("http://localhost:8888/api/create-library-car", {
        carId: data.carId,
        image: data.image,
    });
};
let getColorCars = (id, color) => {
    return axios.get(`http://localhost:8888/api/get-color-cars?id=${id}&color=${color}`, {
        carId: id,
        colorName: color,
    });
};

let createColorCar = (data) => {
    return axios.post("http://localhost:8888/api/create-color-car", {
        colorName: data.colorName,
        carId: data.carId,
        image: data.image,
    });
};
export {
    createNewCar,
    getAllCars,
    postVerifyTryDrive,
    bookTryDrive,
    completeBookTryDrive,
    getBookTryDrives,
    getExteriorCars,
    createExteriorCar,
    getInteriorCars,
    createInteriorCar,
    getOperatorCars,
    createOperatorCar,
    getSafeCars,
    createSafeCar,
    getAccessoryCars,
    createAccessoryCar,
    getLibraryCars,
    createLibraryCar,
    getColorCars,
    createColorCar
};