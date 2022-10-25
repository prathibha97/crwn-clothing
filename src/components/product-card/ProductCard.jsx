import { useDispatch, useSelector } from 'react-redux'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { Footer, Name, Price, ProductCardContainer } from './ProductCard.styles'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard