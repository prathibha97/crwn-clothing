import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartDropdown, CartIcon } from '../../components'
import { CartContext } from '../../context/cart.context'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase'
import './Navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGNOUT</span>
                    ) : (
                        <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    )}
                    <CartIcon />
                </div>
                {
                    isCartOpen && <CartDropdown />
                }
            </div>
            <Outlet />
        </>
    )
}

export default Navigation