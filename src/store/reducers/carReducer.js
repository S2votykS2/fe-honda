import actionTypes from "../actions/actionTypes";

const initialState = {
    cars: [],
    exteriors: [],
    interiors: [],
    operations: [],
    safes: [],
    accessories: [],
    libraries: [],
    colors: [],
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CARS_SUCCESS:
            state.cars = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_ALL_CARS_FAILED:
            state.cars = [];
            return {
                ...state,
            };

        case actionTypes.GET_EXTERIOR_CARS_SUCCESS:
            state.exteriors = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_EXTERIOR_CARS_FAILED:
            state.exteriors = [];
            return {
                ...state,
            };
        case actionTypes.GET_INTERIOR_CARS_SUCCESS:
            state.interiors = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_INTERIOR_CARS_FAILED:
            state.interiors = [];
            return {
                ...state,
            };
        case actionTypes.GET_OPERATION_CARS_SUCCESS:
            state.operations = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_OPERATION_CARS_FAILED:
            state.operations = [];
            return {
                ...state,
            };
        case actionTypes.GET_SAFE_CARS_SUCCESS:
            state.safes = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_SAFE_CARS_FAILED:
            state.safes = [];
            return {
                ...state,
            };
        case actionTypes.GET_ACCESSORY_CARS_FAILED:
            state.accessories = [];
            return {
                ...state,
            };
        case actionTypes.GET_ACCESSORY_CARS_SUCCESS:
            state.accessories = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_LIBRARY_CARS_FAILED:
            state.libraries = [];
            return {
                ...state,
            };
        case actionTypes.GET_LIBRARY_CARS_SUCCESS:
            state.libraries = action.data;
            return {
                ...state,
            };
        case actionTypes.GET_COLOR_CARS_FAILED:
            state.colors = [];
            return {
                ...state,
            };
        case actionTypes.GET_COLOR_CARS_SUCCESS:
            state.colors = action.data;
            return {
                ...state,
            };


        default:
            return state;
    }
};

export default carReducer;