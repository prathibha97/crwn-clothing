import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CategoriesPreview, Category } from '../../routes'
import {fetchCategoriesAsync} from '../../store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync())
     }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop