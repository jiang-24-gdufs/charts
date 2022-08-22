<template>
  <div class="smart-coll">
    <div class="smart-coll-header" @click="handleCollapse">
      <slot name="title"
        ><i :class="icon" style="width: 25px; text-align: center"></i><span>{{ title }}</span></slot
      >
      <i
        v-show="showLoading"
        class="fa fa-spinner fa-pulse"
        style="margin-left: auto; margin-right: 10px"
      ></i>
      <i
        v-show="!showLoading"
        class="fa fa-angle-right smart-coll-angel"
        :class="{ 'smart-coll-angel-active': showContent }"
      ></i>
    </div>
    <el-collapse-transition>
      <div v-if="!firstShow" v-show="showContent" class="smart-coll-content">
        <slot></slot>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'SmartCollapseItem',
  props: {
    title: {
      type: String,
      required: false,
    },
    /**
     * 是否异步加载，如果为异步加载 slot的组件应该使用 异步组件
     */
    async: {
      type: Boolean,
      required: false,
      default: true,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showContent: false,
      firstShow: true,
      showLoading: false,
    };
  },
  created() {
    if (!this.async || !this.$slots.default) {
      this.firstShow = false;
    }
  },
  mounted() {},
  methods: {
    handleCollapse() {
      if (!this.firstShow) {
        this.showContent = !this.showContent;
      } else {
        this.showLoading = true;
        this.firstShow = false;
        window.setTimeout(() => {
          this.showContent = true;
          this.showLoading = false;
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.smart-coll {
  border-bottom: 1px solid #dcdee2;
}

.smart-coll-header {
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
}

.smart-coll-angel {
  margin-left: auto;
  margin-right: 10px;
  transition: transform 0.3s;
}

.smart-coll-angel-active {
  transform: rotateZ(90deg);
}

.smart-coll-content {
  padding: 5px;
  height: auto;
}
</style>
