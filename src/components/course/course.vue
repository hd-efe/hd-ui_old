<template>
  <div class="course-card" @click="cardClick" :style="bgStyle">
    <div class="sku" v-if="showSku && obj.tag_name.length > 0">{{obj.tag_name}}</div>
    <div class="status-wrapper">
      <!-- 未开始 -->
      <div class="status status-not-start" v-if="obj.state_style == 2">{{ obj.display_time }}</div>
      <!-- 首播中 -->
      <div class="status status-progress" v-if="obj.state_style == 1"></div>
      <!-- 已结束 -->
      <div class="status status-end" v-if="obj.state_style == 0"></div>
    </div>
    <div class="info-wrapper" :class="{mulit: obj.multi_titles.length > 1}">
      <div class="course-item" v-for="item in obj.multi_titles">
        <div class="course-title">{{item.title}}</div>
        <div class="auth-info">
          <span>{{item.teacher_name}}</span>
          {{item.teacher_position}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hd-course",
  props: {
    showSku: {
      type: Boolean,
      default: false
    },
    obj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    bgStyle() {
      if (this.obj.cover_image_v2.length > 0) {
        return {
          background: "url(" + this.obj.cover_image_v2 + ") no-repeat",
          backgroundSize: "cover"
        };
      } else {
        return {};
      }
    }
  },
  methods: {
    cardClick() {
        this.$emit('card_click', this.obj)
    }
  }
};
</script>
<style lang="scss">
.course-card {
  width: 100%;
  margin-top: 16px;
  min-height: 140px;
  border-radius: 4px;
  position: relative;
  background: linear-gradient(to right, rgb(156, 163, 184), rgb(93, 100, 120));

  .sku {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    width: 100px;
    height: 24px;
    line-height: 24px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.98),
      rgba(0, 0, 0, 0)
    );
    border-radius: 2.5px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-family: FZYANS_ZHUNJW--GB1-0;
  }

  .status-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 24px;
    line-height: 24px;
    z-index: 1;

    .status {
      width: 100%;
      height: 100%;
    }

    .status-not-start {
      text-align: right;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: rgb(255, 255, 255);
      padding: 0 10px;
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/1ef8a687df39a1fdaf55825e8d6e7ece.png)
        no-repeat;
      background-size: contain;
    }

    .status-progress {
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/2775c2b459f76e337ad9d5d075bdf2e5.png)
        no-repeat;
      background-size: contain;
    }

    .status-end {
      background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/a97a57e189d0dd6497d14cd75b3f3ab3.png)
        no-repeat;
      background-size: contain;
    }
  }

  .info-wrapper {
    width: 218px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 10px;
    z-index: 1;

    .course-item {
      display: flex;
      flex-direction: column;

      .course-title {
        // height: 44px;
        line-height: 22px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: rgb(255, 255, 255);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .auth-info {
        height: 26px;
        line-height: 18px;
        padding-bottom: 8px;
        padding-top: 2px;
        color: rgb(255, 255, 255);
        font-family: PingFangSC-Light;
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        span {
          font-family: PingFangSC-Medium;
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
  }

  .mulit {
    .course-title {
      -webkit-line-clamp: 1 !important;
    }
    .auth-info {
      padding-bottom: 2px !important;
    }
  }

  .img-wrapper {
    position: absolute;
    right: 12px;
    bottom: 0;
    width: 116px;
    height: 127px;

    img {
      width: 116px;
      height: 127px;
    }
  }

  .shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0,
      rgba(249, 249, 249, 0.03) 50%,
      rgb(0, 0, 0) 100%
    );
    //   background: linear-gradient(180deg, rgba(249,249,249,0.03), rgba(255,255,255, 0) );
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}
</style>