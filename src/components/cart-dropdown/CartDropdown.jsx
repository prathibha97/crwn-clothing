import {Button} from '../../components'
import './CartDropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="caty-items"></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown