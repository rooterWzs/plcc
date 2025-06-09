import { _ as _export_sfc, u as useRouter, s as storeToRefs, a as useMenus, b as useRoute, c as useApp, d as defineStore, g as getItem, e as setItem, f as useErrorlog, h as useTags$1 } from './index.a40168ce.js';
import { k as defineComponent, l as openBlock, J as createElementBlock, K as createBaseVNode, a0 as pushScopeId, a1 as popScopeId, c as computed, m as createBlock, a2 as resolveDynamicComponent, L as createCommentVNode, S as toDisplayString, F as Fragment, p as resolveComponent, n as withCtx, j as createVNode, Q as renderList, Y as normalizeClass, r as ref, d as onBeforeMount, w as watch, a as getCurrentInstance, R as createTextVNode, q as reactive, a3 as withKeys, t as nextTick, o as onMounted, a4 as onBeforeUnmount, C as toRefs, a5 as withModifiers, N as withDirectives, a6 as vShow, O as normalizeStyle, a7 as KeepAlive } from './element-plus.97092bf0.js';
import { A as Avatar, u as useUserinfo } from './index.001b710e.js';
import { C as ChangeLang } from './ChangeLang.183ac43f.js';

var _imports_0 = "/assets/logo.1d6978fb.svg";

var Logo_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$d = defineComponent({
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push('/');
    };
    return { goHome }
  },
});


const _withScopeId$2 = n => (pushScopeId("data-v-5187cdb6"),n=n(),popScopeId(),n);
const _hoisted_1$5 = { class: "brand" };
const _hoisted_2$4 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/createBaseVNode("div", { class: "title" }, "PLC通信中间件", -1));

function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("img", {
      class: "logo",
      src: _imports_0,
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.goHome && _ctx.goHome(...args)))
    }),
    _hoisted_2$4
  ]))
}
var Logo = /*#__PURE__*/_export_sfc(_sfc_main$d, [['render',_sfc_render$d],['__scopeId',"data-v-5187cdb6"]]);

var Item_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$c = defineComponent({
  props: ['title', 'icon'],
  setup({ icon }) {
    const isCustomSvg = computed(() => icon && icon.startsWith('icon-'));

    return {
      isCustomSvg,
    }
  },
});

function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    (_ctx.isCustomSvg)
      ? (openBlock(), createBlock(_component_svg_icon, {
          key: 0,
          class: "icon",
          name: _ctx.icon
        }, null, 8, ["name"]))
      : (!!_ctx.icon)
        ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
            key: 1,
            class: "icon"
          }))
        : createCommentVNode("", true),
    createBaseVNode("span", null, toDisplayString(_ctx.$t(_ctx.title)), 1)
  ], 64))
}
var Item = /*#__PURE__*/_export_sfc(_sfc_main$c, [['render',_sfc_render$c],['__scopeId',"data-v-89f3cc9a"]]);

const _sfc_main$b = defineComponent({
  name: 'Submenu',
  components: {
    Item,
  },
  props: {
    menu: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
  },
});

function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_item = resolveComponent("item");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_submenu = resolveComponent("submenu", true);
  const _component_el_sub_menu = resolveComponent("el-sub-menu");

  return (!_ctx.menu.children)
    ? (openBlock(), createBlock(_component_el_menu_item, {
        key: 0,
        index: _ctx.menu.url
      }, {
        default: withCtx(() => [
          createVNode(_component_item, {
            icon: _ctx.menu.icon,
            title: _ctx.menu.title
          }, null, 8, ["icon", "title"])
        ]),
        _: 1
      }, 8, ["index"]))
    : (openBlock(), createBlock(_component_el_sub_menu, {
        key: 1,
        index: _ctx.menu.url
      }, {
        title: withCtx(() => [
          createVNode(_component_item, {
            icon: _ctx.menu.icon,
            title: _ctx.menu.title
          }, null, 8, ["icon", "title"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menu.children, (submenu) => {
            return (openBlock(), createBlock(_component_submenu, {
              key: submenu.url,
              "is-nest": true,
              menu: submenu
            }, null, 8, ["menu"]))
          }), 128))
        ]),
        _: 1
      }, 8, ["index"]))
}
var Submenu = /*#__PURE__*/_export_sfc(_sfc_main$b, [['render',_sfc_render$b]]);

const menuBg = "#304156";
const menuTextColor = "#fff";
const menuActiveTextColor = "#409eff";
var config = {
	menuBg: menuBg,
	menuTextColor: menuTextColor,
	menuActiveTextColor: menuActiveTextColor
};

