import { USER_CURRENT_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_CURRENT_TYPES.SET_CURRENT_USER, user);
