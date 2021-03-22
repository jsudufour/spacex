import { combineReducers } from "redux";
import {
  rockets,
  currentRocket,
  dragons,
  currentDragon,
  isLoading,
  hasError,
} from "./store/reducers";

export const rootReducer = combineReducers({
  rockets,
  currentRocket,
  dragons,
  currentDragon,
  isLoading,
  hasError,
});
