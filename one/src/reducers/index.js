import { combineReducers } from 'redux';
import window_CP from './save';
import page_CT from './pageCT';
import store1 from './store1'


const allReducers = combineReducers({
    windowCP: window_CP,
    pageCT: page_CT,
    mystore1: store1
});

export default allReducers;