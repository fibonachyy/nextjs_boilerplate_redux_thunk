import { Api } from "@/services/global";
import { notification } from "antd";
import fetchIntercept from "fetch-intercept";

import { validateLocalData, logOut } from "@/services/comonFunction";

const baseUrl = "http://192.168.19.32:1337";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  405: "请求方法不被允许。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};
async function headerHandler(url: string, config: any) {
  try {
    const userDataString = localStorage.getItem("userDTO");
    const validateData = await validateLocalData(userDataString);
    if (validateData) {
      const { accessToken } = validateData;
      config.headers.Authorization = `bearer ${accessToken}`;
    }
  } catch (e) {
    console.log(e);
  }
  return [url, config];
}
fetchIntercept.register({
  request: async function (url, config) {
    const [returnUrl, changeConfig] = await headerHandler(url, config);
    return [returnUrl, changeConfig];
    /* -------------------------------------------------------------------------- */
    /*                      End's check url and pars configs                      */
    /* -------------------------------------------------------------------------- */
  },
  requestError: function (error) {
    return Promise.reject(error);
  },
  response: function (response) {
    if (response.status === 401 || response.status === 403) {
      notification.error({
        description: codeMessage[response.status],
        message: "网络异常",
      });
    }
    return response;
  },

  responseError: function (error) {
    return Promise.reject(error);
  },
});
const clientApi = new Api({
  baseUrl,
});
export default clientApi;
