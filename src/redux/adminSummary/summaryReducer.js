import {
  SUMMARY_REQUESTING,
  SUMMARY_ON_ERROR,
  SUMMARY_ON_SUCCESS,
} from "../../constants";

/* Define summary initial state */
const initialState = {
  summary: null,
  loading: false,
  error: null,
};

/*---------- REDUCER FOR ADMIN SUMMARY ----------*/
export const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUMMARY_REQUESTING:
      return {
        ...state,
        loading: true,
      };
    case SUMMARY_ON_SUCCESS:
      return {
        ...state,
        loading: false,
        summary: action.payload,
      };
    case SUMMARY_ON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
