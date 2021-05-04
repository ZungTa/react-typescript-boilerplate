// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import { resources } from './i18n';

declare module 'react-i18next' {
  // typescript 자동완성 지원 ko 기준
  type DefaultResources = typeof resources['ko'];
  interface Resources extends DefaultResources { }
}
