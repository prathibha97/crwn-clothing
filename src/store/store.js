import { applyMiddleware, compose, legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware))

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)

