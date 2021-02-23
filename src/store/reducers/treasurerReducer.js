// Treasuer
import { FETCH_TREASUER } from "../actions/types";

const initialState = {
  treasuer: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TREASUER:
      return {
        ...state,
        treasuer: action.payload.treasuer,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
