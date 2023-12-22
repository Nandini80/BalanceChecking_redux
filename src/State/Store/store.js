import {combineReducers,createStore} from 'redux';
import {amountReducer} from '../reducers/amountReducer';
import {ThemeReducer} from '../reducers/ThemeReducer';
import {languageReducer} from '../reducers/languageReducer';

const totalReducers = combineReducers({ThemeReducer,languageReducer,amountReducer});
export const store = createStore(totalReducers);