var Menus_vue_vue_type_style_index_0_lang = '';

var Menus_vue_vue_type_style_index_1_scoped_true_lang = '';

const _sfc_main$a = defineComponent({
  components: {
    Submenu,
  },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  setup() {
    const route = useRoute();
    const { menus } = storeToRefs(useMenus());

    return {
      menus,
      activePath: computed(() => route.path),
      variables: computed(() => config),
    }
  },
});

function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_submenu = resolveComponent("submenu");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");

  return (openBlock(), createBlock(_component_el_scrollbar, { class: "scroll" }, {
    default: withCtx(() => [
      createVNode(_component_el_menu, {
        class: "menu",
        mode: _ctx.mode,
        collapse: _ctx.collapse,
        uniqueOpened: true,
        router: true,
        "default-active": _ctx.activePath,
        "background-color": _ctx.variables.menuBg,
        "text-color": _ctx.variables.menuTextColor,
        "active-text-color": _ctx.variables.menuActiveTextColor
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu) => {
            return (openBlock(), createBlock(_component_submenu, {
              key: menu.url,
              menu: menu
            }, null, 8, ["menu"]))
          }), 128))
        ]),
        _: 1
      }, 8, ["mode", "collapse", "default-active", "background-color", "text-color", "active-text-color"])
    ]),
    _: 1
  }))
}
var Menus = /*#__PURE__*/_export_sfc(_sfc_main$a, [['render',_sfc_render$a],['__scopeId',"data-v-12fbc1d6"]]);

var index_vue_vue_type_style_index_0_scoped_true_lang$4 = '';

const _sfc_main$9 = defineComponent({
  components: {
    Logo,
    Menus,
  },
  setup() {
    const appStore = useApp();
    const { sidebar, device } = storeToRefs(appStore);
    const { setCollapse } = appStore;
    const collapse = computed(() => sidebar.value.collapse);

    const closeSidebar = () => {
      setCollapse(1);
    };

    return {
      collapse,
      device,
      closeSidebar,
    }
  },
});

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_logo = resolveComponent("logo");
  const _component_menus = resolveComponent("menus");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(["left", { collapse: _ctx.collapse, mobile: _ctx.device === 'mobile' }])
    }, [
      createVNode(_component_logo),
      createVNode(_component_menus, { collapse: _ctx.collapse }, null, 8, ["collapse"])
    ], 2),
    createBaseVNode("div", {
      class: "mask",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.closeSidebar && _ctx.closeSidebar(...args)))
    })
  ], 64))
}
var Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$9, [['render',_sfc_render$9],['__scopeId',"data-v-0029e011"]]);

var Hamburger_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$8 = defineComponent({
  setup() {
    const appStore = useApp();
    const { sidebar } = storeToRefs(appStore);
    const { setCollapse } = appStore;
    const handleToggleMenu = () => {
      setCollapse(+!sidebar.value.collapse);
    };
    return {
      collapse: computed(() => sidebar.value.collapse),
      handleToggleMenu,
    }
  },
});

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Fold = resolveComponent("Fold");
  const _component_el_icon = resolveComponent("el-icon");

  return (openBlock(), createBlock(_component_el_icon, {
    size: 20,
    class: normalizeClass(["fold-btn", { collapse: _ctx.collapse }]),
    onClick: _ctx.handleToggleMenu
  }, {
    default: withCtx(() => [
      createVNode(_component_Fold)
    ]),
    _: 1
  }, 8, ["class", "onClick"]))
}
var Hamburger = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render',_sfc_render$8],['__scopeId',"data-v-18308398"]]);

var defaultSettings = {
  menus: {
    // 菜单栏是否显示
    isShow: true,
    // 菜单栏排列方式
    mode: 'vertical', // horizontal: 水平排列   vertical: 垂直排列
  },
  tagsbar: {
    // 标签栏是否显示
    isShow: true,
  },
  breadcrumbs: {
    // 面包屑导航是否显示
    isShow: true,
  },
  topbar: {
    // 顶栏是否固定
    isFixed: true,
  },
  layout: {
    // 是否流式布局
    isFluid: true,
  },
};

/*
 * _______________#########_______________________
 * ______________############_____________________
 * ______________#############____________________
 * _____________##__###########___________________
 * ____________###__######_#####__________________
 * ____________###_#######___####_________________
 * ___________###__##########_####________________
 * __________####__###########_####_______________
 * ________#####___###########__#####_____________
 * _______######___###_########___#####___________
 * _______#####___###___########___######_________
 * ______######___###__###########___######_______
 * _____######___####_##############__######______
 * ____#######__#####################_#######_____
 * ____#######__##############################____
 * ___#######__######_#################_#######___
 * ___#######__######_######_#########___######___
 * ___#######____##__######___######_____######___
 * ___#######________######____#####_____#####____
 * ____######________#####_____#####_____####_____
 * _____#####________####______#####_____###______
 * ______#####______;###________###______#________
 * ________##_______####________####______________
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-07-23 16:10:49
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:47:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useLayoutsettings = defineStore('layoutSettings', {
  state: () => getItem('defaultSettings') || defaultSettings,
  actions: {
    saveSettings(data) {
      Object.entries(data).forEach(([key, value]) => {
        this[key] = value;
      });
      setItem('defaultSettings', data);
    },
  },
});

var Breadcrumbs_vue_vue_type_style_index_0_scoped_true_lang = '';

var Breadcrumbs_vue_vue_type_style_index_1_lang = '';

const _sfc_main$7 = defineComponent({
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { device } = storeToRefs(useApp());
    const router = useRouter();
    const route = router.currentRoute; // 这里不使用useRoute获取当前路由，否则下面watch监听路由的时候会有警告
    const breadcrumbs = ref([]);
    const defaultSettings = useLayoutsettings();
    const isHorizontalMenu = computed(
      () => defaultSettings.menus.mode === 'horizontal'
    );

    const getBreadcrumbs = route => {
      const home = [{ path: '/', meta: { title: proxy.$t('menu.homepage') } }];
      if (route.name === 'home') {
        return home
      } else {
        const matched = route.matched.filter(
          item => !!item.meta && !!item.meta.title
        );

        return [...home, ...matched]
      }
    };

    onBeforeMount(() => {
      breadcrumbs.value = getBreadcrumbs(route.value);
    });

    watch(
      route,
      newRoute => {
        route.value.meta.truetitle = proxy.$t(route.value.meta.title);
        breadcrumbs.value = getBreadcrumbs(newRoute);
        emit('on-breadcrumbs-change', breadcrumbs.value.length > 1);
      },
      {
        immediate: true,
      }
    );

    return {
      device,
      breadcrumbs,
      isHorizontalMenu,
    }
  },
});

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
  const _component_el_breadcrumb = resolveComponent("el-breadcrumb");

  return (openBlock(), createBlock(_component_el_breadcrumb, {
    "separator-class": "el-icon-arrow-right",
    class: normalizeClass(["breadcrumb", {
      mobile: _ctx.device === 'mobile',
      show: _ctx.isHorizontalMenu,
      hide: _ctx.breadcrumbs.length <= 1,
    }])
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.breadcrumbs, (item, index) => {
        return (openBlock(), createBlock(_component_el_breadcrumb_item, {
          key: index,
          class: normalizeClass({ no_link: index === _ctx.breadcrumbs.length - 1 }),
          to: index < _ctx.breadcrumbs.length - 1 ? item.path : ''
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t(item.meta.title)), 1)
          ]),
          _: 2
        }, 1032, ["class", "to"]))
      }), 128))
    ]),
    _: 1
  }, 8, ["class"]))
}
var Breadcrumbs = /*#__PURE__*/_export_sfc(_sfc_main$7, [['render',_sfc_render$7],['__scopeId',"data-v-691fa60c"]]);

var LockModal_vue_vue_type_style_index_0_lang = '';

const _sfc_main$6 = defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const dialogVisible = ref(false);
    const lockForm = ref(null);
    const lockModel = reactive({
      password: '',
    });
    const lockRules = reactive({
      password: [
        { required: true, message: proxy.$t('topbar.lock-rules-password') },
      ],
    });
    const submitForm = () => {
      lockForm.value.validate(valid => {
        if (!valid) {
          return false
        }

        // 对密码加密并跟token保存在一起
        useApp().setScreenCode(lockModel.password);

        // 跳转到锁屏页面
        router.push('/lock?redirect=' + router.currentRoute.value.fullPath);
      });
    };

    return {
      dialogVisible,
      lockForm,
      lockModel,
      lockRules,
      submitForm,
    }
  },
});

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_Avatar = resolveComponent("Avatar");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");

  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_el_dropdown_item, {
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.dialogVisible = true))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t('topbar.lock-title')), 1)
      ]),
      _: 1
    }),
    createVNode(_component_el_dialog, {
      title: _ctx.$t('topbar.lock-title'),
      modelValue: _ctx.dialogVisible,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.dialogVisible) = $event)),
      width: "640px",
      "custom-class": "lock-modal",
      "append-to-body": ""
    }, {
      default: withCtx(() => [
        createVNode(_component_Avatar),
        createVNode(_component_el_form, {
          model: _ctx.lockModel,
          rules: _ctx.lockRules,
          ref: "lockForm",
          "label-width": "90px"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, {
              label: _ctx.$t('topbar.lock-password'),
              prop: "password"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  type: "password",
                  modelValue: _ctx.lockModel.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.lockModel.password) = $event)),
                  modelModifiers: { trim: true },
                  autocomplete: "off",
                  onKeyup: withKeys(_ctx.submitForm, ["enter"])
                }, null, 8, ["modelValue", "onKeyup"])
              ]),
              _: 1
            }, 8, ["label"]),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  class: "submit-btn",
                  type: "primary",
                  onClick: _ctx.submitForm
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t('topbar.lock-title')), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ], 64))
}
var LockModal = /*#__PURE__*/_export_sfc(_sfc_main$6, [['render',_sfc_render$6]]);

var Userinfo_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$5 = defineComponent({
  components: {
    LockModal,
  },
  setup() {
    const router = useRouter();

    const { userinfo } = useUserinfo();

    // 退出
    const logout = () => {
      // 清除token
      useApp().clearToken();
      router.push('/login');
    };

    return {
      userinfo,
      logout,
    }
  },
});

const _withScopeId$1 = n => (pushScopeId("data-v-0180529a"),n=n(),popScopeId(),n);
const _hoisted_1$4 = { class: "userinfo" };
const _hoisted_2$3 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("i", { class: "el-icon-user" }, null, -1));
const _hoisted_3$1 = /*#__PURE__*/createTextVNode(" admin ");
const _hoisted_4$1 = ["src"];

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_lock_modal = resolveComponent("lock-modal");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");

  return (openBlock(), createBlock(_component_el_dropdown, { trigger: "hover" }, {
    dropdown: withCtx(() => [
      createVNode(_component_el_dropdown_menu, null, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('topbar.center')), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_dropdown_item, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('topbar.password')), 1)
            ]),
            _: 1
          }),
          createVNode(_component_lock_modal),
          createVNode(_component_el_dropdown_item, { onClick: _ctx.logout }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('topbar.logout')), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$4, [
        (!_ctx.userinfo)
          ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _hoisted_2$3,
              _hoisted_3$1
            ], 64))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("img", {
                class: "avatar",
                src: _ctx.userinfo.avatar
              }, null, 8, _hoisted_4$1),
              createTextVNode(" " + toDisplayString(_ctx.userinfo.name), 1)
            ], 64))
      ])
    ]),
    _: 1
  }))
}
var Userinfo = /*#__PURE__*/_export_sfc(_sfc_main$5, [['render',_sfc_render$5],['__scopeId',"data-v-0180529a"]]);

var index_vue_vue_type_style_index_0_scoped_true_lang$3 = '';

const _sfc_main$4 = defineComponent({
  name: 'ErrorLog',
  setup() {
    const dialogTableVisible = ref(false);
    const errorStore = useErrorlog();
    const { logs: errorLogs } = storeToRefs(errorStore);
    const { clearErrorLog } = errorStore;
    const clearAll = () => {
      dialogTableVisible.value = false;
      clearErrorLog();
    };

    return {
      dialogTableVisible,
      errorLogs,
      clearAll,
    }
  },
});

