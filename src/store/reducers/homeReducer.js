import actionTypes from "../actions/actionTypes";

const initialState = {
  sliders: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SLIDER_SUCCESS:
      state.sliders = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_SLIDER_FAILED:
      state.sliders = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default homeReducer;
