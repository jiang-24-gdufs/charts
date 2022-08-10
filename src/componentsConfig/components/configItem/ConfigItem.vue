<template>
    <div class="config-item">
        <div class="config-item-title">{{label}}</div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ConfigItem',
  props: {
    label: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
    .config-item {
        display: flex;
        align-items: center;
        padding: 4px 0;
    }

    .config-item-title{
        font-size: 13px;
        font-weight: 400;
        word-break: keep-all;
        padding-right: 5px;
    }
    .config-item > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
