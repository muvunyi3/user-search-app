import { combineReducers } from "redux";
import userReducer from "./userReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
