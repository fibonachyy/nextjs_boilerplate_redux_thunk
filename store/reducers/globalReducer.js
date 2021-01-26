import * as types from "../types";
const initialState = {
  windowSize: 15,
};

export const globalRducer = (state = initialState, action) => {
  try {
    switch (action.type) {
      case types.CHECK_WINDOW_SIZE:
        return { ...state, windowSize: 5 };
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