const _withScopeId = n => (pushScopeId("data-v-6f504d93"),n=n(),popScopeId(),n);
const _hoisted_1$3 = {
  key: 0,
  class: "errLog-container"
};
const _hoisted_2$2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { style: {"padding-right":"10px"} }, "错误日志", -1));
const _hoisted_3 = /*#__PURE__*/createTextVNode(" Clear All ");
const _hoisted_4 = { style: {"margin-bottom":"10px"} };
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", {
  class: "message-title",
  style: {"padding-right":"16px"}
}, " 页面: ", -1));
const _hoisted_6 = { style: {"margin-bottom":"10px"} };
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { class: "message-title" }, "事件源:", -1));
const _hoisted_8 = { style: {"margin-bottom":"10px"} };
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", { class: "message-title" }, "错误提示:", -1));
const _hoisted_10 = { key: 0 };
const _hoisted_11 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("span", {
  class: "message-title",
  style: {"padding-right":"16px"}
}, " 接口地址: ", -1));

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_dialog = resolveComponent("el-dialog");

  return (_ctx.errorLogs.length > 0)
    ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_el_badge, {
          "is-dot": true,
          onClick: _cache[0] || (_cache[0] = $event => (_ctx.dialogTableVisible = true))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              style: {"padding":"8px 10px"},
              size: "small",
              type: "danger"
            }, {
              default: withCtx(() => [
                createVNode(_component_svg_icon, { name: "bug" })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.dialogTableVisible) = $event)),
          width: "80%",
          "append-to-body": ""
        }, {
          title: withCtx(() => [
            _hoisted_2$2,
            createVNode(_component_el_button, {
              size: "mini",
              type: "primary",
              icon: "el-icon-delete",
              onClick: _ctx.clearAll
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_table, {
              data: _ctx.errorLogs,
              border: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, { label: "Message" }, {
                  default: withCtx(({ row }) => [
                    createBaseVNode("div", _hoisted_4, [
                      _hoisted_5,
                      createVNode(_component_el_tag, { type: "success" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.url), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      _hoisted_7,
                      createVNode(_component_el_tag, { type: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.info && row.info), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      _hoisted_9,
                      createVNode(_component_el_tag, { type: "danger" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.err && row.err.message), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    (row.err && row.err.config)
                      ? (openBlock(), createElementBlock("div", _hoisted_10, [
                          _hoisted_11,
                          createVNode(_component_el_tag, { type: "info" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.err && row.err.config && row.err.config.url), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]))
                      : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, { label: "Stack" }, {
                  default: withCtx(({ row }) => [
                    createTextVNode(toDisplayString(row.err && row.err.stack), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]))
    : createCommentVNode("", true)
}
var ErrorLog = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render$4],['__scopeId',"data-v-6f504d93"]]);

var index_vue_vue_type_style_index_0_scoped_true_lang$2 = '';

const _sfc_main$3 = defineComponent({
  components: {
    Logo,
    Hamburger,
    Breadcrumbs,
    Userinfo,
    ChangeLang,
    ErrorLog,
  },
  setup() {
    const defaultSettings = useLayoutsettings();

    const { device } = storeToRefs(useApp());

    const isHorizontalMenu = computed(
      () => defaultSettings.menus.mode === 'horizontal'
    );

    const isShowLogo = computed(
      () => isHorizontalMenu.value || device.value === 'mobile'
    );

    const isShowHamburger = computed(() => !isHorizontalMenu.value);

    const isShowBreadcrumbs = computed(
      () => defaultSettings.breadcrumbs.isShow && !isHorizontalMenu.value
    );

    return {
      device,
      isHorizontalMenu,
      isShowLogo,
      isShowHamburger,
      isShowBreadcrumbs,
    }
  },
});
const _hoisted_1$2 = { class: "navigation" };
const _hoisted_2$1 = { class: "action" };

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_logo = resolveComponent("logo");
  const _component_hamburger = resolveComponent("hamburger");
  const _component_breadcrumbs = resolveComponent("breadcrumbs");
  const _component_error_log = resolveComponent("error-log");
  const _component_userinfo = resolveComponent("userinfo");
  const _component_change_lang = resolveComponent("change-lang");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["header", { 'no-border': _ctx.isHorizontalMenu }])
  }, [
    createBaseVNode("div", _hoisted_1$2, [
      (_ctx.isShowLogo)
        ? (openBlock(), createBlock(_component_logo, {
            key: 0,
            class: normalizeClass(["mobile", { 'show-title': _ctx.isHorizontalMenu }])
          }, null, 8, ["class"]))
        : createCommentVNode("", true),
      (_ctx.isShowHamburger)
        ? (openBlock(), createBlock(_component_hamburger, { key: 1 }))
        : createCommentVNode("", true),
      (_ctx.isShowBreadcrumbs)
        ? (openBlock(), createBlock(_component_breadcrumbs, { key: 2 }))
        : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(_component_error_log),
      createVNode(_component_userinfo),
      createVNode(_component_change_lang)
    ])
  ], 2))
}
var Topbar = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__scopeId',"data-v-2d265d1f"]]);

/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                神兽保佑            永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-08-13 14:50:23
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useScrollbar = tagsItem => {
  const scrollContainer = ref(null);
  const scrollLeft = ref(0);

  const doScroll = val => {
    scrollLeft.value = val;
    scrollContainer.value.setScrollLeft(scrollLeft.value);
  };

  const handleScroll = e => {
    const $wrap = scrollContainer.value.wrap$;
    if ($wrap.offsetWidth + scrollLeft.value > $wrap.children[0].scrollWidth) {
      doScroll($wrap.children[0].scrollWidth - $wrap.offsetWidth);
      return
    } else if (scrollLeft.value < 0) {
      doScroll(0);
      return
    }
    const eventDelta = e.wheelDelta || -e.deltaY;
    doScroll(scrollLeft.value - eventDelta / 4);
  };

  const moveToTarget = currentTag => {
    const $wrap = scrollContainer.value.wrap$;
    const tagList = tagsItem.value;

    let firstTag = null;
    let lastTag = null;

    if (tagList.length > 0) {
      firstTag = tagList[0];
      lastTag = tagList[tagList.length - 1];
    }
    if (firstTag === currentTag) {
      doScroll(0);
    } else if (lastTag === currentTag) {
      doScroll($wrap.children[0].scrollWidth - $wrap.offsetWidth);
    } else {
      const el = currentTag.$el.nextElementSibling;

      el.offsetLeft + el.offsetWidth > $wrap.offsetWidth
        ? doScroll(el.offsetLeft - el.offsetWidth)
        : doScroll(0);
    }
  };

  return {
    scrollContainer,
    handleScroll,
    moveToTarget,
  }
};

/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                神兽保佑            永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 18:28:33
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const isAffix = tag => {
  return !!tag.meta && !!tag.meta.affix
};

const useTags = () => {
  const tagStore = useTags$1();
  const { tagList } = storeToRefs(tagStore);
  const { addTag, delTag, saveActivePosition, updateTagList } = tagStore;
  const router = useRouter();
  const route = router.currentRoute;
  const routes = computed(() => router.getRoutes());

  const tagsItem = ref([]);

  const setItemRef = (i, el) => {
    tagsItem.value[i] = el;
  };

  const scrollbar = useScrollbar(tagsItem);

  watch(
    () => tagList.value.length,
    () => {
      tagsItem.value = [];
    }
  );

  const filterAffixTags = routes => {
    return routes.filter(route => isAffix(route))
  };

  const initTags = () => {
    const affixTags = filterAffixTags(routes.value);

    for (const tag of affixTags) {
      if (tag.name) {
        addTag(tag);
      }
    }
    // 不在路由中的所有标签，需要删除
    const noUseTags = tagList.value.filter(tag =>
      routes.value.every(route => route.name !== tag.name)
    );
    noUseTags.forEach(tag => {
      delTag(tag);
    });
  };

  const addTagList = () => {
    const tag = route.value;
    if (!!tag.name && tag.matched[0].components.default.name === 'layout') {
      addTag(tag);
    }
  };

  const saveTagPosition = tag => {
    const index = tagList.value.findIndex(
      item => item.fullPath === tag.fullPath
    );

    saveActivePosition(Math.max(0, index));
  };

  const moveToCurrentTag = () => {
    nextTick(() => {
      for (const tag of tagsItem.value) {
        if (!!tag && tag.to.path === route.value.path) {
          scrollbar.moveToTarget(tag);

          if (tag.to.fullPath !== route.value.fullPath) {
            updateTagList(route.value);
          }
          break
        }
      }
    });
  };

  onBeforeMount(() => {
    initTags();
    addTagList();
    moveToCurrentTag();
  });

  watch(route, (newRoute, oldRoute) => {
    saveTagPosition(oldRoute); // 保存标签的位置
    addTagList();
    moveToCurrentTag();
  });

  return {
    tagList,
    setItemRef,
    isAffix,
    ...scrollbar,
  }
};

/*
 *
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:52:30
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useContextMenu = tagList => {
  const router = useRouter();
  const route = useRoute();

  const tagsStore = useTags$1();

  const state = reactive({
    visible: false,
    top: 0,
    left: 0,
    selectedTag: {},
    openMenu(tag, e) {
      state.visible = true;
      state.left = e.clientX;
      state.top = e.clientY;
      state.selectedTag = tag;
    },
    closeMenu() {
      state.visible = false;
    },
    refreshSelectedTag(tag) {
      tagsStore.deCacheList(tag);
      const { fullPath } = tag;
      nextTick(() => {
        router.replace({
          path: '/redirect' + fullPath,
        });
      });
    },
    closeTag(tag) {
      if (isAffix(tag)) return

      const closedTagIndex = tagList.value.findIndex(
        item => item.fullPath === tag.fullPath
      );
      tagsStore.delTag(tag);
      if (isActive(tag)) {
        toLastTag(closedTagIndex - 1);
      }
    },
    closeOtherTags() {
      tagsStore.delOtherTags(state.selectedTag);
      router.push(state.selectedTag);
    },
    closeLeftTags() {
      state.closeSomeTags('left');
    },
    closeRightTags() {
      state.closeSomeTags('right');
    },
    closeSomeTags(direction) {
      const index = tagList.value.findIndex(
        item => item.fullPath === state.selectedTag.fullPath
      );

      if (
        (direction === 'left' && index <= 0) ||
        (direction === 'right' && index >= tagList.value.length - 1)
      ) {
        return
      }

      const needToClose =
        direction === 'left'
          ? tagList.value.slice(0, index)
          : tagList.value.slice(index + 1);
      tagsStore.delSomeTags(needToClose);
      router.push(state.selectedTag);
    },
    closeAllTags() {
      tagsStore.delAllTags();
      router.push('/');
    },
  });

  const isActive = tag => {
    return tag.fullPath === route.fullPath
  };

  const toLastTag = lastTagIndex => {
    const lastTag = tagList.value[lastTagIndex];
    if (lastTag) {
      router.push(lastTag.fullPath);
    } else {
      router.push('/');
    }
  };

  onMounted(() => {
    document.addEventListener('click', state.closeMenu);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', state.closeMenu);
  });

  return toRefs(state)
};

var index_vue_vue_type_style_index_0_scoped_true_lang$1 = '';

const _sfc_main$2 = defineComponent({
  name: 'Tagsbar',
  mounted() {
    const instance = getCurrentInstance();
    instance.appContext.config.globalProperties.$tagsbar = this;
  },
  setup() {
    const defaultSettings = useLayoutsettings();
    const isTagsbarShow = computed(() => defaultSettings.tagsbar.isShow);

    const tags = useTags();
    const contextMenu = useContextMenu(tags.tagList);

    const onScroll = e => {
      tags.handleScroll(e);
      contextMenu.closeMenu.value();
    };

    return {
      isTagsbarShow,
      onScroll,
      ...tags,
      ...contextMenu,
    }
  },
});
const _hoisted_1$1 = ["onClick", "onMouseup", "onContextmenu"];
const _hoisted_2 = { class: "title" };

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Close = resolveComponent("Close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_router_link = resolveComponent("router-link");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(["tags-container", { hide: !_ctx.isTagsbarShow }])
    }, [
      createVNode(_component_el_scrollbar, {
        ref: "scrollContainer",
        vertical: false,
        class: "scroll-container",
        onWheel: withModifiers(_ctx.onScroll, ["prevent"])
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tagList, (tag, i) => {
            return (openBlock(), createBlock(_component_router_link, {
              key: tag.fullPath,
              to: tag,
              ref_for: true,
              ref: el => _ctx.setItemRef(i, el),
              custom: ""
            }, {
              default: withCtx(({ navigate, isExactActive }) => [
                createBaseVNode("div", {
                  class: normalizeClass(["tags-item", isExactActive ? 'active' : '']),
                  onClick: navigate,
                  onMouseup: withModifiers($event => (_ctx.closeTag(tag)), ["middle"]),
                  onContextmenu: withModifiers($event => (_ctx.openMenu(tag, $event)), ["prevent"])
                }, [
                  createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.$t(tag.title)), 1),
                  (!_ctx.isAffix(tag))
                    ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: "el-icon-close",
                        onClick: withModifiers($event => (_ctx.closeTag(tag)), ["prevent","stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Close)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))
                    : createCommentVNode("", true)
                ], 42, _hoisted_1$1)
              ]),
              _: 2
            }, 1032, ["to"]))
          }), 128))
        ]),
        _: 1
      }, 8, ["onWheel"])
    ], 2),
    withDirectives(createBaseVNode("ul", {
      style: normalizeStyle({ left: _ctx.left + 'px', top: _ctx.top + 'px' }),
      class: "contextmenu"
    }, [
      createBaseVNode("li", {
        onClick: _cache[0] || (_cache[0] = $event => (_ctx.refreshSelectedTag(_ctx.selectedTag)))
      }, toDisplayString(_ctx.$t('tags.refresh')), 1),
      (!_ctx.isAffix(_ctx.selectedTag))
        ? (openBlock(), createElementBlock("li", {
            key: 0,
            onClick: _cache[1] || (_cache[1] = $event => (_ctx.closeTag(_ctx.selectedTag)))
          }, toDisplayString(_ctx.$t('tags.close')), 1))
        : createCommentVNode("", true),
      createBaseVNode("li", {
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.closeOtherTags && _ctx.closeOtherTags(...args)))
      }, toDisplayString(_ctx.$t('tags.other')), 1),
      createBaseVNode("li", {
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.closeLeftTags && _ctx.closeLeftTags(...args)))
      }, toDisplayString(_ctx.$t('tags.left')), 1),
      createBaseVNode("li", {
        onClick: _cache[4] || (_cache[4] = (...args) => (_ctx.closeRightTags && _ctx.closeRightTags(...args)))
      }, toDisplayString(_ctx.$t('tags.right')), 1),
      createBaseVNode("li", {
        onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.closeAllTags && _ctx.closeAllTags(...args)))
      }, toDisplayString(_ctx.$t('tags.all')), 1)
    ], 4), [
      [vShow, _ctx.visible]
    ])
  ], 64))
}
var Tagsbar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__scopeId',"data-v-0afbb5f3"]]);

const _sfc_main$1 = defineComponent({
  setup() {
    const route = useRoute();
    const { cacheList } = storeToRefs(useTags$1());
    const key = computed(() => route.fullPath);

    return {
      cacheList,
      key,
    }
  },
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");

  return (openBlock(), createBlock(_component_router_view, null, {
    default: withCtx(({ Component }) => [
      (openBlock(), createBlock(KeepAlive, { include: _ctx.cacheList }, [
        (openBlock(), createBlock(resolveDynamicComponent(Component), { key: _ctx.key }))
      ], 1032, ["include"]))
    ]),
    _: 1
  }))
}
var Content = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1]]);

/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                神兽保佑            永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 19:02:14
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const WIDTH = 768;
const useResizeHandler = () => {
  const appStore = useApp();
  const { sidebar } = storeToRefs(appStore);
  const { setDevice, setCollapse } = appStore;
  const collapse = computed(() => sidebar.value.collapse);

  const isMobile = () => {
    return window.innerWidth < WIDTH
  };

  const resizeHandler = () => {
    if (isMobile()) {
      setDevice('mobile');
      setCollapse(1);
    } else {
      setDevice('desktop');
      setCollapse(collapse.value);
    }
  };

  onBeforeMount(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });
};

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = defineComponent({
  name: 'layout',
  components: {
    Sidebar,
    Topbar,
    Menus,
    Tagsbar,
    Breadcrumbs,
    Content,
  },
  setup() {
    useResizeHandler();
    const defaultSettings = useLayoutsettings();
    const isFluid = defaultSettings.layout.isFluid;
    const isTopbarFixed = defaultSettings.topbar.isFixed;
    const isMenusShow = defaultSettings.menus.isShow;
    const isHorizontalMenu = defaultSettings.menus.mode === 'horizontal';
    const isBreadcrumbsShow = computed(
      () => isHorizontalMenu && defaultSettings.breadcrumbs.isShow
    );
    const paddingFlag = ref(true);
    const handleBreadcrumbsChange = boo => {
      paddingFlag.value = boo;
    };

    return {
      isFluid,
      isTopbarFixed,
      isMenusShow,
      isHorizontalMenu,
      isBreadcrumbsShow,
      paddingFlag,
      handleBreadcrumbsChange,
    }
  },
});
const _hoisted_1 = { class: "top" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sidebar = resolveComponent("sidebar");
  const _component_topbar = resolveComponent("topbar");
  const _component_menus = resolveComponent("menus");
  const _component_tagsbar = resolveComponent("tagsbar");
  const _component_breadcrumbs = resolveComponent("breadcrumbs");
  const _component_Content = resolveComponent("Content");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["wrapper", { fluid: _ctx.isFluid }])
  }, [
    (_ctx.isMenusShow && !_ctx.isHorizontalMenu)
      ? (openBlock(), createBlock(_component_sidebar, { key: 0 }))
      : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(["right", { flex: _ctx.isTopbarFixed }])
    }, [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_topbar),
        (_ctx.isMenusShow && _ctx.isHorizontalMenu)
          ? (openBlock(), createBlock(_component_menus, {
              key: 0,
              mode: "horizontal"
            }))
          : createCommentVNode("", true),
        createVNode(_component_tagsbar),
        (_ctx.isBreadcrumbsShow)
          ? (openBlock(), createBlock(_component_breadcrumbs, {
              key: 1,
              onOnBreadcrumbsChange: _ctx.handleBreadcrumbsChange
            }, null, 8, ["onOnBreadcrumbsChange"]))
          : createCommentVNode("", true)
      ]),
      createBaseVNode("div", {
        class: normalizeClass(["main", { pt0: _ctx.isBreadcrumbsShow && _ctx.paddingFlag }])
      }, [
        createVNode(_component_Content)
      ], 2)
    ], 2)
  ], 2))
}
var index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b1ff81c8"]]);

export { index as default };
