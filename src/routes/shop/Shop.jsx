import { useContext, Fragment } from "react"
import { ProductCard } from "../../components"
import { CategoriesContext } from "../../context/categories.context"
import './Shop.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop