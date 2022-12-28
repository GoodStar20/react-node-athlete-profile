import { get, post, put } from "./api.base";

// User
export const createUserProfile = (profile) => post("/new", profile);

export const getProfiles = () => get("/");

export const editUserProfile = (profile, id) => put(`/${id}`, profile);
