import { combineReducers } from "redux";
import user from "./user/reducer";
import users from "./users/reducer";

const rootReducer = combineReducers({
  user: user,
  users: users,
});

export default rootReducer;
