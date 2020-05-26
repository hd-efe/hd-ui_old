<template>
  <hd-page title="Slide">
    <div slot="content">
      <div class="slide-wrapper">
          <hd-slide></hd-slide>
      </div>
    </div>
  </hd-page>
</template>
<script>
import HdPage from "../components/hd-page";
import HdGroup from "../components/hd-group";
export default {
  components: {
    HdPage,
    HdGroup
  }
};
</script>
<style lang="scss">
    .slide-wrapper {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 2px;
    }
</style>