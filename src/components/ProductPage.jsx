import './productPage.css'

const ProductPage = () => {
    return (
        <div className='main-container'>
            <div className='product-container'>
                <img className="product-pic" src="src/assets/productPage/product1.png" alt="product image" />
                <div className='info-container'>
                    <h1>Pichi Rapunzel</h1>
                    <p>Una prenda gruesa perfecta para ahora que entramos a una temperatúra más fresca. Diseñado y confeccionado en Barcelona.</p>
                    <div className='details-container'>
                        <h3>Talla</h3>
                        <div className='balls-container'> 
                        <div className='ball-generic'></div>
                        <div className='ball-generic'></div>
                        <div className='ball-generic'></div>
                        <div className='ball-generic'></div>
                        </div>
                    </div>
                    <div className='details-container'>
                        <h3>Color</h3>
                        <div className='balls-container'> 
                        <div className='ball-green'></div>
                        <div className='ball-purple'></div>
                        </div>
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage