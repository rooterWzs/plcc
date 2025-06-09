import { g as getDevices, c as getPlcRegisterList, d as getPlcDataTypeMap, f as getTagDataTypeList, h as getTagGroupList } from './config.9a689cdd.js';
import { k as service, _ as _export_sfc } from './index.a40168ce.js';
import { k as defineComponent, o as onMounted, q as reactive, a9 as ElNotification, r as ref, C as toRefs, l as openBlock, J as createElementBlock, K as createBaseVNode, j as createVNode, n as withCtx, R as createTextVNode, S as toDisplayString, F as Fragment, Q as renderList, aa as ElMessageBox, H as ElMessage, p as resolveComponent, m as createBlock } from './element-plus.97092bf0.js';

const getAllVars = (data, params) => {
  return service({
    url: '/api/var/list/' + params.current + '/' + params.size,
    method: 'post',
    data,
  })
};

const addVar = data => {
  return service({
    url: '/api/var/add',
    method: 'post',
    data,
  })
};

const editVar = data => {
  return service({
    url: '/api/var/edit',
    method: 'post',
    data,
  })
};

const removeVar = data => {
  return service({
    url: '/api/var/remove',
    method: 'post',
    data,
  })
};

const batchRemoveVar = data => {
  return service({
    url: '/api/var/batchRemove',
    method: 'post',
    data,
  })
};

// /api/IOServer/write/50d3bcde-1690-4b0c-8903-d886c3805b54
const writeVar = (varInfo, value) => {
  let data = { value: value };
  return service({
    url: '/api/IOServer/write/' + varInfo.tagId,
    method: 'post',
    data,
  })
};

var vars_vue_vue_type_style_index_0_lang = '';

const _sfc_main = defineComponent({
  name: 'VARS-LIST',
  setup() {
    // const SocketService = inject('SocketService')
    // const { proxy } = getCurrentInstance()
    onMounted(() => {
      console.log('setup - onMounted');

      // SocketService.bind('PONG', data => {
      //   console.log('vara', data)
      // })
    });

    const state = reactive({
      // 表格列配置，大部分属性跟el-table-column配置一样
      columns: [
        { type: 'selection' },
        { label: 'test/list.index', type: 'index' },
        {
          label: '变量名称',
          prop: 'tagName',
          // width: 100,
        },
        {
          label: '关联设备',
          prop: 'deviceName',
        },
        {
          label: '读写属性',
          prop: 'itemAccessMode',
        },
        {
          label: '数据类型',
          prop: 'itemDataType',
        },
        {
          label: '寄存器类型',
          prop: 'regName',
        },
        {
          label: '寄存器地址',
          prop: 'itemName',
        },
        {
          label: 'Bit长度',
          prop: 'regType',
        },
        {
          label: '变量值',
          prop: 'value',
        },
        {
          label: '更新时间',
          prop: 'updateTime',
          // width: 200,
        },
        {
          label: 'public.operate',
          width: 220,
          align: 'center',
          tdSlot: 'operate', // 自定义单元格内容的插槽名称
        },
      ],
      // 分页配置
      // paginationConfig: {
      //   layout: 'total, prev, pager, next, sizes', // 分页组件显示哪些功能
      //   pageSize: 10, // 每页条数
      //   pageSizes: [5, 10, 20, 50],
      //   style: { 'justify-content': 'flex-end' },
      // },
      selectedItems: [],
      async batchDelete() {
        if (state.selectedItems.length <= 0) {
          ElNotification({
            title: '提示',
            message: '请选择要删除的变量',
            type: 'warning',
          });
          return
        }
        let paramBody = [];
        for (let i = 0; i < state.selectedItems.length; i++) {
          paramBody.push(state.selectedItems[i]['tagId']);
        }

        // batchRemoveVar
        const { data, msg } = await batchRemoveVar(paramBody);
        ElNotification({
          title: '成功',
          message: msg,
          type: 'success',
        });
        refresh();
      },
      // 选择
      handleSelectionChange(arr) {
        state.selectedItems = arr;
      },
      // 请求函数
      async getList(params) {
        // console.log('params', params)
        // params是从组件接收的，包含分页和搜索字段。
        const { data } = await getAllVars(search, params);
        data.list.forEach((vars, key) => {
          // console.log(key,vars)
          vars.tagId;
        });
        // SocketService.send({eventType: 'REQUEST_VARS', data: sendData})
        // 必须要返回一个对象，包含data数组和total总数
        return {
          data: data.list,
          total: data.total,
        }
      },
    });

    const table = ref(null);
    const refresh = () => {
      table.value.refresh();
    };

    setInterval(() => {
      refresh();
    }, 1000);

    const dialogUploadKingIo = ref(false);
    const fileSuccess = () => {
      refresh();
    };

    const dialogVisible = ref(false);
    const form = reactive({
      tagName: '',
      description: '',
      tagType: '用户变量',
      tagDataType: '',
      tagGroup: '',
      regName: '', //DM
      itemName: '',
      regType: '',
      itemDataType: '',
      itemAccessMode: '读写',
      deviceId: '',
      deviceName: '以太网',
      collectInterval: 1,
      op: 'add',
    });

    const deviceMap = ref({});
    const deviceList = ref([]);
    PlcList();

    async function PlcList() {
      const { data } = await getDevices();
      if (data.length <= 0) return
      deviceList.value = data;
      for (let i = 0; i < data.length; i++) {
        deviceMap[data[i].deviceId] = data[i];
      }
    }

    const plcRegisterList = ref({});
    const selectPlcRegisterList = ref([]);
    registerList();

    async function registerList() {
      const data = await getPlcRegisterList();
      plcRegisterList.value = data;
    }

    const plcDataTypeMap = ref({});
    PlcDataTypeMapGet();

    async function PlcDataTypeMapGet() {
      const data = await getPlcDataTypeMap();
      plcDataTypeMap.value = data;
    }

    const tagDataTypeList = ref([]);
    TagDataTypeListGet();

    async function TagDataTypeListGet() {
      const data = await getTagDataTypeList();
      tagDataTypeList.value = data;
    }

    // 获取设备-寄存器
    const changeDevice = value => {
      selectPlcRegisterList.value =
        plcRegisterList.value[deviceMap[value].deviceSeries];
      if (deviceMap[value]) {
        form.deviceName = deviceMap[value].deviceName;
      } else {
        form.deviceName = '';
        form.regName = '';
        form.itemDataType = '';
        form.itemName = '';
      }
    };

    const clearDevice = () => {
      selectPlcRegisterList.value = [];
      DataCollectionTypeList.value = [];
      form.deviceId = '';
      form.regName = '';
      form.itemName = '';
      form.regType = '';
      form.itemDataType = '';
    };

    // 获取 寄存器-采集数据类型 options
    const DataCollectionTypeList = ref([]);
    const changeRegister = value => {
      DataCollectionTypeList.value =
        plcDataTypeMap.value[deviceMap[form.deviceId].deviceSeries][value];

      if (value == null || value == undefined) {
        form.itemDataType = '';
        form.itemName = '';
      }
    };

    // tagGroup 输入提示框
    const tagGroupList = ref([]);
    asyncTagGroupList();

    async function asyncTagGroupList() {
      const { data } = await getTagGroupList();
      for (let i = 0; i < data.length; i++) {
        tagGroupList.value[i] = { name: data[i], value: data[i] };
      }
    }

    const querySearchAsync = (queryString, cb) => {
      const results = queryString
        ? tagGroupList.value.filter(tagGroup => {
            return (
              tagGroup.name.toLowerCase().indexOf(queryString.toLowerCase()) !=
              -1
            )
          })
        : tagGroupList.value;
      cb(results);
    };

    const add = () => {
      dialogVisible.value = true;
      let initForm = {
        tagName: '',
        description: '',
        tagType: '用户变量',
        tagDataType: '',
        tagGroup: '',
        regName: '', //DM
        itemName: '',
        regType: '',
        itemDataType: '',
        itemAccessMode: '读写',
        deviceId: '',
        deviceName: '',
        collectInterval: 1,
        op: 'add',
      };
      Object.assign(form, initForm);
    };

    const edit = varInfo => {
      console.log('varInfo', varInfo);
      console.log('form', form);
      Object.assign(form, varInfo);
      form.op = 'edit';
      changeDevice(form.deviceId);
      changeRegister(form.regName);
      dialogVisible.value = true;
    };

    const write = varInfo => {
      console.log('varInfo', varInfo);
      ElMessageBox.prompt('同步写入数据', '', {
        confirmButtonText: '写入',
        cancelButtonText: '取消',
        inputErrorMessage: '请输入',
      })
        .then(async ({ value }) => {
          const { data, msg, code } = await writeVar(varInfo, value);
          if (code == 200) {
            ElNotification({
              title: '写入成功',
              message: '写入成功',
              type: 'success',
            });
          } else {
            ElNotification({
              title: '写入失败',
              message: msg,
              type: 'error',
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消写入',
          });
        });
    };

    async function remove(varInfo) {
      const { data, msg } = await removeVar(varInfo);
      ElNotification({
        title: '成功',
        message: msg,
        type: 'success',
      });
      refresh();
    }

    async function onSubmit() {
      console.log('form', form);
      let result = {};
      if (form.op == 'add') {
        result = await addVar(form);
      } else {
        result = await editVar(form);
      }

      ElNotification({
        title: '成功',
        message: result.msg,
        type: 'success',
      });
      dialogVisible.value = false;
      refresh();
    }

    /**
     * search
     */
    const search = reactive({
      tagName: '',
      tagGroup: '',
      deviceId: '',
      deviceName: '',
    });

    async function onSearch() {
      // console.log("search",search)
      refresh();
    }

    return {
      ...toRefs(state),
      refresh,
      table,
      dialogUploadKingIo,
      fileSuccess,
      form,
      dialogVisible,
      onSubmit,
      deviceList,
      tagDataTypeList,
      selectPlcRegisterList,
      changeDevice,
      clearDevice,
      querySearchAsync,
      search,
      onSearch,
      DataCollectionTypeList,
      changeRegister,
      add,
      edit,
      write,
      remove,
    }
  },
});

const _hoisted_1 = { class: "page-box" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("查询");
const _hoisted_3 = /*#__PURE__*/createTextVNode(" 导入KingIOServer变量表 ");
const _hoisted_4 = /*#__PURE__*/createTextVNode(" 写入 ");
const _hoisted_5 = /*#__PURE__*/createTextVNode("读写");
const _hoisted_6 = /*#__PURE__*/createTextVNode("只读");
const _hoisted_7 = /*#__PURE__*/createTextVNode("确认");
const _hoisted_8 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_9 = /*#__PURE__*/createBaseVNode("div", { class: "el-upload__text" }, [
  /*#__PURE__*/createTextVNode(" Drop file here or "),
  /*#__PURE__*/createBaseVNode("em", null, "click to upload")
], -1);
const _hoisted_10 = /*#__PURE__*/createBaseVNode("div", { class: "el-upload__tip" }, " jpg/png files with a size less than 500kb ", -1);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_autocomplete = resolveComponent("el-autocomplete");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_pro_table = resolveComponent("pro-table");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _component_upload_filled = resolveComponent("upload-filled");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_upload = resolveComponent("el-upload");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_el_form, { class: "search" }, {
        default: withCtx(() => [
          createVNode(_component_el_form_item, { label: "变量名称" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: _ctx.search.tagName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.search.tagName) = $event)),
                placeholder: "变量名称",
                clearable: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            label: "变量分组",
            class: "asterisk-left"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_autocomplete, {
                modelValue: _ctx.search.tagGroup,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.search.tagGroup) = $event)),
                "fetch-suggestions": _ctx.querySearchAsync,
                placeholder: "请输入",
                "value-key": "name"
              }, null, 8, ["modelValue", "fetch-suggestions"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, { label: "关联PLC" }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: _ctx.search.deviceName,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.search.deviceName) = $event)),
                placeholder: "关联PLC",
                clearable: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, { class: "asterisk-left search-btn" }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: _ctx.onSearch
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    createVNode(_component_pro_table, {
      ref: "table",
      title: "变量列表",
      request: _ctx.getList,
      columns: _ctx.columns,
      onSelectionChange: _ctx.handleSelectionChange
    }, {
      toolbar: withCtx(() => [
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Delete",
          onClick: _ctx.batchDelete
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('test/list.batchDelete')), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Plus",
          onClick: _cache[3] || (_cache[3] = $event => (_ctx.add()))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('test/list.add')), 1)
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "Plus",
          onClick: _cache[4] || (_cache[4] = $event => (_ctx.dialogUploadKingIo = true))
        }, {
          default: withCtx(() => [
            _hoisted_3
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
          type: "primary",
          onClick: $event => (_ctx.write(scope.row))
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 2
        }, 1032, ["onClick"]),
        createVNode(_component_el_button, {
          size: "small",
          type: "danger",
          onClick: $event => (_ctx.remove(scope.row))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t('public.delete')), 1)
          ]),
          _: 2
        }, 1032, ["onClick"])
      ]),
      _: 1
    }, 8, ["request", "columns", "onSelectionChange"]),
    createVNode(_component_el_dialog, {
      modelValue: _ctx.dialogVisible,
      "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((_ctx.dialogVisible) = $event)),
      title: _ctx.form.op == 'add' ? '添加变量' : '更新变量',
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_form, {
          model: _ctx.form,
          "label-width": "auto"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "变量分组" }, {
              default: withCtx(() => [
                createVNode(_component_el_autocomplete, {
                  modelValue: _ctx.form.tagGroup,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((_ctx.form.tagGroup) = $event)),
                  "fetch-suggestions": _ctx.querySearchAsync,
                  placeholder: "请输入",
                  "value-key": "name"
                }, null, 8, ["modelValue", "fetch-suggestions"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "变量名称" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.form.tagName,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((_ctx.form.tagName) = $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "变量描述" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.form.description,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((_ctx.form.description) = $event)),
                  type: "textarea"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "变量数据类型" }, {
              default: withCtx(() => [
                createVNode(_component_el_select, {
                  modelValue: _ctx.form.tagDataType,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((_ctx.form.tagDataType) = $event)),
                  clearable: "",
                  placeholder: "请选择变量数据类型",
                  style: {"width":"240px"}
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tagDataTypeList, (val, key) => {
                      return (openBlock(), createBlock(_component_el_option, {
                        key: key,
                        label: val,
                        value: key
                      }, null, 8, ["label", "value"]))
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "关联设备" }, {
              default: withCtx(() => [
                createVNode(_component_el_select, {
                  modelValue: _ctx.form.deviceId,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((_ctx.form.deviceId) = $event)),
                  onChange: _ctx.changeDevice,
                  onClear: _ctx.clearDevice,
                  clearable: "",
                  placeholder: "请选择关联设备"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.deviceList, (item) => {
                      return (openBlock(), createBlock(_component_el_option, {
                        key: item.deviceName,
                        label: item.deviceName,
                        value: item.deviceId
                      }, null, 8, ["label", "value"]))
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onChange", "onClear"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "寄存器" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.form.itemName,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((_ctx.form.itemName) = $event)),
                  style: {"max-width":"600px"},
                  placeholder: "寄存器地址",
                  class: "input-with-select"
                }, {
                  prepend: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: _ctx.form.regName,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((_ctx.form.regName) = $event)),
                      placeholder: "寄存器类型",
                      onChange: _ctx.changeRegister,
                      style: {"width":"115px"}
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectPlcRegisterList, (item) => {
                          return (openBlock(), createBlock(_component_el_option, {
                            key: item,
                            label: item,
                            value: item
                          }, null, 8, ["label", "value"]))
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onChange"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "采集数据类型" }, {
              default: withCtx(() => [
                createVNode(_component_el_select, {
                  modelValue: _ctx.form.itemDataType,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((_ctx.form.itemDataType) = $event)),
                  clearable: "",
                  placeholder: "请选择该点数据类型",
                  style: {"width":"240px"}
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.DataCollectionTypeList, (val, key) => {
                      return (openBlock(), createBlock(_component_el_option, {
                        key: key,
                        label: val,
                        value: val
                      }, null, 8, ["label", "value"]))
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "采集频率(秒)" }, {
              default: withCtx(() => [
                createVNode(_component_el_input_number, {
                  modelValue: _ctx.form.collectInterval,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((_ctx.form.collectInterval) = $event)),
                  min: 1,
                  max: 10
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "读写设置" }, {
              default: withCtx(() => [
                createVNode(_component_el_radio_group, {
                  modelValue: _ctx.form.itemAccessMode,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((_ctx.form.itemAccessMode) = $event)),
                  class: "ml-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, {
                      label: "读写",
                      value: "读写",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, {
                      label: "只读",
                      value: "只读",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        _hoisted_6
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
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
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  onClick: _cache[15] || (_cache[15] = $event => (_ctx.dialogVisible = false))
                }, {
                  default: withCtx(() => [
                    _hoisted_8
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
      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((_ctx.dialogUploadKingIo) = $event)),
      title: "导入KingIOServer变量表",
      width: "40%"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_upload, {
          class: "upload-demo",
          drag: "",
          action: "/api/var/import",
          multiple: false,
          "on-success": _ctx.fileSuccess
        }, {
          tip: withCtx(() => [
            _hoisted_10
          ]),
          default: withCtx(() => [
            createVNode(_component_el_icon, { class: "el-icon--upload" }, {
              default: withCtx(() => [
                createVNode(_component_upload_filled)
              ]),
              _: 1
            }),
            _hoisted_9
          ]),
          _: 1
        }, 8, ["on-success"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
var vars = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { vars as default };
