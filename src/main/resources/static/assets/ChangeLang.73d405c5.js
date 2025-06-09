import { _ as _export_sfc, i as useLang } from './index.acc5b702.js';
import { l as openBlock, m as createBlock, n as withCtx, j as createVNode, J as createElementBlock, Q as renderList, F as Fragment, K as createBaseVNode, p as resolveComponent, u as unref, R as createTextVNode, S as toDisplayString } from './element-plus.97092bf0.js';

var ChangeLang_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1 = { class: "change-lang" };

const _sfc_main = {
  setup(__props) {

const langlist = [
  {
    name: '简体中文',
    value: 'zh-cn',
  },
  {
    name: 'English',
    value: 'en',
  },
];
const { changeLang } = useLang();

return (_ctx, _cache) => {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");

  return (openBlock(), createBlock(_component_el_dropdown, { trigger: "hover" }, {
    dropdown: withCtx(() => [
      createVNode(_component_el_dropdown_menu, null, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(langlist, (item) => {
            return createVNode(_component_el_dropdown_item, {
              onClick: $event => (unref(changeLang)(item.value)),
              key: item.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.name), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          }), 64))
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_svg_icon, {
          name: "language",
          class: "icon"
        })
      ])
    ]),
    _: 1
  }))
}
}

};
var ChangeLang = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-ea0104fc"]]);

export { ChangeLang as C };
