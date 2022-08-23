<template>
    <!-- <base-panel-style-component v-bind="$props"> -->

        <!-- <el-button size="small" type="primary" class="rich-edit-button" slot="top" @click="handleEdit">编辑富文本</el-button> -->
        <el-input type="textarea"></el-input>
    <!-- </base-panel-style-component> -->
</template>

<script>
// import BasePanelStyleComponent from '../../baseComponents/BasePanelStyleComponent';
// import Editor from '../../../components/editor/Editor';
// import componentsMap from '../'

export default {
  name: 'DataNormalText',
  components: {
    // BasePanelStyleComponent
  },
  methods: {
    /**
			 * 点击编辑
			 */
    handleEdit() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        closeOnClickModal: false,
        message: h(Editor, {
          props: {
            value: this.option.content
          },
          on: {
            input: (value) => {
              this.option.content = value;
            }
          }
        }),
        customClass: 'data-rich-edit',
        confirmButtonText: '关闭'
      });
    }
  }
};
</script>

<style>
    .rich-edit-button {
        margin: 10px 10px 0 10px;
        width: calc(100% - 20px);
    }

    .data-rich-edit {
        width: 60%;
    }
</style>
