import axios, { AxiosRequestConfig, CancelToken } from "axios";

function sayHello(cancelToken?: CancelToken | undefined) {

    axios.interceptors.request.use(function (config) {
        config.headers.test = 'I am only a header!';
        return config;
      }, null, { synchronous: true });

}