<template>
  <hd-page title="Course 卡片">
    <div slot="content">
      <hd-group>
        <hd-course :showSku="true" @card_click="card_click" :obj="course_info"></hd-course>
        <hd-course :obj="course_info"></hd-course>
        <hd-course :obj="course_info"></hd-course>
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
      course_info: {
        action_num: "3千人次",
        course_score: 4.9,
        left_top_image: "",
        course_id: "68e21b04dd3f4d4b7486e374d4836530",
        allow_play_title: "",
        is_latest_watch_course: 0,
        sku_shadow_image:
          "http://yxs-pic.oss-cn-beijing.aliyuncs.com/f2adf822625908f35a468091649d2083",
        silent1x2_ratio: 2.39285714,
        page_url:
          "yanxishe://course?course_id=68e21b04dd3f4d4b7486e374d4836530&app_channel=",
        title: "模式创新：商业本质的嬗变-从帝国到流沙",
        cover_image_2x1:
          "http://yxs-web.oss-cn-beijing.aliyuncs.com/upload_1cb08bfc2348a5f9861b1397aa67baa8",
        state_style: 0,
        sku_circle_image:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/d39125e2e397ad3b8c3771de80fe7043.png",
        display_time: "12-26 12:10",
        cover_image_1x2:
          "http://yxs-web.oss-cn-beijing.aliyuncs.com/upload_85814329d3b98fe2edcedac96898f130",
        cover_image_v2:
          "http://yxs-app.oss-cn-beijing.aliyuncs.com/22f9c635d957378de7525535c8ecccce",
        multi_titles: [
          {
            teacher_position: "真格基金联合创始人、新东方联合创始人",
            teacher_name: "王强",
            title: "模式创新：商业本质的嬗变-从帝国到流沙"
          }
        ],
        teacher: {
          position: "真格基金联合创始人、新东方联合创始人",
          name: "王强",
          head_image:
            "http://yxs-web.oss-cn-beijing.aliyuncs.com/upload_50a20e5cfd741b3e9a9404d6f317bc52"
        },
        has_bespeak: 0,
        choice_state: 0,
        state_desc: "",
        lt1x2_sku_img:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/6b96049494f5cbe50e3ab604bce5d805.png",
        tag_name: "研习社",
        is_series: 0,
        tag_list: ["商业模式", "营销创新", "市场研究"],
        watch_icon:
          "https://yxs-web.oss-cn-beijing.aliyuncs.com/b651ae95a80159a8e8c7fc5e89751d55.png",
        school_ts: "2019-12-26 12:10:00",
        standard_school_time: "2019-12-26 12:10:00",
        superscript: ""
      }
    };
  },
  methods: {
    card_click(obj_info) {
      console.log(obj_info);
    }
  }
};
</script>