import { createStore } from 'redux';

import state from './state';
import reducer from './rootReducer';
import middleware from './middleware';

export default createStore(reducer, state, middleware);