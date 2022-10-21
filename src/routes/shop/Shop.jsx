import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview, Category } from '../../routes'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop