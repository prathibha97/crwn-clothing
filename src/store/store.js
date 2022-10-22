import { applyMiddleware, compose, legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'

const middleware = [logger]

const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = legacy_createStore(rootReducer, undefined, composedEnhancers)

