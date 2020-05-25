<template>
  <div class="hd-page" :class="type">
    <header class="header">
      <h1>{{title}}</h1>
      <span @click="back"><</span>
    </header>
    <div class="wrapper">
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    type: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss">
.hd-page {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(245, 245, 245);
  header {
    height: 44px;
    position: absolute;
    right: 0;
    left: 0;
    line-height: 44px;
    text-align: center;
    background: #fff;
    box-shadow: 0 2px 1px #e9eaea;
    h1 {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: rgb(51, 51, 51);
    }
    span {
      position: absolute;
      left: 6px;
      padding: 0 10px;
      color: rgb(254, 58, 41);
      top: 0;
    }
  }
  .wrapper {
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 44px;
    width: 100%;
    bottom: 0;
    left: 0;
    .content {
      padding: 10px;
    }
  }
}
</style>