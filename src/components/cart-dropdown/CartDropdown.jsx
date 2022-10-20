import { useContext } from 'react'
import { Button, CartItem } from '../../components'
import { CartContext } from '../../context/cart.context'
import './CartDropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className="caty-items">
        {cartItems.map(( item ) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown