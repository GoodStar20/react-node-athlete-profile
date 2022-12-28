import { toast } from "react-toastify";
import { UPDATE_USER_PROFILE, INITIAL_USER_PROFILE } from "../types";
import { createUserProfile, editUserProfile } from "../../services/api";

export const updateProfile = (profile) => (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE, payload: profile });
};

export const initalProfile = () => (dispatch) => {
  dispatch({ type: INITIAL_USER_PROFILE });
};

export const submitProfile = () => async (dispatch, getState) => {
  const { user } = getState();

  const result = await createUserProfile(user);
  if (result) {
    toast.success("Created successfully");
  }
};

export const editProfile = (id) => async (dispatch, getState) => {
  const { user } = getState();

  const result = await editUserProfile(user, id);
  if (result) {
    toast.success("Updated successfully");
  }
};
