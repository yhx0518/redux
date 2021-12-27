import { createStore, applyMiddleware } from 'redux'

import countReducers from './count_reducer'

import thunk from 'redux-thunk'

export default createStore(countReducers, applyMiddleware(thunk));