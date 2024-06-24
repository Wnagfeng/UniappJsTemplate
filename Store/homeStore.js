// stores/counter.js
import { defineStore } from "pinia";
import { getHomeSwiperListData } from "../Service/Home";
export const UseHomeStore = defineStore("homeStore", {
  state: () => {
    return {
      SwiperListData: [],
      isShowTost: false,
      isShowLoading: false,
    };
  },
  actions: {
    async FetchgetHomeSwiperListData() {
      const response = await getHomeSwiperListData();
      console.log("数据来了", response);
    },
  },
});
