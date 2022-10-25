import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { CartItemContainer, ItemCount } from './CartIcon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingCart className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  )
}

export default CartIcon