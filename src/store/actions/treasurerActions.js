import { FETCH_TREASUER } from "../actions/types";
// Treasuer
// TREASUER
import instance from "./instance";

export const fetchTreasuer = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/treasuers");
      dispatch({
        type: FETCH_TREASUER,
        payload: { treasuers: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
