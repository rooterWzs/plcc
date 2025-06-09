import { _ as _export_sfc, i as useLang, L as Login, c as useApp, u as useRouter, b as useRoute } from './index.acc5b702.js';
import { C as ChangeLang } from './ChangeLang.73d405c5.js';
import { k as defineComponent, w as watch, q as reactive, c as computed, r as ref, C as toRefs, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, F as Fragment, a as getCurrentInstance, p as resolveComponent, l as openBlock, R as createTextVNode, S as toDisplayString, a0 as pushScopeId, a1 as popScopeId } from './element-plus.97092bf0.js';

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = defineComponent({
  components: { ChangeLang },
  name: 'login',
  setup() {
    const { proxy: ctx } = getCurrentInstance(); // 可以把ctx当成vue2中的this
    const router = useRouter();
    const route = useRoute();
    const { lang } = useLang();
    watch(lang, () => {
      state.rules = getRules();
    });
    const getRules = () => ({
      userName: [
        {
          required: true,
          message: ctx.$t('login.rules-username'),
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: ctx.$t('login.rules-password'),
          trigger: 'blur',
        },
        {
          min: 6,
          max: 12,
          message: ctx.$t('login.rules-regpassword'),
          trigger: 'blur',
        },
      ],
    });
    const state = reactive({
      model: {
        userName: 'admin',
        password: '123456',
      },
      rules: getRules(),
      loading: false,
      btnText: computed(() =>
        state.loading ? ctx.$t('login.logining') : ctx.$t('login.login')
      ),
      loginForm: ref(null),
      submit: () => {
        if (state.loading) {
          return
        }
        state.loginForm.validate(async valid => {
          if (valid) {
            state.loading = true;
            const { code, data, message } = await Login(state.model);
            if (+code === 200) {
              ctx.$message.success({
                message: ctx.$t('login.loginsuccess'),
                duration: 1000,
              });

              const targetPath = decodeURIComponent(route.query.redirect);
              if (targetPath.startsWith('http')) {
                // 如果是一个url地址
                window.location.href = targetPath;
              } else if (targetPath.startsWith('/')) {
                // 如果是内部路由地址
                router.push(targetPath);
              } else {
                router.push('/');
              }
              useApp().initToken(data);
            } else {
              ctx.$message.error(message);
            }
            state.loading = false;
          }
        });
      },
    });

    return {
      ...toRefs(state),
    }
  },
});

const _withScopeId = n => (pushScopeId("data-v-b2c5fef0"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "login" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("h1", { class: "title" }, "PLC通信中间件", -1));
const _hoisted_3 = { class: "change-lang" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_change_lang = resolveComponent("change-lang");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_form, {
        class: "form",
        model: _ctx.model,
        rules: _ctx.rules,
        ref: "loginForm"
      }, {
        default: withCtx(() => [
          _hoisted_2,
          createVNode(_component_el_form_item, { prop: "userName" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                class: "text",
                modelValue: _ctx.model.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model.userName) = $event)),
                "prefix-icon": "User",
                clearable: "",
                placeholder: _ctx.$t('login.username')
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, { prop: "password" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                class: "text",
                modelValue: _ctx.model.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.model.password) = $event)),
                "prefix-icon": "Lock",
                "show-password": "",
                clearable: "",
                placeholder: _ctx.$t('login.password')
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                loading: _ctx.loading,
                type: "primary",
                class: "btn",
                size: "large",
                onClick: _ctx.submit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.btnText), 1)
                ]),
                _: 1
              }, 8, ["loading", "onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules"])
    ]),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_change_lang)
    ])
  ], 64))
}
var index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b2c5fef0"]]);

export { index as default };
