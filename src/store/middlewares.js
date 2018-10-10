import request from "../api";

export const asyncTask = store => done => options => {
  const { method, url, payload } = options;

  return request(method, url, payload).then(
    response => done(null, response),
    error => done(error, null)
  );
};

export const moviesByPage = function() {
  return done => (action, error, response) => {
    const { payload, meta } = action;

    const updateAction = {
      ...action,
      meta: { ...meta, url: `${meta.url}/${payload.path}` },
    };
    return done(updateAction, error, response);
  };
};

moviesByPage.applyPoint = "onRequest";
