import './productPage.css'

const ProductPage = () => {
    return (
        <div className='main-container'>
            <div className='product-container'>
                <img className="product-pic" src="src/assets/productPage/product1.png" alt="product image" />
                <div className='info-container'>
                    <h1 className='product-name'>Pichi Rapunzel</h1>
                    <p className='product-description'>Una prenda gruesa perfecta para ahora que entramos a una temperatúra más fresca. Diseñado y confeccionado en Barcelona.</p>
                    <br/>
                    <div className='details-container'>
                        <h3 className='det-name'>Talla</h3>
                        <div className='balls-container'>
                            <div className='ball-generic'></div>
                            <div className='ball-generic'></div>
                            <div className='ball-generic'></div>
                            <div className='ball-generic'></div>
                        </div>
                    </div>
                    <div className='details-container'>
                        <h3 className='det-name'>Color</h3>
                        <div className='balls-container'>
                            <div className='ball-green'></div>
                            <div className='ball-purple'></div>
                        </div>
                    </div>
                    <br/>
                    <button className='btn-add'>Añadir al carrito </button>
                    <br/>
                    <button className='btn-keep'>Seguir comprando</button>
                    <br/>
                    <h2 className='product-text-suggestion'>Completa el look</h2>
                    <div className='product-pic-suggestion-container'>
                        <img className="product-pic-suggestion" src="src/assets/productPage/product2.png" alt="product image2" />
                        <img className="product-pic-suggestion" src="src/assets/productPage/product3.png" alt="product image3" />
                        <img className="product-pic-suggestion" src="src/assets/productPage/product4.png" alt="product image4" />
                        <img className="product-pic-suggestion" src="src/assets/productPage/product5.png" alt="product image5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage