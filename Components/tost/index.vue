<template>
  <view class="tostWrapper" @touchmove.stop.prevent="() => {}">
    <view class="content">
      <view class="header">
        <slot name="header"></slot>
      </view>
      <view class="body">
        <slot name="body"></slot>
      </view>
      <view class="controller">
        <slot name="controller"></slot>
      </view>
    </view>
  </view>
</template>

<script setup></script>

<style scoped lang="less">
.tostWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
    // height: 580rpx;
    background-color: aliceblue;
    box-sizing: border-box;
    border-radius: 20rpx;
    padding: 20rpx;
    .header {
      width: 100%;
      text-align: center;
      font-size: 40rpx;
    }
    .body {
    }
    .controller {
    }
  }
}
</style>
