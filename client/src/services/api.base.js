import axios from "axios";

const BASEURL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "content-type": "application/json",
  },
});

async function request({ method = "get", url, params, data }) {
  try {
    const response = await api.request({
      method,
      url,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function get(url, params) {
  return request({
    method: "get",
    url,
    params,
  });
}

export function post(url, data) {
  return request({
    method: "post",
    url,
    data,
  });
}

export function put(url, data) {
  return request({
    method: "put",
    url,
    data,
  });
}

export function remove(url, data) {
  return request({
    method: "delete",
    url,
    data,
  });
}
