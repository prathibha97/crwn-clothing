import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CartItem } from '../../components'
import { CartContext } from '../../context/cart.context'
import { CartDropdownContainer, CartItems } from './CartDropdown.styles'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown