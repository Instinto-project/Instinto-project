import './navbar.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <nav id="nav-bar">
        <Link to="/">
            <img src="src/assets/navbar/LogoInstinto.MOBIL.png" alt="logo tienda" />
        </Link>
            <div className='icons'>
                <img src="src/assets/navbar/Search.png" className='icon' alt="logo search" />
                <img src="src/assets/navbar/Profile.png" className='icon' alt="logo profile" />
                <img src="src/assets/navbar/ShoppingCart.png" className='icon-cart' alt="logo cart" />
                <img src="src/assets/navbar/hamburguerMenuMOBIL.png" className='icon-menu' alt="logo burger-menu" />
            </div>
        </nav>
    )
}

export default NavBar