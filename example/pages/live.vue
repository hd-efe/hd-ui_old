<template>
  <hd-page title="Button">
    <div slot="content">
      <hd-group>
        <hd-live :obj="live_info"></hd-live>
        <hd-live :obj="live_info"></hd-live>
        <hd-live :obj="live_info"></hd-live>
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
  },
  data() {
    return {
      live_info: {
        anchor_name: "钉",
        anchor_position: "混沌大学创新助教",
        anchor_uid: "cfffbef3d7762034d11fe9ed9eaffde0",
        cover_image:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/99a47e2192f1044bb714ec40aaaef856.png",
        duration: 3115,
        enroll_head_image:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/cf80a8a9672bfb07ab874e5b16412644.png",
        hot: "1",
        is_bespeak: 0,
        live_state: 3,
        live_state_icon:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/1956b86a1199eefe513f85e08012cdb1.png",
        live_state_str: "已结束",
        page_url:
          "yanxishe://sslive/liveroom/audience?sslive_id=6642708306513135757",
        pay_text: "",
        pay_type: 0,
        show_limit: 0,
        sslive_id: 6642708306513136000,
        start_time: "03-09 17:11",
        start_time_dt: "2020-03-09 17:11:24",
        start_time_dt_str: "2020-03-09 17:11:24",
        title: "好好监考坎坎坷坷"
      }
    };
  }
};
</script>