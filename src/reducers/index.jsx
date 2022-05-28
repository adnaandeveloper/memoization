import { combineReducers } from 'redux';

import imageDataReducer from './imageDataReducer';

const allReducers = combineReducers({
  imageReducer: imageDataReducer,
});

export default allReducers;
