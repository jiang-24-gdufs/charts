import { defineAsyncComponent } from 'vue';

export const RenderRichText = defineAsyncComponent(
  () => import('./RenderRichText.vue')
);
export const RenderNormalText = defineAsyncComponent(
  () => import('./RenderNormalText.vue')
);
