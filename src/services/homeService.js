import axios from "axios";

let getSliders = (type) => {
  return axios.get(`http://localhost:8888/api/get-sliders?type=${type}`, {
    type: type,
  });
};
let createNewSlider = (image, type) => {
  return axios.post("http://localhost:8888/api/create-new-slider", {
    image: image,
    type: type,
  });
};

export { getSliders, createNewSlider };
