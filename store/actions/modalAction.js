import * as types from "../types";

export const openModal = (
  modalType = "",
  stateModal = [true, false],
  modalData = {}
) => (dispatch) => {
  dispatch({
    type: types.SET_OPEN_MODAL,
    payload: { modalType, stateModal, modalData },
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: types.SET_CLOSE_MODAL,
  });
};

export const setPlanModal = (id) => (dispatch) => {
  dispatch({
    type: types.SET_PLAN_MODAL,
    payload: { modal: id },
  });
};

// dispatch(openModal(nncskjd, cbsd));
