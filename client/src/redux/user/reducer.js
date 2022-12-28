import { UPDATE_USER_PROFILE, INITIAL_USER_PROFILE } from "../types";

let initialState = {
  name: "",
  dob: "",
  gender: "Male",
  sports: [],
  about: "",
  location: "",
  team: "",
  interests: "",
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case INITIAL_USER_PROFILE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
