import { u as useRouter, b as useRoute } from './index.acc5b702.js';
import { h } from './element-plus.97092bf0.js';

const _sfc_main = {
  setup() {
    const router = useRouter();
    const route = useRoute();
    router.replace(route.fullPath.replace(/^\/redirect/, ''));
  },
  render() {
    return h('div')
  },
};

export { _sfc_main as default };
