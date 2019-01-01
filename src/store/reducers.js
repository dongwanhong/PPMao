import { combineReducers } from 'redux-immutable';
import homeReducer from '../views/home/store';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
