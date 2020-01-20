import { combineReducers } from 'redux';
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer
});

export default rootReducer;


