import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, CartItem } from '..';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
