import {legacy_createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'

const middleware = [thunk]
const initialState ={}

const store = legacy_createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
