const BASE_URL = "https://meipig.com/api/consumer/miniProgram";
const TIME_OUT = 10000;

class JoonRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: BASE_URL + url,
        timeout: TIME_OUT,
        method: method,
        data: params,
        success: (res) => {
          resolve(res.data);
        },
        fail: reject,
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

export default new JoonRequest();
