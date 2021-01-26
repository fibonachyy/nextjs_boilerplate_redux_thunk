import * as types from "../types";
const initialState = {
    token: null,
    user: {},
    isLoggedIn: true,
    login: {},
    enterance: [],
    cart: [],
    navItems: [],
    sidebarItems: [],
    categories: [],
    messages: [],
    transaction: []
};
export const userReducer = (state = initialState, action) => {
    try {
        switch (action.type) {
            case types.SET_LOGIN:
                const { token, userDTO } = action.payload;
                return { ...state, token: token, user: { ...userDTO }, isLoggedIn: true };
            case types.SET_LOGOUT:
                return { ...state, user: {}, token: null, isLoggedIn: false };
            case types.SET_ENTERANCE:
                const { enterance } = action.payload;
                return { ...state, enterance: [...enterance] };
            case types.UPDATE_USER_DATA:
                const { data } = action.payload;
                const { user } = state;
                Object.entries(data).map(([key, vaule]) => {
                    user[key] = vaule;
                });
                return { ...state, user: { ...user } };
            case types.SET_CART:
                const { cartItem } = action.payload;
                return {
                    ...state,
                    cart: cartItem
                };
            case types.LOAD_CART:
                const { cart } = action.payload;
                return {
                    ...state,
                    cart: cart
                };
            case types.REMOVE_CART_ITEM:
                const { updatedCart } = action.payload;
                return { ...state, cart: updatedCart };
            case types.SET_NAV_ITEMS:
                const { navItems } = action.payload;
                return { ...state, navItems };
            case types.SET_SIDEBAR_ITEMS:
                const { sidebarItems } = action.payload;
                return { ...state, sidebarItems };
            case types.SET_CATEGORIES:
                const { categories } = action.payload;
                return { ...state, categories };
            case types.SET_MESSAGES:
                const { messages } = action.payload;
                return { ...state, messages };
            case types.SET_TRANSACTION:
                const { transaction } = action.payload;
                return { ...state, transaction };

            default:
                return state;
        }
    } catch (e) {
        throw e;
    }
};
