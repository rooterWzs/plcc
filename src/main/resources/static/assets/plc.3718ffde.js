import { g as getDevices, a as getPlcModelList, b as addPlc, e as editPlc, r as removePlc } from './config.9a689cdd.js';
import { _ as _export_sfc } from './index.a40168ce.js';
import { k as defineComponent, r as ref, q as reactive, C as toRefs, l as openBlock, J as createElementBlock, j as createVNode, n as withCtx, R as createTextVNode, S as toDisplayString, F as Fragment, L as createCommentVNode, m as createBlock, a9 as ElNotification, K as createBaseVNode, p as resolveComponent } from './element-plus.97092bf0.js';

var plc_vue_vue_type_style_index_0_lang = '';

const _sfc_main = defineComponent({
  name: 'PLC-LIST',
  setup() {
    const dialogVisible = ref(false);
    const dialogUploadKingIo = ref(false);
    const state = reactive({
      // 表格列配置，大部分属性跟el-table-column配置一样
      columns: [
        { type: 'selection', width: 56 },
        { label: 'test/list.index', type: 'index', width: 80 },
        {
          label: '设备名称',
          prop: 'deviceName',
        },
        {
          label: '设备系列',
          prop: 'deviceSeries',
        },
        {
          label: '设备驱动',
          prop: 'driver',
        },
        {
          label: '通信方式',
          prop: 'channelType',
        },
        {
          label: 'IP',
          prop: 'addr',
        },
        {
          label: '端口',
          prop: 'port',
        },
        {
          label: '设备状态',
          tdSlot: 'status',
        },
        {
          label: '更新时间',
          prop: 'updateTime',
          width: 230,
        },
        {
          label: 'public.operate',
          width: 180,
          align: 'center',
          tdSlot: 'operate', // 自定义单元格内容的插槽名称
        },
      ],
      // 搜索配置
      searchConfig: {
        labelWidth: '90px', // 必须带上单位
        inputWidth: '400px', // 必须带上单位
        fields: [
          {
            type: 'text',
            label: '设备名称',
            name: '设备名称',
            defaultValue: '',
          },
        ],
      },
      // 分页配置
      // paginationConfig: {
      //   layout: 'total, prev, pager, next, sizes', // 分页组件显示哪些功能
      //   pageSize: 10, // 每页条数
      //   pageSizes: [5, 10, 20, 50],
      //   style: { 'justify-content': 'flex-end' },
      // },
      selectedItems: [],
      batchDelete() {
        console.log(state.selectedItems);
      },
      // 选择
      handleSelectionChange(arr) {
        state.selectedItems = arr;
      },
      // 请求函数
      async getList(params) {
        // params是从组件接收的，包含分页和搜索字段。
        const { data } = await getDevices(params);
        // 必须要返回一个对象，包含data数组和total总数
        return {
          data: data,
          total: data.length,
        }
      },
    });
    const table = ref(null);
    const refresh = () => {
      table.value.refresh();
    };

    const form = reactive({
      deviceName: '',
      deviceSeries: '',
      driver: 'S71200Tcp',
      port: '',
      addr: '',
      channelType: ref('Ethernet'), // Ethernet | SerialPort
      // serialPortConfig: {
      //   portName: "",
      //   baudRate: 9600,
      //   dataBits: 8,
      //   stopBits: 1,
      //   parity: 0
      // },
      description: '',
      op: 'add',
      seriesArr: [],
      series: '',
      unitIdentifier: '',
    });

    const handleChange = value => {
      form.deviceSeries = value[1];
      form.driver = value[1];
    };

    const changeChannelType = channelType => {
      if (channelType == 'Ethernet') {
        form.addr = 'xx.xx.xx.xx';
        form.port = 9600;
      } else if (channelType == 'SerialPort') {
        form.addr = 'COM-9600-N-1';
        // form.serialPortConfig = {
        //   portName: "COM1",
        //   baudRate: 9600,
        //   dataBits: 8,
        //   stopBits: 1,
        //   parity: 0
        // };
      }
    };
    const add = () => {
      let initForm = {
        deviceName: '',
        deviceSeries: '',
        driver: '',
        port: '',
        addr: '',
        channelType: ref('Ethernet'), // Ethernet | SerialPort
        // serialPortConfig: {
        //   portName: "",
        //   baudRate: 9600,
        //   dataBits: 8,
        //   stopBits: 1,
        //   parity: 0
        // },
        description: '',
        op: 'add',
        seriesArr: [],
        series: '',
      };
      Object.assign(form, initForm);
      dialogVisible.value = true;
    };
    const edit = value => {
      // form = value;
      Object.assign(form, value);
      form.op = 'edit';
      form.seriesArr = JSON.parse(form.series);
      dialogVisible.value = true;
    };

    async function onSubmit() {
      let result = {};
      form.series = JSON.stringify(form.seriesArr);
      if (form.op == 'add') {
        result = await addPlc(form);
      } else {
        result = await editPlc(form);
      }

      ElNotification({
        title: '成功',
        message: result.msg,
        type: 'success',
      });
      dialogVisible.value = false;
      refresh();
    }

    async function deletePlc(value) {
      const { data, msg } = await removePlc(value);

      ElNotification({
        title: '成功',
        message: msg,
        type: 'success',
      });
      dialogVisible.value = false;
      refresh();
    }

    /**
     * plc 型号设置
     */
    const options = ref([]);
    PlcModelList();
    async function PlcModelList() {
      const data = await getPlcModelList();
      options.value = data;
    }

    const fileSuccess = () => {
      refresh();
    };

    return {
      ...toRefs(state),
      refresh,
      options,
      table,
      dialogVisible,
      form,
      dialogUploadKingIo,
      handleChange,
      onSubmit,
      add,
      edit,
      deletePlc,
      fileSuccess,
      changeChannelType,
    }
  },
});

