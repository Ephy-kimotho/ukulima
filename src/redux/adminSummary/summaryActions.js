import {
  SUMMARY_REQUESTING,
  SUMMARY_ON_SUCCESS,
  SUMMARY_ON_ERROR,
  DEV_URL,
} from "../../constants";
import axios from "axios";

/*---------- ACTION CREATORS FOR ADMIN SUMMARY ---------- */
export const summaryRequesting = () => {
  return {
    type: SUMMARY_REQUESTING,
  };
};
export const summaryOnSuccess = (summary) => {
  return {
    type: SUMMARY_ON_SUCCESS,
    payload: summary,
  };
};
export const summaryOnError = (error) => {
  return {
    type: SUMMARY_ON_ERROR,
    payload: error,
  };
};

/*---------- ASYNC ACTION FOR ADMIN SUMMARY ---------- */
export const getSummary = (token) => {
  return async (dispatch) => {
    dispatch(summaryRequesting());
    try {
      const response = await axios.get(`${DEV_URL}/admin/summary`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(summaryOnSuccess(response.data));
    } catch (error) {
      dispatch(summaryOnError(error.message));
    }
  };
};
