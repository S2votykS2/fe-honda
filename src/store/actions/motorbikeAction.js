import actionTypes from "./actionTypes";
import {
  getMotorbikes,
  getIntroMotorbikes,
  getTypeMotorbikes,
  getInfoMotorbikes,
  getAccessoryMotorbikes,
} from "../../services/motorbikeService";

export const fetchGetMotorbike = (typeInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getMotorbikes(typeInput);
      console.log("Check res", res);
      if (res && res.data.code === 0) {
        dispatch(fetchGetMotorbikeSuccess(res.data.data));
      } else {
        dispatch(fetchGetMotorbikeFailed());
      }
    } catch (e) {
      dispatch(fetchGetMotorbikeFailed());
      console.log("FetchPositionStart error", e);
    }
  };
};
export const fetchGetMotorbikeSuccess = (data) => ({
  type: actionTypes.GET_MOTORBIKE_SUCCESS,
  data: data,
});
export const fetchGetMotorbikeFailed = () => ({
  type: actionTypes.GET_MOTORBIKE_FAILED,
});

export const fetchGetIntroMotorbike = (idInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getIntroMotorbikes(idInput);
      console.log("Check res", res);
      if (res && res.data.code === 0) {
        dispatch({
          type: actionTypes.GET_INTRO_MOTORBIKE_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_INTRO_MOTORBIKE_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_INTRO_MOTORBIKE_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchGetTypeMotorbike = (idInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getTypeMotorbikes(idInput);
      console.log("Check res", res);
      if (res && res.data.code === 0) {
        dispatch({
          type: actionTypes.GET_TYPE_MOTORBIKE_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_TYPE_MOTORBIKE_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_TYPE_MOTORBIKE_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchGetInfoMotorbike = (idInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getInfoMotorbikes(idInput);
      console.log("Check resInfo", res);
      if (res && res.data.code === 0) {
        dispatch({
          type: actionTypes.GET_INFO_MOTORBIKE_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_INFO_MOTORBIKE_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_INFO_MOTORBIKE_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchGetAccessoryMotorbike = (idInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getAccessoryMotorbikes(idInput);
      console.log("check resAccessory", res);
      if (res && res.data.code === 0) {
        dispatch({
          type: actionTypes.GET_ACCESSORY_MOTORBIKE_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_ACCESSORY_MOTORBIKE_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_ACCESSORY_MOTORBIKE_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};
