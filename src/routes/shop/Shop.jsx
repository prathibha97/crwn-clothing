import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview, Category } from '../../routes'
import './Shop.styles.scss'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop