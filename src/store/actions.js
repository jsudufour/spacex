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
import { getRocketsUrl, getDragonsUrl, makeRequest } from "../api";

export const fetchRocketsRequest = () => (dispatch) => {
  dispatch({ type: FETCH_ROCKETS_REQUEST });

  const url = getRocketsUrl();

  makeRequest(dispatch, url, FETCH_ROCKETS_SUCCESS, FETCH_SPACECRAFTS_FAIL);
};

export const fetchDragonsRequest = (limit, offset) => (dispatch) => {
  dispatch({ type: FETCH_DRAGONS_REQUEST });

  const url = getDragonsUrl(limit, offset);

  makeRequest(dispatch, url, FETCH_DRAGONS_SUCCESS, FETCH_SPACECRAFTS_FAIL);
};

export const fetchSpacecraftsFail = (error) => ({
  type: FETCH_SPACECRAFTS_FAIL,
  payload: { error },
});

export const fetchRocketDetailsRequest = (id) => ({
  type: FETCH_ROCKET_DETAILS_REQUEST,
  payload: { id },
});

export const fetchRocketDetailsSucess = (data) => ({
  type: FETCH_ROCKET_DETAILS_SUCCESS,
  payload: { data },
});

export const fetchDragonDetailsRequest = (id) => ({
  type: FETCH_DRAGON_DETAILS_REQUEST,
  payload: { id },
});

export const fetchDragonDetailsSuccess = (data) => ({
  type: FETCH_DRAGON_DETAILS_SUCCESS,
  payload: { data },
});

export const fetchSpacecraftDetailsFail = (error) => ({
  type: FETCH_SPACECRAFT_DETAILS_FAIL,
  payload: { error },
});
