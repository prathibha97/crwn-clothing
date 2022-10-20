import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CartItem } from '../../components'
import { CartContext } from '../../context/cart.context'
import './CartDropdown.styles.scss'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className="caty-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown