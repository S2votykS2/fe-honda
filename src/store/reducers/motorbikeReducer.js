import actionTypes from "../actions/actionTypes";

const initialState = {
  motorbikes: [],
  introMotorbikes: [],
  typeMotorbikes: [],
  infoMotorbikes: [],
  accessories: [],
};

const motorbikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOTORBIKE_SUCCESS:
      state.motorbikes = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_MOTORBIKE_FAILED:
      state.motorbikes = [];
      return {
        ...state,
      };

    case actionTypes.GET_INTRO_MOTORBIKE_SUCCESS:
      state.introMotorbikes = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_INTRO_MOTORBIKE_FAILED:
      state.introMotorbikes = [];
      return {
        ...state,
      };

    case actionTypes.GET_TYPE_MOTORBIKE_SUCCESS:
      state.typeMotorbikes = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_TYPE_MOTORBIKE_FAILED:
      state.typeMotorbikes = [];
      return {
        ...state,
      };
    case actionTypes.GET_INFO_MOTORBIKE_SUCCESS:
      state.infoMotorbikes = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_INFO_MOTORBIKE_FAILED:
      state.infoMotorbikes = [];
      return {
        ...state,
      };
    case actionTypes.GET_ACCESSORY_MOTORBIKE_SUCCESS:
      state.accessories = action.data;
      return {
        ...state,
      };
    case actionTypes.GET_ACCESSORY_MOTORBIKE_FAILED:
      state.accessories = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default motorbikeReducer;
