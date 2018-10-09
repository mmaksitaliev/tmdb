function getQueryString(params) {
  let esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");
}

export default function request(params) {
  const method = params.method || "GET";
  const headers = params.headers || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  let qs = "";
  let body;

  if (method === "GET") qs = "?" + getQueryString(params.data);
  else body = JSON.stringify(params.data);

  let url = params.url + qs;

  return fetch(url, { method, headers, body }).then(res => res.json());
}

/* export default {
  get: params => request(Object.assign({ method: "GET" }, params)),
  post: params => request(Object.assign({ method: "POST" }, params))
};
 */
