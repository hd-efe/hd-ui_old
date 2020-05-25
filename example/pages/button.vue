<template>
  <hd-page title="Button">
    <div slot="content">
      <hd-group>
        <hd-button>aaa</hd-button>
        <hd-button>bbb</hd-button>
      </hd-group>
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