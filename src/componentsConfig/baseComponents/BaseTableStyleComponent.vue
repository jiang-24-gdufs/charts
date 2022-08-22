<template>
  <base-collapse-style-component v-bind="$props">
    <!--标题-->
    <smart-collapse-item icon="fa fa-sliders" :async="false">
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-header" style="width: 25px; text-align: center"></i>
        <span>标题配置</span>
        <el-switch v-model="title.show" size="mini" style="margin-left: 10px" />
      </div>
      <header-style v-show="title.show" :title="title">
        <divider>下载按钮</divider>
        <smart-radio-group v-model="title.downloadLocation" label="按钮位置：">
          <smart-radio value="left">左边</smart-radio>
          <smart-radio value="right">右边</smart-radio>
        </smart-radio-group>
        <switch-input v-model="title.showDownload" label="显示下载按钮：" />
        <color-input v-model="title.downloadColor" label="文字颜色：" />
        <color-input v-model="title.downloadBaColor" label="背景颜色：" />
        <text-input v-model="title.downloadText" label="下载按钮文本：" />
        <smart-radio-group v-model="title.size" label="按钮尺寸：">
          <smart-radio value="default">默认</smart-radio>
          <smart-radio value="mini">mini</smart-radio>
          <smart-radio value="small">小的</smart-radio>
          <smart-radio value="medium">中等</smart-radio>
        </smart-radio-group>
        <icon v-model="title.icon" label="按钮图标：" />
      </header-style>
    </smart-collapse-item>
    <smart-collapse-item title="表头样式配置" icon="fa fa-sliders" :async="false">
      <table-header-cell-style :header-cell-style="option.tableHeaderCellStyle" />
    </smart-collapse-item>
    <!--表格配置-->
    <smart-collapse-item title="表格配置" icon="fa fa-table" :async="false">
      <table-attributes :table-attr="tableAttr" />
    </smart-collapse-item>
    <slot name="content"></slot>
    <smart-collapse-item
      v-for="(item, index) in option.tableHeader"
      :key="index"
      :title="`表格项(${item.label})`"
      icon="fa fa-list-ol"
      :async="false"
    >
      <table-column-attributes :table-column-attr="item" />
    </smart-collapse-item>
    <slot></slot>
  </base-collapse-style-component>
</template>

<script>
import SmartCollapseItem from '../../components/smartCollapse/SmartCollapseItem';
import HeaderStyle from '../components/headerStylle/HeaderStyle';
import SwitchInput from '../components/switchInput/SwitchInput';
import ColorInput from '../components/colorInput/ColorInput';
import TableAttributes from '../components/tableAttributes/TableAttributes';
import TableColumnAttributes from '../components/tableColumnAttributes/TableColumnAttributes';
import BaseCollapseStyleComponent from '../baseComponents/BaseCollapseStyleComponent';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import TableHeaderCellStyle from '../components/tableHeaderCellStyle/TableHeaderCellStyle';
import tableHeaderCellStyle from '../../componentsData/commonData/commonBaseData/tableHeaderCellStyle';
import Divider from '../../components/divider/Divider';
import SmartRadioGroup from '../../components/smartRadio/SmartRadioGroup';
import SmartRadio from '../../components/smartRadio/SmartRadio';
import TextInput from '../components/textInput/TextInput';
import Icon from '../components/icon/Icon';

export default {
  name: 'BaseTableStyleComponent',
  components: {
    SmartCollapseItem,
    HeaderStyle,
    SwitchInput,
    TableAttributes,
    TableColumnAttributes,
    BaseCollapseStyleComponent,
    TableHeaderCellStyle,
    Divider,
    ColorInput,
    SmartRadioGroup,
    SmartRadio,
    TextInput,
    Icon,
  },
  mixins: [componentsConfigMixins],
  computed: {
    title() {
      return this.option.title;
    },
    tableAttr() {
      return this.option.tableAttr;
    },
  },
  created() {
    // 兼容旧版本
    if (!this.option.tableHeaderCellStyle) {
      this.$set(this.option, 'tableHeaderCellStyle', tableHeaderCellStyle);
    }
    // 兼容旧的title 不支持 下载按钮的编辑
    if (this.option.title.icon === undefined) {
      this.$set(this.option.title, 'downloadText', '下载excel');
      this.$set(this.option.title, 'size', 'small');
      this.$set(this.option.title, 'icon', 'fa fa-download');
    }
  },
};
</script>

<style scoped></style>
