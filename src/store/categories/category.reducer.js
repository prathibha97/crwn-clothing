import { CATEGORY_ACTION_TYPES } from './category.types'

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    loading: false,
    error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                loading: false,
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                loading: false,
                error: payload
            }

        default:
            return state
    }
}