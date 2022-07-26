<template>
    <div>
        <data-obtain-type v-model="otherOption.dataObtainType" style="width: 100%;"></data-obtain-type>
        <div style="height: calc(100% - 73px); width: 100%;overflow-y: auto;">
            <!--静态数据-->
            <div v-if="otherOption.dataObtainType === $options.dataObtainTypeEnum.STATIC_DATA.status">
                <slot name="static-data">
                    <json-view v-for="(item,index) in option.xAxis"
                               :value="item.data"
                               :key="index+'x'"
                               @change="(value) => {handleChange(value,item)}"
                               :title="`X轴(${item.name})`">
                    </json-view>
                    <json-view v-for="(item,index) in option.series"
                               :key="index+'s'"
                               :value="item.data"
                               @change="(value) => {handleChange(value,item)}"
                               :title="`系列数据(${item.name})`">
                    </json-view>
                </slot>
            </div>
            <!--数据源-->
            <div v-else-if="otherOption.dataObtainType === $options.dataObtainTypeEnum.DATA_SOURCE.status">
                <el-button size="mini"
                           icon="fa fa-external-link"
                           :disabled="highLevelQuery"
                           @click="handleHighLevelQuery"
                           style="margin:10px 3px 0 3px;width: calc(100% - 6px);">高级条件查询
                </el-button>
                <div class="sql-query" v-show="!!otherOption.conditionSql">
                    <img src="../../assets/icon/sql.svg" style="height: 25px;margin: 0 10px;" alt="">
                    <span>SQL</span>
                    <el-button style="margin-left: auto;" type="primary" icon="el-icon-edit" size="mini" circle @click="handleEditSql"></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="handleDeleteSql"></el-button>
                </div>
                <slot name="data-source"></slot>
            </div>
            <!--api数据-->
            <div v-else>
                <slot name="api">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import dataObtainTypeEnum from '../../enum/dataObtainTypeEnum';
import DataObtainType from '../components/dataObtainType/DataObtainType';
import coordsTypeEnum from '../../enum/coordsTypeEnum';
import JsonView from '../../components/jsonView/JsonView';
import highLevelQuery from '../../components/highLevelQuery';
import codeEditor from '../../components/codeEditor';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';

export default {
  name: 'BaseChartsDataComponent',
  dataObtainTypeEnum,
  coordsTypeEnum,
  mixins: [ componentsConfigMixins ],
  components: {
    DataObtainType,
    JsonView
  },
  computed: {
    /**
			 * 控制高级查询按钮是否可用
			 */
    highLevelQuery() {
      const { dataSetId, conditionSql } = this.otherOption;
      return !dataSetId || !!conditionSql;
    }
  },
  methods: {
    /**
			 * 读取静态X轴数据
			 */
    handleChange(value, coordsOption) {
      try {
        coordsOption.data = value;
      } catch (e) {
        this.$notify.error({
          title: 'X轴数据格式错误',
          message: e.message || e
        });
      }
    },
    /**
			 * 高级查询
			 */
    handleHighLevelQuery() {
      const loading = this.$loading({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      highLevelQuery({
        dataSetId: this.otherOption.dataSetId,
        otherOption: this.otherOption,
        show: () => {
          loading.close();
        },
        change: (sql) => {
          this.$set(this.otherOption, 'conditionSql', sql);
        },
        close: () => {

        }
      });
    },
    /**
			 * 删除sql 语句
			 */
    handleDeleteSql() {
      this.$set(this.otherOption, 'conditionSql', '');
    },
    /**
			 * 编辑sql
			 */
    handleEditSql() {
      const loading = this.$loading({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      /**
				 * 代码编辑器
				 */
      codeEditor({
        value: this.otherOption.conditionSql,
        change: (value) => {
          this.otherOption.conditionSql = value;
        },
        show: () => {
          loading.close();
        },
        close: () => {

        },
        full: false,
        language: 'sql'
      });
    }
  }
};
</script>

<style scoped>
    .sql-query {
        padding: 3px;
        height: 35px;
        margin: 10px 5px;
        width: calc(100% - 10px);
        display: flex;
        align-items: center;
        background-color: white;
        font-size: 14px;
    }
</style>
