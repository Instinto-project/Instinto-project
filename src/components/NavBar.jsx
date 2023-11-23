import './navbar.css'

function NavBar() {
    return (
        <nav id="nav-bar">
            <img src="src/assets/navbar/LogoInstinto.MOBIL.png" alt="logo tienda" />
            <div className='icons'>
                <img src="src/assets/navbar/Search.png" className='icon' alt="logo search" />
                <img src="src/assets/navbar/Profile.png" className='icon' alt="logo profile" />
                <img src="src/assets/navbar/ShoppingCart.png" className='icon-cart' alt="logo cart" />
            </div>
        </nav>
    )
}

export default NavBar