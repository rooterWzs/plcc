import { k as defineComponent, r as ref, q as reactive, a as getCurrentInstance, l as openBlock, J as createElementBlock, K as createBaseVNode, R as createTextVNode, S as toDisplayString, N as withDirectives, a6 as vShow, j as createVNode, n as withCtx, a3 as withKeys, F as Fragment, p as resolveComponent, a0 as pushScopeId, a1 as popScopeId, d as onBeforeMount, C as toRefs, O as normalizeStyle, a8 as createStaticVNode, o as onMounted } from './element-plus.97092bf0.js';
import { A as Avatar } from './index.478129c6.js';
import { c as useApp, s as storeToRefs, j as useAccount, _ as _export_sfc, A as AesEncryption, L as Login, u as useRouter, b as useRoute } from './index.acc5b702.js';

var Unlock_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$3 = defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const { proxy: ctx } = getCurrentInstance();
    const router = useRouter();
    const route = useRoute();
    const showModal = ref(false);
    const lockForm = ref(null);
    const lockModel = reactive({
      password: '',
    });
    const loading = ref(false);

    const appStore = useApp();
    const { authorization } = storeToRefs(appStore);
    const { clearToken, setScreenCode } = appStore;
    const accountStore = useAccount();
    const { userinfo } = storeToRefs(accountStore);
    const { getUserinfo } = accountStore;

    const checkPwd = async (rule, value, callback) => {
      const cipher = authorization.value && authorization.value.screenCode;
      if (!cipher) {
        return callback()
      }
      const pwd = new AesEncryption().decryptByAES(cipher);
      if (pwd === value) {
        return callback()
      } else {
        // 尝试登录
        loading.value = true;
        const { code } = await Login({
          username: userinfo.value.name,
          password: value,
        });
        loading.value = false;
        if (+code === 200) {
          return callback()
        }
      }
      return callback(new Error(rule.message))
    };

    const lockRules = reactive({
      password: [
        { required: true, message: ctx.$t('topbar.lock-rules-password2') },
        {
          validator: checkPwd,
          message: ctx.$t('topbar.lock-rules-password3'),
          trigger: 'none',
        },
      ],
    });

    const handleUnlock = () => {
      // 判断当前是否登录
      if (authorization.value) {
        showModal.value = true;
        // 尝试获取用户信息
        if (!userinfo.value) {
          getUserinfo();
        }
      } else {
        ctx.$message(ctx.$t('topbar.lock-error'));
        reLogin();
      }
    };

    const submitForm = () => {
      lockForm.value.validate(async valid => {
        if (!valid) {
          return false
        }

        // 返回锁屏前的页面
        router.push({ path: route.query.redirect || '/', replace: true });
        // 清除锁屏密码
        setScreenCode('');
      });
    };

    const cancel = () => {
      lockForm.value.resetFields();
      showModal.value = false;
    };

    const reLogin = () => {
      router.push('/login?redirect=' + (route.query.redirect || '/'));
      // 清除token
      clearToken();
    };

    return {
      showModal,
      lockForm,
      lockModel,
      lockRules,
      handleUnlock,
      submitForm,
      loading,
      cancel,
      reLogin,
    }
  },
});

const _withScopeId = n => (pushScopeId("data-v-b4894bf4"),n=n(),popScopeId(),n);
const _hoisted_1$3 = { class: "title" };
const _hoisted_2$2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("i", { class: "el-icon-unlock" }, null, -1));
const _hoisted_3$2 = { class: "unlock-modal" };

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Avatar = resolveComponent("Avatar");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_form = resolveComponent("el-form");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", _hoisted_1$3, [
      createTextVNode(" ⚡ " + toDisplayString(_ctx.$t('topbar.lock-locked')) + " ", 1),
      createBaseVNode("div", {
        class: "unlock-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleUnlock && _ctx.handleUnlock(...args)))
      }, [
        _hoisted_2$2,
        createTextVNode(" " + toDisplayString(_ctx.$t('topbar.lock-lock')), 1)
      ])
    ]),
    withDirectives(createBaseVNode("div", _hoisted_3$2, [
      createVNode(_component_Avatar, { class: "userinfo-unlock" }),
      createVNode(_component_el_form, {
        model: _ctx.lockModel,
        rules: _ctx.lockRules,
        ref: "lockForm"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form_item, { prop: "password" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                type: "password",
                modelValue: _ctx.lockModel.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.lockModel.password) = $event)),
                modelModifiers: { trim: true },
                autocomplete: "off",
                placeholder: _ctx.$t('topbar.lock-rules-password2'),
                onKeyup: withKeys(_ctx.submitForm, ["enter"]),
                style: {"width":"320px"}
              }, {
                append: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    class: "btn-unlock",
                    icon: "Right",
                    loading: _ctx.loading,
                    onClick: _ctx.submitForm
                  }, null, 8, ["loading", "onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "onKeyup"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                onClick: _ctx.cancel,
                type: "text"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t('public.cancel')), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_button, {
                onClick: _ctx.reLogin,
                type: "text"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t('topbar.lock-relogin')), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules"])
    ], 512), [
      [vShow, _ctx.showModal]
    ])
  ], 64))
}
var Unlock = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__scopeId',"data-v-b4894bf4"]]);

var Clock_vue_vue_type_style_index_0_lang = '';

const _sfc_main$2 = defineComponent({
  setup() {
    const rotate = reactive({
      h: '',
      m: '',
      s: '',
    });

    const getDeg = () => {
      var oDate = new Date();
      var h = oDate.getHours();
      var m = oDate.getMinutes();
      var s = oDate.getSeconds();
      var ms = oDate.getMilliseconds();

      rotate.h =
        'rotate(' + (h + m / 60 + s / 3600 + ms / 3600000) * 30 + 'deg)';
      rotate.m = 'rotate(' + (m + s / 60 + ms / 60000) * 6 + 'deg)';
      rotate.s = 'rotate(' + Math.ceil(s + ms / 1000 + 2) * 6 + 'deg)';
    };

    onBeforeMount(() => {
      getDeg();
    });

    return toRefs(rotate)
  },
});

const _hoisted_1$2 = { class: "clock-wrapper" };
const _hoisted_2$1 = { class: "clock-border" };
const _hoisted_3$1 = { class: "clock" };
const _hoisted_4$1 = /*#__PURE__*/createStaticVNode("<ul class=\"minute-marks\"><li class=\"five\"></li><li></li><li></li><li></li><li></li><li class=\"five\"></li><li></li><li></li><li></li><li></li><li class=\"five\"></li><li></li><li></li><li></li><li></li><li class=\"five\"></li><li></li><li></li><li></li><li></li><li class=\"five\"></li><li></li><li></li><li></li><li></li><li class=\"five\"></li><li></li><li></li><li></li><li></li></ul>", 1);
const _hoisted_5 = /*#__PURE__*/createBaseVNode("div", { class: "hand" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /*#__PURE__*/createBaseVNode("div", { class: "hand" }, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /*#__PURE__*/createBaseVNode("div", { class: "hand" }, null, -1);
const _hoisted_10 = [
  _hoisted_9
];

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        _hoisted_4$1,
        createBaseVNode("div", {
          class: "hour",
          style: normalizeStyle(!!_ctx.h ? { transform: _ctx.h } : {})
        }, _hoisted_6, 4),
        createBaseVNode("div", {
          class: "minute",
          style: normalizeStyle(!!_ctx.m ? { transform: _ctx.m } : {})
        }, _hoisted_8, 4),
        createBaseVNode("div", {
          class: "second",
          style: normalizeStyle(!!_ctx.s ? { transform: _ctx.s } : {})
        }, _hoisted_10, 4)
      ])
    ])
  ]))
}
var Clock = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2]]);

/*
 *           佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 13:05:47
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 12:48:23
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  });
  return time_str
}

var CurrentTime_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$1 = defineComponent({
  setup() {
    const currentTime = ref(null);
    const getTime = () => {
      currentTime.value = parseTime(new Date(), '{h}:{i}:{s}');
      requestAnimationFrame(getTime);
    };

    onMounted(() => {
      requestAnimationFrame(getTime);
    });

    return {
      currentTime,
      currentDate: parseTime(new Date(), '{y}-{m}-{d}'),
      week: `topbar.lock-week${new Date().getDay()}`,
    }
  },
});
const _hoisted_1$1 = { class: "current-time" };
const _hoisted_2 = { class: "time" };
const _hoisted_3 = { class: "date" };
const _hoisted_4 = { style: {"margin-left":"16px"} };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.currentTime), 1),
    createBaseVNode("div", _hoisted_3, [
      createTextVNode(toDisplayString(_ctx.currentDate) + " ", 1),
      createBaseVNode("span", _hoisted_4, toDisplayString(_ctx.$t(_ctx.week)), 1)
    ])
  ]))
}
var CurrentTime = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-60930876"]]);

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = defineComponent({
  name: 'lock',
  components: {
    Unlock,
    Clock,
    CurrentTime,
  },
  setup() {},
});
const _hoisted_1 = { class: "lock-wrap" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Unlock = resolveComponent("Unlock");
  const _component_Clock = resolveComponent("Clock");
  const _component_current_time = resolveComponent("current-time");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Unlock),
    createVNode(_component_Clock),
    createVNode(_component_current_time)
  ]))
}
var index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-65ae6f66"]]);

export { index as default };
