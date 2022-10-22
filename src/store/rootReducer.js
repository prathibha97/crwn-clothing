import { combineReducers } from 'redux'
import { categoriesReducer } from './categories/category.reducer'
import { userReducer } from './users/user.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})