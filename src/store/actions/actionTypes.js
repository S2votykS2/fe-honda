const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
    SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",

    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

    //admin
    ADMIN_LOGIN_SUCCESS: "ADMIN_LOGIN_SUCCESS",
    ADMIN_LOGIN_FAIL: "ADMIN_LOGIN_FAIL",
    PROCESS_LOGOUT: "PROCESS_LOGOUT",

    //user
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",

    // home
    GET_SLIDER_SUCCESS: "GET_SLIDER_SUCCESS",
    GET_SLIDER_FAILED: "GET_SLIDER_FAILED",

    // motorbike
    GET_MOTORBIKE_SUCCESS: "GET_MOTORBIKE_SUCCESS",
    GET_MOTORBIKE_FAILED: "GET_MOTORBIKE_FAILED",

    GET_INTRO_MOTORBIKE_SUCCESS: "GET_INTRO_MOTORBIKE_SUCCESS",
    GET_INTRO_MOTORBIKE_FAILED: "GET_INTRO_MOTORBIKE_FAILED",

    GET_TYPE_MOTORBIKE_SUCCESS: "GET_TYPE_MOTORBIKE_SUCCESS",
    GET_TYPE_MOTORBIKE_FAILED: "GET_TYPE_MOTORBIKE_FAILED",

    GET_INFO_MOTORBIKE_SUCCESS: "GET_INFO_MOTORBIKE_SUCCESS",
    GET_INFO_MOTORBIKE_FAILED: "GET_INFO_MOTORBIKE_FAILED",

    GET_ACCESSORY_MOTORBIKE_SUCCESS: "GET_ACCESSORY_MOTORBIKE_SUCCESS",
    GET_ACCESSORY_MOTORBIKE_FAILED: "GET_ACCESSORY_MOTORBIKE_FAILED",

    // Car
    GET_ALL_CARS_SUCCESS: "GET_ALL_CARS_SUCCESS",
    GET_ALL_CARS_FAILED: "GET_ALL_CARS_FAILED",

    GET_EXTERIOR_CARS_SUCCESS: "GET_EXTERIOR_CARS_SUCCESS",
    GET_EXTERIOR_CARS_FAILED: "GET_EXTERIOR_CARS_FAILED",
    GET_INTERIOR_CARS_SUCCESS: "GET_INTERIOR_CARS_SUCCESS",
    GET_INTERIOR_CARS_FAILED: "GET_INTERIOR_CARS_FAILED",
    GET_OPERATION_CARS_SUCCESS: "GET_OPERATION_CARS_SUCCESS",
    GET_OPERATION_CARS_FAILED: "GET_OPERATION_CARS_FAILED",
    GET_SAFE_CARS_SUCCESS: "GET_SAFE_CARS_SUCCESS",
    GET_SAFE_CARS_FAILED: "GET_SAFE_CARS_FAILED",
    GET_ACCESSORY_CARS_SUCCESS: "GET_ACCESSORY_CARS_SUCCESS",
    GET_ACCESSORY_CARS_FAILED: "GET_ACCESSORY_CARS_FAILED",
    GET_LIBRARY_CARS_SUCCESS: "GET_LIBRARY_CARS_SUCCESS",
    GET_LIBRARY_CARS_FAILED: "GET_LIBRARY_CARS_FAILED",
    GET_COLOR_CARS_SUCCESS: "GET_COLOR_CARS_SUCCESS",
    GET_COLOR_CARS_FAILED: "GET_COLOR_CARS_FAILED",
});

export default actionTypes;