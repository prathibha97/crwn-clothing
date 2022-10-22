import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { CategoryContainer, CategoryTitle } from './Category.styles'

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category