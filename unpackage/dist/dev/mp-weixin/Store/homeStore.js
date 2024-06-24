"use strict";
const common_vendor = require("../common/vendor.js");
const Service_Home = require("../Service/Home.js");
const UseHomeStore = common_vendor.defineStore("homeStore", {
  state: () => {
    return {
      SwiperListData: [],
      isShowTost: false,
      isShowLoading: false
    };
  },
  actions: {
    async FetchgetHomeSwiperListData() {
      const response = await Service_Home.getHomeSwiperListData();
      console.log("数据来了", response);
    }
  }
});
exports.UseHomeStore = UseHomeStore;
