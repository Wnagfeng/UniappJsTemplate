import JoonRequest from "./index";
export const getHomeSwiperListData = () => {
  return JoonRequest.get("/home/getHomeSwiper");
};
