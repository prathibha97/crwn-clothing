import { Fragment } from "react"
import { useSelector } from "react-redux"
import { CategoryPreview, Spinner } from "../../components"
import { selectCategoriesLoading, selectCategoriesMap } from '../../store/categories/category.selector'

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const loading = useSelector(selectCategoriesLoading)

    return (
        <Fragment>
            {loading ? <Spinner /> : (
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            )}
        </Fragment>
    )
}

export default CategoriesPreview