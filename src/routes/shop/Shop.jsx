import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CategoriesPreview, Category } from '../../routes'
import {fetchCategoriesStart} from '../../store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesStart())
     }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop