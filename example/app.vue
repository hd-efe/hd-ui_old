<template>
  <div id="app">
    <header class="hd-bar">
      <h1>hd-ui</h1>
    </header>
    <section class="hd-content">
      <ul class="list-view-wrapper" v-for="module in components">
        <p>{{module.name}}</p>
        <li @click="itemClick(item)" v-for="item in module.items">{{item.text}} <span>›</span></li>
      </ul>
    </section>
    <hd-view></hd-view>
  </div>
</template>

<script>
import HdView from "./components/hd-view.vue";
export default {
  components: {
    HdView
  },
  data() {
    return {
      components: [
        {
          name: "Basic",
          items: [
            {
              path: "/button",
              text: "Button"
            }
          ]
        },
        {
          name: "业务组件",
          items: [
            {
              path: "/live",
              text: "Live 卡片"
            },
            {
              path: "/course",
              text: "Course 卡片"
            },
            {
              path: "/slide",
              text: "Slide"
            }
          ]
        },
        {
          name: "Form",
          items: [
            {
              path: "/checkbox",
              text: "Checkbox"
            },
            {
              path: "/checkbox-group",
              text: "CheckboxGroup"
            },
            {
              path: "/radio",
              text: "Radio"
            },
            {
              path: "/input",
              text: "Input"
            },
            {
              path: "/textarea",
              text: "Textarea"
            }
          ]
        },
        {
          name: "Popup",
          items: [
            {
              path: "/popup",
              text: "Popup"
            },
            {
              path: "/toast",
              text: "Toast"
            },
            {
              path: "/dialog",
              text: "Dialog"
            },
            {
              path: "/action-sheet",
              text: "ActionSheet"
            }
          ]
        },
        {
          name: "Scroll",
          items: [
            {
              path: "/scroll",
              text: "Scroll"
            },
            {
              path: "/slide",
              text: "Slide"
            },
            {
              path: "/sticky",
              text: "Sticky"
            },
            {
              path: "/scroll-nav-bar",
              text: "ScrollNavBar"
            },
            {
              path: "/scroll-nav",
              text: "ScrollNav"
            }
          ]
        }
      ]
    };
  },
  methods: {
    itemClick(item) {
      let path = item.path;
      this.$router.push({path})
    }
  }
};
</script>
<style lang="scss">
html,
body,
h1 {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
body {
  background: #fff;
  overflow: hidden;
}
.hd-bar {
  z-index: 10;
  height: 44px;
  position: absolute;
  right: 0;
  left: 0;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 1px #e9eaea;
  h1 {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: rgb(51, 51, 51);
  }
}
.hd-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
@mixin border-1px($color) {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid $color;
  }
  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
    &::after {
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    &::after {
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
ul.list-view-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;

  p {
    margin: 0;
    padding: 10px 15px;
    color: rgb(153, 153, 153);
    background: rgb(247, 247, 247);
    font-size: 16px;
  }
  li {
    @include border-1px(rgb(200,200,200));
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
    color: rgb(51,51,51);
    span {
      position: absolute;
      right: 21px;
      top: 0;
      line-height: 42px;
    }

  }
}
</style>