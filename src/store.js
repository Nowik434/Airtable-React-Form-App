import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './Redux/reducer'

const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
));

export default store;