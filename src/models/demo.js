import { approval } from '../services/api';

export default {
  namespace: 'demo',

  state: {
    list: [],
  },

  effects: {
    *onApproval({ payload }, { call, put }) {
      const { data } = payload;
      const result = yield call(approval, { ...data }); // eslint-disable-line
      // todo result是后台返回的结果 可根据code来反馈到界面
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
