import { applyMiddleware, compose, legacy_createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(Boolean)

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware))

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

