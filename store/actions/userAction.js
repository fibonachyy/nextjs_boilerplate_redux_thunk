import * as types from "../types";
import { addItemToCart, getMyCart } from "../../configs/requests";

export const loginUser = (accessToken = "", userDTO = {}) => (dispatch) => {
    dispatch({
        type: types.SET_LOGIN,
        payload: { token: accessToken, userDTO }
    });
};

export const logOutUser = () => (dispatch) => {
    if (window) {
        localStorage.setItem("token", "");
        localStorage.setItem("userDTO", "");
    }
    dispatch({ type: types.SET_LOGOUT });
};

export const setEnterance = (enterance = []) => (dispatch) => {
    dispatch({
        type: types.SET_ENTERANCE,
        payload: { enterance: [...enterance] }
    });
};
export const setEnteranceDetail = (enteranceDetail = []) => (dispatch) => {
    dispatch({
        type: types.SET_ENTERANCE_DETAIL,
        payload: { enteranceDetail: [...enteranceDetail] }
    });
};
export const updateUserData = (data = {}) => (dispatch) => {
    dispatch({
        type: types.UPDATE_USER_DATA,
        payload: { data: data }
    });
};

export const setCartItem = (amount = 0, offerId = 0) => async (dispatch) => {
    try {
        await addItemToCart(amount, offerId);
        const cartItem = await getMyCart();
        dispatch({
            type: types.SET_CART,
            payload: { cartItem }
        });
    } catch (e) {
        console.log(e);
    }
};

export const loadCart = () => async (dispatch) => {
    try {
        const cart = await getMyCart();
        dispatch({
            type: types.LOAD_CART,
            payload: { cart: cart }
        });
    } catch (e) {
        console.log(e);
    }
};
export const removeCartItem = (updatedCart) => (dispatch) => {
    dispatch({
        type: types.REMOVE_CART_ITEM,
        payload: { updatedCart }
    });
};
