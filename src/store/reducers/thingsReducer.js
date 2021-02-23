import { FETCH_THING } from "../actions/types";

const initialState = {
  things: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THING:
      return {
        ...state,
        things: action.payload.things,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
