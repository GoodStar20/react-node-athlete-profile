import { GET_PROFILES } from "../types";
import { getProfiles } from "../../services/api";

export const getUsers = () => async (dispatch) => {
  const result = await getProfiles();

  dispatch({ type: GET_PROFILES, payload: result });
};
