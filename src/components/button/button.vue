<template>
  <button class="hd-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "hd-button"
};
</script>

<style lang="scss">
.hd-btn {
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  color: #fff;
  background: #4a4c5b;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
}
</style>