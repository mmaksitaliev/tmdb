import { createReducer } from "./index";
import { LOAD_DETAILS_REQUEST, LOAD_DETAILS_RESPONSE } from "../actions";

const INITIAL_STATE = { details: null, loading: false, error: null };

const onRequest = (state, action) => {
  return {
    ...state,
    loading: true,
    details: INITIAL_STATE.details,
    error: INITIAL_STATE.error
  };
};

const onResponse = (state, { details }) => {
  return {
    ...state,
    details,
    loading: INITIAL_STATE.loading,
    error: INITIAL_STATE.error
  };
};

const HANDLERS = {
  [LOAD_DETAILS_REQUEST]: onRequest,
  [LOAD_DETAILS_RESPONSE]: onResponse
};

export default createReducer(INITIAL_STATE, HANDLERS);
