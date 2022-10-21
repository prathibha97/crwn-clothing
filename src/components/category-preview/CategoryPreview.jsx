import { Link } from 'react-router-dom'
import { ProductCard } from '../../components'
import './CategoryPreview.styles.scss'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <Link className='title' to={title}>
                <h2>
                    {title.toUpperCase()}
                </h2>
            </Link>
            <div className='preview'>
                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview