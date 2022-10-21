import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartDropdown, CartIcon } from '../../components'
import { CartContext } from '../../context/cart.context'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './Navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


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