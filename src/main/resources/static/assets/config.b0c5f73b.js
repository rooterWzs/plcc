import { k as service } from './index.23d7ef9b.js';

/**
 * PLC
 */
const addPlc = data => {
  return service({
    url: '/api/plc/add',
    method: 'post',
    data,
  })
};

const editPlc = data => {
  return service({
    url: '/api/plc/edit',
    method: 'post',
    data,
  })
};

const removePlc = data => {
  return service({
    url: '/api/plc/remove',
    method: 'post',
    data,
  })
};

const getDevices = data => {
  return service({
    url: '/api/plc/list',
    method: 'get',
    data,
  })
};

const getPlcModelList = data => {
  return service({
    // url: '/api/config/modelList',
    url: '/api/config/PLCModel.json',
    method: 'get',
    data,
  })
};

const getPlcRegisterList = data => {
  return service({
    // url: '/api/config/registerList',
    url: '/api/config/PLCRegisterType.json',
    method: 'get',
    data,
  })
};

const getTagDataTypeList = data => {
  return service({
    // url: '/api/config/tagDataTypeList',
    url: '/api/config/TagDataType.json',
    method: 'get',
    data,
  })
};

const getPlcDataTypeMap = data => {
  return service({
    // url: '/api/config/plcDataTypeMap',
    url: '/api/config/PLCDataType.json',
    method: 'get',
    data,
  })
};

const getTagGroupList = data => {
  return service({
    url: '/api/var/tagGroupList',
    method: 'get',
    data,
  })
};

export { getPlcModelList as a, addPlc as b, getPlcRegisterList as c, getPlcDataTypeMap as d, editPlc as e, getTagDataTypeList as f, getDevices as g, getTagGroupList as h, removePlc as r };
