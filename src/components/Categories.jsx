import './categories.css'

const Categories = () =>{
    const categories = ["Vestidos", "Blusas", "Faldas", "Abrigos", "Guantes"];
    
    return(
        <>
            <div className='categories-container'>
                {
                    categories.map((eachCategory, index)=>{
                        return (
                            <button>
                                <p className='icon-btn-txt'>{eachCategory}</p>
                            </button>
                        )
                        }
                    )
                }

            </div>
        </>

    )
}

export default Categories