import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartIcon } from '../../components'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase'
import './Navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)


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
            </div>
            <Outlet />
        </>
    )
}

export default Navigation