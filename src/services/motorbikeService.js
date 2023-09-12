import axios from "axios";
let createNewMotorbike = (data) => {
  return axios.post("http://localhost:8888/api/create-new-motorbike", {
    name: data.name,
    price: data.price,
    typeId: data.typeId,
    image: data.image,
  });
};

let getMotorbikes = (typeId) => {
  return axios.get(
    `http://localhost:8888/api/get-motorbikes?typeId=${typeId}`,
    {
      typeId,
    }
  );
};

let createNewIntroMotorbike = (data) => {
  return axios.post("http://localhost:8888/api/create-new-intro-motorbike", {
    id: data.id,
    title: data.title,
    markdown: data.markdown,
    html: data.html,
    image: data.image,
  });
};

let getIntroMotorbikes = (typeId) => {
  return axios.get(
    `http://localhost:8888/api/get-intro-motorbikes?id=${typeId}`,
    {
      typeId,
    }
  );
};
let createNewTypeMotorbike = (data) => {
  return axios.post("http://localhost:8888/api/create-new-type-motorbike", {
    id: data.id,
    version: data.version,
    color: data.color,
    price: data.price,
    image: data.image,
  });
};

let getTypeMotorbikes = (typeId) => {
  return axios.get(
    `http://localhost:8888/api/get-type-motorbikes?id=${typeId}`,
    {
      typeId,
    }
  );
};

let createNewInfoMotorbike = (data) => {
  return axios.post("http://localhost:8888/api/create-new-info-motorbike", {
    mtbId: data.mtbId,
    mass: data.mass,
    V1: data.V1,
    a: data.a,
    h1: data.h1,
    h2: data.h2,
    V2: data.V2,
    d: data.d,
    damping1: data.damping1,
    damping2: data.damping2,
    engine: data.engine,
    P: data.P,
    V3: data.V3,
    fuel: data.fuel,
    gear: data.gear,
    transmission: data.transmission,
    starting: data.starting,
    momen: data.momen,
    V4: data.V4,
    dxl: data.dxl,
    epsilon: data.epsilon,
  });
};

let getInfoMotorbikes = (typeId) => {
  return axios.get(
    `http://localhost:8888/api/get-info-motorbikes?id=${typeId}`,
    {
      typeId,
    }
  );
};

let createNewAccessoryMotorbike = (data) => {
  return axios.post(
    "http://localhost:8888/api/create-new-accessory-motorbike",
    {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
    }
  );
};

let getAccessoryMotorbikes = (id) => {
  return axios.get(
    `http://localhost:8888/api/get-accessory-motorbikes?id=${id}`,
    {
      id,
    }
  );
};

let createNewAccessoryItemMotorbike = (data) => {
  return axios.post(
    "http://localhost:8888/api/create-new-accessory-item-motorbike",
    {
      itemId: data.itemId,
      type: data.type,
      price: data.price,
    }
  );
};

let getAccessoryItemMotorbikes = (id) => {
  return axios.get(
    `http://localhost:8888/api/get-accessory-item-motorbikes?id=${id}`,
    {
      id,
    }
  );
};
export {
  createNewMotorbike,
  getMotorbikes,
  createNewIntroMotorbike,
  getIntroMotorbikes,
  createNewTypeMotorbike,
  getTypeMotorbikes,
  createNewInfoMotorbike,
  getInfoMotorbikes,
  createNewAccessoryMotorbike,
  getAccessoryMotorbikes,
  createNewAccessoryItemMotorbike,
  getAccessoryItemMotorbikes,
};
