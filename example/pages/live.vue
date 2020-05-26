<template>
  <hd-page title="Live 卡片">
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
        anchor_name: "键盘先生",
        anchor_position: "混沌大学创新助教",
        anchor_uid: "cfffbef3d7762034d11fe9ed9eaffde0",
        cover_image:
          "http://yxs-app.oss-cn-beijing.aliyuncs.com/22f9c635d957378de7525535c8ecccce",
        duration: 3115,
        enroll_head_image:
          "http://yxs-app.oss-cn-beijing.aliyuncs.com/22f9c635d957378de7525535c8ecccce",
        hot: "1000万",
        is_bespeak: 0,
        live_state: 1,
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
        title: "想想这道题怎么做？"
      }
    };
  }
};
</script>