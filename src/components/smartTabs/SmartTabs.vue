<template>
    <div>
        <div class="smart-tabs-header">
            <div v-for="(item,index) in childList"
                 @click="handleSwitch(index)"
                 :key="index"
                 class="smart-tabs-title"
                 :class="{'smart-tabs-active': activeIndex === index}"
                 :style="{
                     borderBottomWidth: index === activeIndex ? '0':'1px',
                     borderRightWidth: (index === activeIndex && index !== childList.length-1) ? '1px':'0',
                     borderLeftWidth:(index === activeIndex && index !== 0) ? '1px':'0',
                  }">
                <i class="fa fa-lg" style="font-size: 14px;margin-right: 3px;" :class="item.icon"></i>
                {{item.label}}
            </div>
        </div>
        <div style="height: calc(100% - 36px)" @contextmenu.prevent.stop="handleContextMenu">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SmartTabs',
  data() {
    return {
      childList: [],
      activeIndex: 0
    };
  },
  props: {
    value: {
      type: Number,
      required: false,
      default: 0
    }
  },
  watch: {
    $children(value) {
      this.childList = value;
    },
    value(value) {
      this.activeIndex = value;
    },
    activeIndex(newIndex, oldIndex) {
      this.$emit('on-change', { newIndex, oldIndex });
      this.$emit('input', newIndex);
      this.childList[oldIndex].showTabsItem = false;
      this.childList[newIndex].showTabsItem = true;
    }
  },
  mounted() {
    this.activeIndex = this.value;
    this.childList = this.$children;
    this.childList[this.value].showTabsItem = true;
  },
  methods: {
    handleSwitch(index) {
      this.activeIndex = index;
    },
    handleContextMenu(event) {
      this.$emit('contextmenu', event);
    }
  }
};
</script>

<style>
    .smart-tabs-header {
        height: 35px;
        display: flex;
    }

    .smart-tabs-title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-top: none;
        cursor: pointer;
        background-color: #dcdee2;
        font-size: 14px;
    }

    .smart-tabs-active {
        background-color: transparent;
        color: #2d8cf0;
    }
</style>
