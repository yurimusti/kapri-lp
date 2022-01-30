import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import utilities from "./utilities/sagas";

export default function* rootSaga() {
  return yield all([auth, utilities]);
}
