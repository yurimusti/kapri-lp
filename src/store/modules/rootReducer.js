import { combineReducers } from "redux";

import auth from "./auth/reducer";
import utilities from "./utilities/reducer";

export default combineReducers({
  auth,
  utilities
});
