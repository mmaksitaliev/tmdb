import request from "../api";

export const asyncTask = store => done => options => {
  const { method, url, payload } = options;

  return request(method, url, payload).then(
    response => done(null, response),
    error => done(error, null)
  );
};
