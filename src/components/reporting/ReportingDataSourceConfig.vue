<template>
  <div>
    <!--标题-->
    <div class="data-config-header">
      <img
        src="../../assets/icon/data-source.svg"
        alt=""
        draggable="false"
        style="margin-right: 5px"
      />
      数据源
    </div>
    <empty-data-model v-if="!showDataModel" style="height: calc(100% - 51px)">
      <el-button
        type="primary"
        style="width: 80%; margin-top: 10px"
        icon="el-icon-plus"
        size="small"
        @click="showDataModel = true"
      >
        添加数据模型
      </el-button>
    </empty-data-model>
    <div v-else class="data-config-title">
      <el-select
        v-model="dataSetName"
        placeholder="请选择数据集"
        size="mini"
        style="margin: 10px 0; width: 95%"
        @change="handleDataSetChange"
      >
        <el-option
          v-for="(item, index) in dataSetList"
          :key="index"
          :label="item.name"
          :value="item"
        />
      </el-select>
      <data-source-choice
        v-if="dataSetName !== null"
        :data-set-item="dataSet"
        style="height: calc(100% - 60px)"
      />
    </div>
  </div>
</template>

<script>
import EmptyDataModel from '../../components/emptyDataModel/EmptyDataModel';
import DataSourceChoice from '../../components/dataSourceChoice/DataSourceChoice';

export default {
  name: 'ReportingDataConfig',
  components: {
    EmptyDataModel,
    DataSourceChoice,
  },
  data() {
    return {
      showDataModel: false,
      dataSetList: [],
      dataSetName: null,
      dataSet: null,
    };
  },
  watch: {
    showDataModel(value) {
      if (value) {
        this.initData();
      }
    },
  },
  methods: {
    handleDataSetChange(value) {
      this.dataSetName = value.name;
      this.dataSet = value;
    },
    initData() {
      // 获取所有的数据集
      this.$http.get('/dataSet/getAllDataSet').then((response) => {
        const { status, data } = response;
        if (status === 0 && data && data.length) {
          data.forEach((item) => {
            item.tableData = JSON.parse(item.tableData);
          });
          this.dataSetList = data;
        }
      });
    },
  },
};
</script>

<style scoped>
.data-config-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  border-bottom: 1px solid #dcdee2;
}

.data-config-title {
  height: calc(100% - 51px);
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
