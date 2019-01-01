import { fromJS } from 'immutable';

const defaultState = fromJS({
  text: 'Hello world',
});

/* 必须返回一个纯函数 */
export default (state = defaultState) => state;
