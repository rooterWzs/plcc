import { s as storeToRefs, j as useAccount, _ as _export_sfc } from './index.acc5b702.js';
import { k as defineComponent, l as openBlock, J as createElementBlock, F as Fragment, K as createBaseVNode, S as toDisplayString, a0 as pushScopeId, a1 as popScopeId } from './element-plus.97092bf0.js';

/*
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐│
 *  ││Esc│!1 │@2 │#3 │$4 │%5 │^6 │&7 │*8 │(9 │)0 │_- │+= │|\ │`~ ││
 *  │├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤│
 *  ││ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{[ │}] │ BS  ││
 *  │├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤│
 *  ││ Ctrl │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  ││
 *  │├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────┬───┤│
 *  ││ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│Shift │Fn ││
 *  │└─────┬──┴┬──┴──┬┴───┴───┴───┴───┴───┴──┬┴───┴┬──┴┬─────┴───┘│
 *  │      │Fn │ Alt │         Space         │ Alt │Win│   HHKB   │
 *  │      └───┴─────┴───────────────────────┴─────┴───┘          │
 *  └─────────────────────────────────────────────────────────────┘
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-23 14:56:06
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:07:53
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useUserinfo = () => {
  const { userinfo } = storeToRefs(useAccount());
  return { userinfo }
};

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = defineComponent({
  setup() {
    const { userinfo } = useUserinfo();

    return { userinfo }
  },
});

const _withScopeId = n => (pushScopeId("data-v-6ecd629c"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "userinfo" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("i", { class: "el-icon-user" }, null, -1));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("h3", null, "admin", -1));
const _hoisted_4 = ["src"];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (!_ctx.userinfo)
      ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _hoisted_2,
          _hoisted_3
        ], 64))
      : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("img", {
            class: "avatar",
            src: _ctx.userinfo.avatar
          }, null, 8, _hoisted_4),
          createBaseVNode("h3", null, toDisplayString(_ctx.userinfo.name), 1)
        ], 64))
  ]))
}
var Avatar = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-6ecd629c"]]);

export { Avatar as A, useUserinfo as u };
