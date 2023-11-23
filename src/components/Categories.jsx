import './categories.css'

const Categories = () =>{
    const categories = ["Categorize", "Blusas", "Pantalones", "Categorize", "Chaquetas", "Medias", "Guantes", "Básicos"];
    const colors=["purple", "orange", "green"]
    return(
        <>
            <div className='categories-container'>
                {
                    categories.map((eachCategory, index)=>{
                        return ( 
                            <button className={colors[index % colors.length] + " category-btn"} >
                                <p>{eachCategory}</p>
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