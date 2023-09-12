import axios from "axios";

let getAllcodeType = (type) => {
  return axios.get(`http://localhost:8888/api/allcode-type?type=${type}`, {
    type,
  });
};

let createNewUser = (dataInput) => {
  return axios.post(`http://localhost:8888/api/create-new-user`, {
    // data: {
    email: dataInput.email,
    password: dataInput.password,
    firstName: dataInput.firstName,
    lastName: dataInput.lastName,
    gender: dataInput.gender,
    address: dataInput.address,
    phoneNumber: dataInput.phoneNumber,
    role: dataInput.role,
    avatar: dataInput.avatar,
    // },
  });
};

let getAllUsers = () => {
  return axios.get("http://localhost:8888/api/get-all-users");
};

let DeleteUser = (userId) => {
  return axios.delete(`http://localhost:8888/api/delete-user?id=${userId}`, {
    userId,
  });
};

export { getAllcodeType, createNewUser, getAllUsers, DeleteUser };
