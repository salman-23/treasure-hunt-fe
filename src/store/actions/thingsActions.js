import { FETCH_THING } from "../actions/types";

import instance from "./instance";

export const fetchThings = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/things");
      dispatch({
        type: FETCH_THING,
        payload: { things: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
