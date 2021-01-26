import * as types from "../types";

export const checkWindowSize = () => (dispatch) => {
  dispatch({
    type: types.CHECK_WINDOW_SIZE,
  });
};
