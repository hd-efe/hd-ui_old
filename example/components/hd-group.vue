<template>
  <div class="hd-group" :class="type">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hd-group",
  props: {
    type: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.hd-group {
  button, .live-card {
    margin: 10px 0;
  }
}
</style>