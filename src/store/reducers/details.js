import { createReducers } from "redux-arc";
import { movie } from "../actions";

const INITIAL_STATE = { details: null, loading: false, error: null };

const onRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    details: INITIAL_STATE.details,
    error: INITIAL_STATE.error
  };
};

const onResponse = (state = INITIAL_STATE, { payload }) => {
  return {
    ...state,
    details: payload,
    loading: INITIAL_STATE.loading,
    error: INITIAL_STATE.error
  };
};

const HANDLERS = {
  [movie.types.LOAD_DETAILS.REQUEST]: onRequest,
  [movie.types.LOAD_DETAILS.RESPONSE]: onResponse
};

export default createReducers(INITIAL_STATE, HANDLERS);
