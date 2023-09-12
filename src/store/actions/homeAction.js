import actionTypes from "./actionTypes";
import { getSliders } from "../../services/homeService";

export const fetchGetSlider = (typeInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getSliders(typeInput);
      console.log("Check res", res);
      if (res && res.data.code === 0) {
        dispatch(fetchGetSliderSuccess(res.data.slider));
      } else {
        dispatch(fetchGetSliderFailed());
      }
    } catch (e) {
      dispatch(fetchGetSliderFailed());
      console.log("FetchPositionStart error", e);
    }
  };
};
export const fetchGetSliderSuccess = (slides) => ({
  type: actionTypes.GET_SLIDER_SUCCESS,
  data: slides,
});
export const fetchGetSliderFailed = () => ({
  type: actionTypes.GET_SLIDER_FAILED,
});
