<template>
  <view class="HomeWrapper">
    <view class="test1">
      <h1 class="title">测试字体</h1>
    </view>
    <tost v-show="isShowTostValue">
      <template #header> <div class="header">取号提示</div> </template>
      <template #body>
        <div class="body">
          <p class="text">请前往xxxx地区取号</p>
          <p class="text">您的取餐码为</p>
          <img class="code" src="/static/R-C.png" alt="" />
        </div>
      </template>
      <template #controller>
        <div class="controller">
          <button class="button" @click="handelDidShowTost">好的</button>
        </div>
      </template>
    </tost>
    <loading v-show="isShowLoading"></loading>
    <button class="showTostButton" @click="handelShowTost" type="primary">
      展示提示
    </button>
    <button class="showLoadingButton" @click="handelShowLoading" type="primary">
      展示loading动画
    </button>
  </view>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import tost from "../../Components/tost/index";
import loading from "../../Components/loading/index";
import { UseHomeStore } from "../../Store/homeStore";
const homeStore = UseHomeStore();
const { isShowLoading } = storeToRefs(homeStore);
const isShowTostValue = ref(false);
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
  }, 3000);
};
</script>

<style scoped lang="less">
.HomeWrapper {
  width: 100%;
  height: 1000px;
  box-sizing: border-box;
  padding: 30rpx;
  .showTostButton,
  .showLoadingButton {
    margin-top: 30rpx;
    width: 400rpx;
  }

  .test1 {
    width: 100%;
    .title {
      text-align: center;
      font-size: 50rpx;
    }
  }
  .header {
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .text {
      text-align: center;
      font-size: 30rpx;
      margin-top: 15rpx;
    }
    .code {
      width: 300rpx;
      height: 300rpx;
    }
  }
  .controller {
    .button {
      margin-top: 30rpx;
      width: 300rpx;
    }
  }
}
</style>
