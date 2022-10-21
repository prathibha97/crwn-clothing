import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from '../../routes'
import './Shop.styles.scss'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
        </Routes>
    )
}

export default Shop