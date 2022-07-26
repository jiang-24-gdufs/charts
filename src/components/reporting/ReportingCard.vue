<template>
  <!--判断是文件-->
  <div
    :style="{backgroundImage:`url(${reporting.imgUrl})`}"
    class="reporting-card reporting-card-active"
    v-if="reporting.nodeType === $options.nodeTypeEnum.FILE.status"
  >
    <div class="reporting-card-display">
      <p class="reporting-card-des">{{reporting.name}}</p>
      <p class="reporting-card-des">{{reporting.createTime}}</p>
      <p class="reporting-card-des">{{reporting.description}}</p>
      <div class="reporting-card-edit">
        <el-button
          type="primary"
          icon="fa fa-laptop"
          @click="handlePreview"
          plain
          size="small"
          :style="{width:reporting.draftId === null ? '40%' : '90%'}"
        >预览</el-button>
        <el-button
          type="primary"
          icon="fa fa-edit"
          @click="handleReportingEdit"
          plain
          size="small"
          v-if="reporting.draftId === null"
          style="width: 40%;"
        >编辑</el-button>
      </div>
    </div>
  </div>
  <!--文件夹-->
  <div class="reporting-card-empty reporting-card-active" v-else @click="handleFolder">
    <img src="../../assets/image/floder.svg" alt style="width: 200px;" />
    <span style="margin-top: 20px;">{{reporting.name}}</span>
  </div>
</template>

<script>
import nodeTypeEnum from '../../enum/nodeTypeEnum';

export default {
  name: 'ReportingCard',
  nodeTypeEnum,
  props: {
    reporting: {
      type: Object,
      required: true
    }
  },
  methods: {
    handlePreview() {
      window.open(
        `${process.env.VUE_APP_URL}/reportingPreview.html?reportingId=${this.reporting.rid}`
      );
    },
    handleReportingEdit() {
      window.open(
        `${process.env.VUE_APP_URL}/reportingEdit.html?reportingId=${this.reporting.rid}`
      );
    },
    handleFolder() {
      this.$parent.handleBuild(this.reporting.rid);
    }
  }
};
</script>

<style scoped>
.reporting-card {
  cursor: pointer;
  height: 400px;
  position: relative;
  box-shadow: 3px 3px 5px 2px #dcdee2;
  background-size: 100% 100%;
  animation-name: reporting-card-animate;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
@keyframes reporting-card-animate {
  from {
    width: 0;
  }
  to {
    width: 350px;
  }
}

.reporting-card-empty {
  width: 23%;
  cursor: pointer;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  box-shadow: 3px 3px 5px 2px #dcdee2;
  background-size: 100% 100%;
  animation-name: reporting-card-animate;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

.reporting-card-display {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 270px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: top 0.6s;
}

.reporting-card:hover .reporting-card-display {
  top: 0;
}

.reporting-card-edit {
  width: 100%;
  display: flex;
  justify-content: center;
}

.reporting-card-des {
  height: 30px;
  line-height: 30px;
  color: white;
  font-weight: 600;
}
.reporting-card-active {
  transition: transform 0.3s;
}
.reporting-card-active:hover {
  transform: scale(1.1);
}
</style>
