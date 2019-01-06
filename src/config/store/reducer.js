import { fromJS } from 'immutable';
import * as actionTypes from './actionType';
import config from '..';

const defaultConfig = fromJS(config);

export default (state = defaultConfig, action) => {
  switch (action.type) {
    case actionTypes.SET_LANG_ZHCN:
      return state.setIn(['local', 'lang'], 'zh-CN');
    case actionTypes.SET_LANG_ENUS:
      return state.setIn(['local', 'lang'], 'en-US');
    default:
      return state;
  }
};
