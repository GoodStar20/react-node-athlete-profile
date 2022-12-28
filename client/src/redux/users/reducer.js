import { GET_PROFILES } from "../types";

let initialState = [];
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return action.payload;
    default:
      return state;
  }
};
