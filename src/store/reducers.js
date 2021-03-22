import {
  FETCH_DRAGONS_REQUEST,
  FETCH_DRAGONS_SUCCESS,
  FETCH_DRAGON_DETAILS_REQUEST,
  FETCH_DRAGON_DETAILS_SUCCESS,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKET_DETAILS_REQUEST,
  FETCH_ROCKET_DETAILS_SUCCESS,
  FETCH_SPACECRAFTS_FAIL,
  FETCH_SPACECRAFT_DETAILS_FAIL,
} from "./constants";

export const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const currentRocket = (state = null, action) => {
  switch (action.type) {
    case FETCH_ROCKET_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const dragons = (state = [], action) => {
  switch (action.type) {
    case FETCH_DRAGONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const currentDragon = (state = null, action) => {
  switch (action.type) {
    case FETCH_DRAGON_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:
    case FETCH_DRAGONS_REQUEST:
    case FETCH_ROCKET_DETAILS_REQUEST:
    case FETCH_DRAGON_DETAILS_REQUEST:
      return true;
    case FETCH_ROCKETS_SUCCESS:
    case FETCH_ROCKET_DETAILS_SUCCESS:
    case FETCH_DRAGONS_SUCCESS:
    case FETCH_DRAGON_DETAILS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const hasError = (state = null, action) => {
  switch (action.type) {
    case FETCH_SPACECRAFTS_FAIL:
      return action.payload;
    case FETCH_SPACECRAFT_DETAILS_FAIL:
      return action.payload;
    default:
      return state;
  }
};
