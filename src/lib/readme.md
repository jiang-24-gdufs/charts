# GridWrapper

如何使用图表设计器

# smart-charts 渲染库

执行 `build-lib` 命令后会打包生成 `smart-charts` 渲染库.
该库以Vue插件的形式使用.
导入渲染图表的内容, 包含:

- echarts 各主题配置
- 注册全局组件, 包含渲染组件及入口组件 `SmartCharts`

> 该库依赖 "vue", "echarts", "element-resize-detector", "lodash", "interactjs";

## 安装方式

## 使用文档

### GridWrapper配置

#### 网格配置

### 新增图表渲染组件

在 `lib/chartsRender/componentsRender` 中增加组件, 如 `RenderNewBarCharts`:

```vue
<script>
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'RenderNewBarCharts',
});
</script>

<template>
  <div>New Bar</div>
</template>
```

将组件导出, 推荐以异步组件的方式导出, 因为渲染时不一定会使用该组件:

```ts
import { defineAsyncComponent } from 'vue';

export const RenderNewBarCharts = defineAsyncComponent(
  () => import('./RenderNewBarCharts.vue')
);
export default RenderNewBarCharts;
```

在 `lib/chartsRender/componentsRender/index.ts` 中注册全局组件, 注册的名称需要与配置参数中的渲染组件的字符串对应. 否则无法正确渲染

```ts
import RenderNewBarCharts from './RenderNewBarCharts';
export default {
  install(app: App) {
    // ...
    app.component('RenderNewBarCharts', RenderNewBarCharts);
  }
}
```

####

#### 主题

- `light` 默认
- `dark`  暗黑
- `chalk`
- `essos`
- `infographic`
- `macarons`
- `purple-passion`
- `roma`
- `shine`
- `vintage`
- `walden`
- `westeros`
- `wonderland`
