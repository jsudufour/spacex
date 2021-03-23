import { combineReducers } from "redux";
import {
  rockets,
  dragons,
  currentSpacecraft,
  isLoading,
  hasError,
} from "./store/reducers";

export const rootReducer = combineReducers({
  rockets,
  dragons,
  currentSpacecraft,
  isLoading,
  hasError,
});
