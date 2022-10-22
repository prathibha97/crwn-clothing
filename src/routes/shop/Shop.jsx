import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CategoriesPreview, Category } from '../../routes'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import {setCategoriesMap} from '../../store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async()=>{
         const categoryMap = await getCategoriesAndDocuments('categories')
         dispatch(setCategoriesMap(categoryMap))
        }
        getCategoriesMap()
     }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop