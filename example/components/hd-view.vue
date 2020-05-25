<template>
  <transition name="page-move">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {};
</script>
<style lang="scss">
.page-move-enter, .page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active, .page-move-leave-active {
  transition: transform .3s;
}
</style>