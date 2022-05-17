/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'rollup-plugin-external-globals';

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV_RELEASE: boolean;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_DATA_URL: string;
  readonly VITE_ARC_SERVER_URL: string;
  readonly VITE_APP_URL: string;
  readonly VITE_MOBILE_URL: string;
  readonly VITE_TDT_TOKEN: string;
  readonly VITE_CONCURRENCY: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
