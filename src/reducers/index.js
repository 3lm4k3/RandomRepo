import { combineReducers } from 'redux';
import TagReducer from './TagReducer';

export default combineReducers({
	tags: TagReducer
});