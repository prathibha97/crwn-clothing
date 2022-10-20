import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon