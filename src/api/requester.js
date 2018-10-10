const GET = "GET";
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

function getQueryString(params) {
  let esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");
}

export default function request(params) {
  const method = params.method || GET;
  const headers = params.headers || DEFAULT_HEADERS;
  let qs = "";
  let body;

  if (method === GET) qs = "?" + getQueryString(params.data);
  else body = JSON.stringify(params.data);

  let url = params.url + qs;

  return fetch(url, { method, headers, body }).then(res => res.json());
}
