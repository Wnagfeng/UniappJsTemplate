"use strict";
const Service_index = require("./index.js");
const getHomeSwiperListData = () => {
  return Service_index.JoonRequest.get("/home/getHomeSwiper");
};
exports.getHomeSwiperListData = getHomeSwiperListData;
