import axios from "axios";

const baseUrl = "https://api.spacexdata.com/v4";

export const getDragonsUrl = (limit, offset) =>
  `${baseUrl}/dragons?limit=${limit}&offset=${offset}`;

export const getOneDragonUrl = (dragonId) => `${baseUrl}/dragons/${dragonId} `;

export const getRocketsUrl = () => `${baseUrl}/rockets`;

export const getOneRocketUrl = (rocketId) => `${baseUrl}/rockets/${rocketId}`;

export const makeRequest = (
  dispatch,
  url,
  successActionType,
  failActionType
) => {
  axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      return dispatch({ type: successActionType, payload: data });
    })
    .catch((error) => {
      return dispatch({ type: failActionType, payload: error });
    });
};
