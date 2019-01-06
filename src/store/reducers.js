import { combineReducers } from 'redux-immutable';
import config from '../config/store';
import homeReducer from '../views/home/store';

/**
 * 使用 webpack 构建的项目在模块导入 export default 暴露的变量时，
 * 真正需要的变量在导出变量的 default 属性上，为此我们需要多写一步：先导入变量，再解构赋值
 * 你也可以使用 export 导出或使用 babel-plugin-add-module-exports
 */
const configReducer = config.reducer;

/**
 * 因为引入的多个 reducer 都是普通的 JavaScript 对象
 * 所以合并多个 reducer 时不能使用 redux 提供的 combineReducers 方法
 */
const reducers = combineReducers({
  config: configReducer,
  home: homeReducer,
});

export default reducers;
