import './NavBar.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <nav id="nav-bar">
        <Link to="/">
            <img src="/navbar/LogoInstinto.MOBIL.png" alt="logo tienda" />
        </Link>
            <div className='icons'>
                <img src="/navbar/Search.png" className='icon' alt="logo search" />
                <img src="/navbar/Profile.png" className='icon' alt="logo profile" />
                <img src="/navbar/ShoppingCart.png" className='icon-cart' alt="logo cart" />
                <img src="/navbar/hamburguerMenuMOBIL.png" className='icon-menu' alt="logo burger-menu" />
            </div>
        </nav>
    )
}

export default NavBar