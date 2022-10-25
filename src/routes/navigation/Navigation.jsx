import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartDropdown, CartIcon } from '../../components'
import {selectIsCartOpen} from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/users/user.selector'
import { signOutUser } from '../../utils/firebase'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './Navigation.styles'

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGNOUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation