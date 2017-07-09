import { combineReducers } from 'redux';
import TableReducer from './TableReducer';

export default combineReducers({
  tables: TableReducer,
});
