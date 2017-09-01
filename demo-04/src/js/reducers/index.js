import { combineReducers } from 'redux';

import cs from './cs';
import demo from './demo';

const reducer = combineReducers({
  cs,
  demo
});

export default reducer;