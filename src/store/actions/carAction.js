import actionTypes from "./actionTypes";
import {
    getAllCars,
    getExteriorCars,
    getInteriorCars,
    getOperatorCars,
    getSafeCars,
    getAccessoryCars,
    getLibraryCars,
    getColorCars
} from "../../services/carService";

export const fetchGetAllCars = (name) => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCars(name);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch(fetchGetAllCarsSuccess(res.data.data));
            } else {
                dispatch(fetchGetAllCarsFailed());
            }
        } catch (e) {
            dispatch(fetchGetAllCarsFailed());
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetAllCarsSuccess = (data) => ({
    type: actionTypes.GET_ALL_CARS_SUCCESS,
    data: data,
});
export const fetchGetAllCarsFailed = () => ({
    type: actionTypes.GET_ALL_CARS_FAILED,
});

// base-inf
export const fetchGetExteriorCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getExteriorCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_EXTERIOR_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_EXTERIOR_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_EXTERIOR_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetInteriorCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getInteriorCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_INTERIOR_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_INTERIOR_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_INTERIOR_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetOperationCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getOperatorCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_OPERATION_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_OPERATION_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_OPERATION_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetSafeCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getSafeCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_SAFE_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_SAFE_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_SAFE_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetAccessoryCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getAccessoryCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_ACCESSORY_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_ACCESSORY_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_ACCESSORY_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetLibraryCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getLibraryCars(id);
            console.log("Check res", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_LIBRARY_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_LIBRARY_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_LIBRARY_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};
export const fetchGetColorCars = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await getColorCars(id, "ALL");
            console.log("Check resColor", res);
            if (res && res.data.code === 0) {
                dispatch({
                    type: actionTypes.GET_COLOR_CARS_SUCCESS,
                    data: res.data.data,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_COLOR_CARS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_COLOR_CARS_FAILED,
            });
            console.log("FetchPositionStart error", e);
        }
    };
};