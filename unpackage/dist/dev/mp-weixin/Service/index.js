"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://meipig.com/api/consumer/miniProgram";
const TIME_OUT = 1e4;
class JoonRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        timeout: TIME_OUT,
        method,
        data: params,
        success: (res) => {
          resolve(res.data);
        },
        fail: reject
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
const JoonRequest$1 = new JoonRequest();
exports.JoonRequest = JoonRequest$1;
