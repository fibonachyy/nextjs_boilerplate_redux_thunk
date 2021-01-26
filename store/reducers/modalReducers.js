import * as types from "../types";
const initialState = {
    stateModal: [false, true],
    modalType: "null",
    modalData: {},
    planModal: ""
};
export const modalReducer = (state = initialState, action) => {
    try {
        switch (action.type) {
            case types.SET_OPEN_MODAL:
                const { modalType, stateModal, modalData } = action.payload;
                return {
                    ...state,
                    stateModal: stateModal,
                    modalType: modalType,
                    modalData: modalData
                };
            case types.SET_CLOSE_MODAL:
                return { ...state, stateModal: [false, true], modalType: null };
            case types.SET_PLAN_MODAL:
                const { modal } = action.payload;
                return { ...state, planModal: modal };
            default:
                return state;
        }
    } catch (e) {
        throw e;
    }
};
