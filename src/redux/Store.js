import { counterObjReducer } from './Reducer';
import { createStore } from 'redux';

export const store = createStore(counterObjReducer);