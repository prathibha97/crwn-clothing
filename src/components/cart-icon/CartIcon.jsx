import { useContext } from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import { CartItemContainer, ItemCount } from './CartIcon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingCart className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  )
}

export default CartIcon