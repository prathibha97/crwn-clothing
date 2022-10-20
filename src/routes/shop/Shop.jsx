import { useContext } from "react"
import { ProductCard } from "../../components"
import { ProductsContext } from "../../context/products.context"
import './Shop.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop