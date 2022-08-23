<template>
  <smart-header>
    <!--使用flex,分为三段-->
    <el-row type="type" align="middle" style="height: 100%">
      <!--左侧-->
      <el-col :span="8" style="display: flex; align-items: center; height: 100%">
        <img
          src="../../assets/image/logo-white.png"
          style="height: 38px; margin: 0 20px"
          draggable="false"
        />
        <h2 style="font-weight: 600; font-size: 20px; color: white">报告编辑</h2>
        <slot name="left"></slot>
      </el-col>
      <!--中间-->
      <el-col
        :span="8"
        style="display: flex; align-items: center; justify-content: center; height: 100%"
      >
        <!--图表项-->
        <div
          v-for="(dirItem, dirIndex) in $options.dataComponents"
          :key="dirIndex"
          class="edit-header-wrapper"
        >
          <i :class="dirItem.icon || 'fa fa-question-circle-o'" class="fa-lg"></i>
          <span style="margin-top: 5px">{{ dirItem.title }}<i class="fa fa-angle-down"></i></span>
          <smart-select class="edit-header-item" style="height: 350px; z-index: 1000">
            <template v-for="(item, index) in dirItem.components">
              <!--如果还存在下级组件-->
              <template v-if="!!item.components">
                <smart-select-item :key="index" :label="item.title">
                  <el-row :gutter="5">
                    <el-col
                      v-for="(fileItem, fileIndex) in item.components"
                      :key="fileIndex"
                      :span="8"
                      style="margin-bottom: 5px"
                    >
                      <display-charts
                        :image="fileItem.image"
                        @click="handleSelectWidget(fileItem.data)"
                      >
                        {{ fileItem.data.title }}
                      </display-charts>
                    </el-col>
                  </el-row>
                </smart-select-item>
              </template>
              <template v-else>
                <smart-select-item :key="index" :label="item.data.title">
                  <el-row :gutter="5">
                    <el-col :span="8" style="margin-bottom: 5px">
                      <display-charts
                        :image="item.image"
                        @click="handleSelectWidget(item.data)"
                      >
                        {{ item.data.title }}
                      </display-charts>
                    </el-col>
                  </el-row>
                </smart-select-item>
              </template>
            </template>
          </smart-select>
        </div>
      </el-col>
      <!--右侧-->
      <el-col
        :span="8"
        style="display: flex; align-items: center; height: 100%; justify-content: flex-end"
      >
        <slot name="right"></slot>
        <div class="edit-header-wrapper" @click="handleBack">
          <i class="fa fa-mail-reply-all fa-lg"></i>
          <span style="margin-top: 5px">返回</span>
        </div>
      </el-col>
    </el-row>
  </smart-header>
</template>

<script>
import SmartHeader from '../smartHeader/SmartHeader';
import SmartSelect from '../../components/smartSelect/SmartSelect';
import SmartSelectItem from '../../components/smartSelect/SmartSelectItem';
import DisplayCharts from '../../components/displayCharts/DisplayCharts';
import { deepCopy } from '../../utils';
import dataComponents from '../../componentsData';
// import messageTypeEnum from '../../enum/messageTypeEnum';

export default {
  name: 'ReportingEditHeader',
  dataComponents,
  components: {
    SmartHeader,
    SmartSelectItem,
    SmartSelect,
    DisplayCharts,
  },
  methods: {
    /**
     * 选择组件
     * @param data
     */
    handleSelectWidget(data) {
      this.$emit('select-widget', deepCopy(data));
    },
    /**
     * 返回
     */
    handleBack() {
      window.open(`${process.env.VUE_APP_URL}/index.html`);
    },
  },
};
</script>

<style>
@import '../../style/editHeader.css';
</style>
