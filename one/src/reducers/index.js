import { combineReducers } from 'redux';
import create_CP from './save';
import page_CT from './pageCT';
import store1 from './store1';
import page_CR from './pageCR';
import page_CC from './pageCC';
import page_I from './pageI'


const allReducers = combineReducers({
    windowCP: create_CP,
    pageCT: page_CT,
    mystore1: store1,
    pageCR: page_CR,
    pageCC: page_CC,
    pageI: page_I
});

export default allReducers;