const _hoisted_1 = /*#__PURE__*/createTextVNode("添加");
const _hoisted_2 = /*#__PURE__*/createTextVNode(" 导入KingIOServer设备表 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode("以太网");
const _hoisted_4 = /*#__PURE__*/createTextVNode("串口");
const _hoisted_5 = /*#__PURE__*/createTextVNode("确认");
const _hoisted_6 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_7 = /*#__PURE__*/createBaseVNode("div", { class: "el-upload__text" }, [
  /*#__PURE__*/createTextVNode(" Drop file here or "),
  /*#__PURE__*/createBaseVNode("em", null, "click to upload")
], -1);
const _hoisted_8 = /*#__PURE__*/createBaseVNode("div", { class: "el-upload__tip" }, " jpg/png files with a size less than 500kb ", -1);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_pro_table = resolveComponent("pro-table");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_upload_filled = resolveComponent("upload-filled");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_upload = resolveComponent("el-upload");

  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_pro_table, {
      ref: "table",
      title: _ctx.$t('test/list.title'),
      request: _ctx.getList,
      columns: _ctx.columns,
      search: _ctx.searchConfig,
      onSelectionChange: _ctx.handleSelectionChange
    }, {
      toolbar: withCtx(() => [
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Plus",
          onClick: _ctx.add
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Plus",
          onClick: _cache[0] || (_cache[0] = $event => (_ctx.dialogUploadKingIo = true))
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Refresh",
          onClick: _ctx.refresh
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('test/list.refresh')), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      status: withCtx(({row}) => [
        createVNode(_component_el_tag, {
          type: row.active === true ? 'success' : 'error'
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(row.active === true ? '在线' : '离线'), 1)
          ]),
          _: 2
        }, 1032, ["type"])
      ]),
      operate: withCtx((scope) => [
        createVNode(_component_el_button, {
          size: "small",
          type: "primary",
          onClick: $event => (_ctx.edit(scope.row))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('public.edit')), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]),
        createVNode(_component_el_button, {
          size: "small",
          type: "danger",
          onClick: $event => (_ctx.deletePlc(scope.row))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('public.delete')), 1)
          ]),
          _: 2
        }, 1032, ["onClick"])
      ]),
      _: 1
    }, 8, ["title", "request", "columns", "search", "onSelectionChange"]),
    createVNode(_component_el_dialog, {
      modelValue: _ctx.dialogVisible,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((_ctx.dialogVisible) = $event)),
      title: _ctx.form.op == 'add' ? '添加设备' : '更新设备',
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, {
          model: _ctx.form,
          "label-width": "auto"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "设备名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.form.deviceName,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.form.deviceName) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "设备品牌" }, {
              default: withCtx(() => [
                createVNode(_component_el_cascader, {
                  modelValue: _ctx.form.seriesArr,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.form.seriesArr) = $event)),
                  options: _ctx.options,
                  onChange: _ctx.handleChange
                }, null, 8, ["modelValue", "options", "onChange"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "接入方式" }, {
              default: withCtx(() => [
                createVNode(_component_el_radio_group, {
                  modelValue: _ctx.form.channelType,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((_ctx.form.channelType) = $event)),
                  onChange: _cache[4] || (_cache[4] = $event => (_ctx.changeChannelType(_ctx.form.channelType)))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, {
                      border: "",
                      label: "Ethernet"
                    }, {
                      default: withCtx(() => [
                        _hoisted_3
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, {
                      border: "",
                      label: "SerialPort"
                    }, {
                      default: withCtx(() => [
                        _hoisted_4
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            (_ctx.form.channelType == 'Ethernet')
              ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_el_form_item, { label: "设备地址" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: _ctx.form.addr,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((_ctx.form.addr) = $event))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "设备端口" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: _ctx.form.port,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((_ctx.form.port) = $event))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ], 64))
              : createCommentVNode("", true),
            (_ctx.form.driver == 'ModbusTCP' || _ctx.form.driver == 'ModbusRTU')
              ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 1,
                  label: "站点ID"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: _ctx.form.unitIdentifier,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((_ctx.form.unitIdentifier) = $event))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }))
              : (_ctx.form.channelType == 'SerialPort')
                ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 2,
                    label: "设备地址"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: _ctx.form.addr,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((_ctx.form.addr) = $event))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }))
                : createCommentVNode("", true),
            createVNode(_component_el_form_item, { label: "设备描述" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.form.description,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((_ctx.form.description) = $event)),
                  type: "textarea"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit
                }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  onClick: _cache[10] || (_cache[10] = $event => (_ctx.dialogVisible = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue", "title"]),
    createVNode(_component_el_dialog, {
      modelValue: _ctx.dialogUploadKingIo,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((_ctx.dialogUploadKingIo) = $event)),
      title: "导入KINGIOServer设备列表",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_upload, {
          class: "upload-demo",
          drag: "",
          action: "/api/plc/import",
          multiple: false,
          "on-success": _ctx.fileSuccess
        }, {
          tip: withCtx(() => [
            _hoisted_8
          ]),
          default: withCtx(() => [
            createVNode(_component_el_icon, { class: "el-icon--upload" }, {
              default: withCtx(() => [
                createVNode(_component_upload_filled)
              ]),
              _: 1
            }),
            _hoisted_7
          ]),
          _: 1
        }, 8, ["on-success"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
var plc = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { plc as default };
