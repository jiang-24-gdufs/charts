<script lang="ts" setup>
import { ref, onMounted, reactive, computed } from 'vue';

import { environment } from '@/evn.config';

const reportingList = ref<any[]>([]);
const filterList = computed(() => reportingList.value.filter(r => r.name.indexOf(search.value) > -1))

const emits = defineEmits(['select']);
const smartchartsUrl = `${environment.VITE_REPORTING_EDIT_URL}?reportingId=`;

//
const edit = (rid: string) => {
  opener = window.open(`${smartchartsUrl}${rid}`);
};

// 获取图表列表
function getChartViewList() {
  fetch(
    // `${environment.VITE_API_BASE_URL}/chartsView/getFolderAndViewByFolderId?folderId=-1&type=0`
    `${environment.VITE_API_BASE_URL}/chartsView/lists`
  ).then((response: Response) => {
    if (response.status === 200) {
      response.json().then((res) => {
        if (res.status === 0) {
          // reportingList.value = res.data.viewList;
          reportingList.value = res.data;
        }
      });
    } else {
    }
  });
}

const select = (reporting) => {
  console.log('%cWorkBenchLeft.vue line:24 reporting', 'color: #007acc;', reporting);
  emits('select', reporting);
};
const showDialog = (reporting) => {
  console.log('%cWorkBenchLeft.vue line:24 reporting', 'color: #007acc;', reporting);
};

const editReporting = (reporting) => {
  edit(reporting.rid);
};
const deleteReporting = (reporting) => {
  // edit(reporting.rid);
  // TODO: FETCH

};

const search = ref('')
const visible = ref(false);
const form = reactive({
  name: '',
  description: '',
})

const onConfirm = () => {
  // TODO: FETCH
  const defaultParams = {
    draftId: 0,
    folderId: '',
    imgUrl: '',
    pageData: '',
    publicStatus: 0,
    type: 0,
  }

  const params = {
    ...defaultParams,
    ...form,
    // createTime: new Date().toLocaleString('zh-cn',
    //   {
    //     year: 'numeric', month: 'numeric', day: 'numeric',
    //     hour12: false,
    //     hour: '2-digit', minute: '2-digit', second: '2-digit'
    //   })
  }

  fetch(`${environment.VITE_API_BASE_URL}/chartsView/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(params),
    }).then(console.log);

  visible.value = false;
}
const add = () => {


  form.name = form.description = '';
  visible.value = true;
}

onMounted(() => {
  getChartViewList();
});
</script>

<template>
  <div>
    <p style="display: flex">
      <el-input v-model="search" @change="onSearch"></el-input>
      <el-button @click="add">+</el-button>
    </p>
    <!-- <p v-for="r of reportingList" :key="r.rid" class="reporting" @click="select(r)"> -->
    <p v-for="r of filterList" :key="r.rid" class="reporting" @click="select(r)">

      <el-dropdown trigger="contextmenu">
        <span class="el-dropdown-link">
          {{ r.name }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><span @click="editReporting(r)">编辑报告</span></el-dropdown-item>
            <!-- <el-dropdown-item><span @click="editReporting(r)">预览</span></el-dropdown-item>
            <el-dropdown-item><span @click="editReporting(r)">重命名</span></el-dropdown-item> -->
            <el-dropdown-item><span @click="deleteReporting(r)">删除</span></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </p>
  </div>
  <el-dialog v-model="visible" title="新增报告" width="30%">
    <el-form :model="form" label-width="120px">
      <el-form-item label="报告名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="报告描述">
        <el-input v-model="form.description" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button @click="onConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style>
.reporting {
  cursor: pointer;
}

.reporting:hover {
  color: var(--primary-color);
}
</style>
