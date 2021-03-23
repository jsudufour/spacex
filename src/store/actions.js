import {
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_DRAGONS_REQUEST,
  FETCH_DRAGONS_SUCCESS,
  FETCH_SPACECRAFTS_FAIL,
  FETCH_ROCKET_DETAILS_REQUEST,
  FETCH_ROCKET_DETAILS_SUCCESS,
  FETCH_DRAGON_DETAILS_REQUEST,
  FETCH_DRAGON_DETAILS_SUCCESS,
  FETCH_SPACECRAFT_DETAILS_FAIL,
} from "./constants";
import {
  makeRequest,
  makeRequestWithParams,
  getRocketsUrl,
  getDragonsUrl,
  getOneRocketUrl,
  getOneDragonUrl,
} from "../api";

export const fetchRocketsRequest = () => (dispatch) => {
  dispatch({ type: FETCH_ROCKETS_REQUEST });

  const url = getRocketsUrl();

  makeRequest(dispatch, url, FETCH_ROCKETS_SUCCESS, FETCH_SPACECRAFTS_FAIL);
};

export const fetchDragonsRequest = () => (dispatch) => {
  dispatch({ type: FETCH_DRAGONS_REQUEST });

  const url = getDragonsUrl();

  makeRequest(dispatch, url, FETCH_DRAGONS_SUCCESS, FETCH_SPACECRAFTS_FAIL);
};

export const fetchRocketDetailsRequest = (id, spacecraftType) => (dispatch) => {
  dispatch({ type: FETCH_ROCKET_DETAILS_REQUEST });

  const url = getOneRocketUrl(id);

  makeRequestWithParams(
    dispatch,
    url,
    FETCH_ROCKET_DETAILS_SUCCESS,
    FETCH_SPACECRAFT_DETAILS_FAIL,
    spacecraftType
  );
};

export const fetchDragonDetailsRequest = (id, spacecraftType) => (dispatch) => {
  dispatch({ type: FETCH_DRAGON_DETAILS_REQUEST });

  const url = getOneDragonUrl(id);

  makeRequestWithParams(
    dispatch,
    url,
    FETCH_DRAGON_DETAILS_SUCCESS,
    FETCH_SPACECRAFT_DETAILS_FAIL,
    spacecraftType
  );
};
