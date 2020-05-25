<template>
  <div
    class="live-card"
    @click="cardClick"
    :style="{background: 'url('+obj.enroll_head_image+') no-repeat', backgroundSize: 'cover'}"
  >
    <div class="status-wrapper">
      <!-- 未开始 -->
      <div class="status status-not-start" v-if="obj.live_state == 5"></div>
      <!-- 直播中 -->
      <div class="status status-progress" v-if="obj.live_state == 1"></div>
      <!-- 已结束 -->
      <div class="status status-end" v-if="obj.live_state == 2  || obj.live_state == 3"></div>
    </div>
    <div class="hot" v-if="obj.hot.length > 0">
      <img
        src="https://yxs-web.oss-cn-beijing.aliyuncs.com/72f40c02822f1d567c323ae367c17dae.png"
        alt
      />
      <span>{{obj.hot}}</span>
    </div>
    <div class="info">
      <div class="time">
        <img
          src="https://yxs-web.oss-cn-beijing.aliyuncs.com/17cb4f64498bea25d04fcd660dd34e10.png"
          alt
        />
        <span>{{obj.start_time}}</span>
      </div>
      <div class="title">{{obj.title}}</div>
      <div class="author">
        <span>{{obj.anchor_name}}</span>
        {{obj.anchor_position}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hd-live",
  props: {
    obj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    cardClick() {
      // 待开始、直播中
      if (this.obj.live_state === 1 || this.obj.live_state === 5) {
        window.location.href = this.obj.page_url;
      }
      // 回放、结束
      if (this.obj.live_state === 2 || this.obj.live_state === 3) {
        this.$emit("on-end-click");
      }
    }
  }
};
</script>
<style lang="scss">
.live-card {
  width: 100%;
  height: 140px;
  border-radius: 4px;
  position: relative;
  // background: rgb(192, 192, 192);

  .status-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 52px;
    height: 20px;

    .status {
      width: 100%;
      height: 100%;
    }

    .status-not-start {
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/e19091fbd1bd59877af93bae44985cbb.png)
        no-repeat;
      background-size: contain;
    }

    .status-progress {
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/2ebf5422439af7b81970abff04f91483.png)
        no-repeat;
      background-size: contain;
    }

    .status-end {
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/b4eb5ee0bbe9f815222fec74c8c53dac.png)
        no-repeat;
      background-size: contain;
    }
  }

  .hot {
    position: absolute;
    top: 0px;
    right: 4px;

    img {
      width: 8px;
      height: 11px;
      vertical-align: middle;
      display: inline-block;
    }

    span {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: rgb(255, 255, 255);
    }
  }

  .info {
    width: 100%;
    position: absolute;
    bottom: 4px;
    left: 0;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    font-family: PingFangSC-Medium;
    color: rgb(255, 255, 255);

    .time {
      img {
        display: inline-block;
        vertical-align: middle;
        width: 16px;
        height: 16px;
      }

      span {
        font-size: 12px;
      }
    }

    .title {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .author {
      font-size: 12px;
      font-family: PingFangSC-Light;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      span {
        font-family: PingFangSC-Medium;
        margin-right: 10px;
      }
    }
  }
}
</style>