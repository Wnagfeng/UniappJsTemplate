"use strict";
const common_vendor = require("../../common/vendor.js");
const Store_homeStore = require("../../Store/homeStore.js");
require("../../Service/Home.js");
require("../../Service/index.js");
if (!Math) {
  (common_vendor.unref(tost) + common_vendor.unref(loading))();
}
const tost = () => "../../Components/tost/index.js";
const loading = () => "../../Components/loading/index.js";
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    const homeStore = Store_homeStore.UseHomeStore();
    const { isShowLoading } = common_vendor.storeToRefs(homeStore);
    const isShowTostValue = common_vendor.ref(false);
    const handelShowTost = () => {
      console.log(isShowTostValue.value);
      isShowTostValue.value = true;
    };
    const handelDidShowTost = () => {
      isShowTostValue.value = false;
    };
    const handelShowLoading = () => {
      isShowLoading.value = true;
      setTimeout(() => {
        isShowLoading.value = false;
      }, 3e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handelDidShowTost),
        b: isShowTostValue.value,
        c: common_vendor.unref(isShowLoading),
        d: common_vendor.o(handelShowTost),
        e: common_vendor.o(handelShowLoading)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ffebbf4"], ["__file", "C:/Users/Joon/Desktop/MeiPig/pages/Home/Home.vue"]]);
wx.createPage(MiniProgramPage);
