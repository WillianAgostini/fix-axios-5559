import axios, { AxiosRequestConfig, CancelToken } from "axios";

function sayHello(cancelToken?: CancelToken | undefined) {

  let url_ = '';

  let options: AxiosRequestConfig = {
    method: 'GET',
    url: url_,
    headers: {
      Accept: "application/json"
    },
    cancelToken
  } 

}