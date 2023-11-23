import './categories.css'
import {Link} from 'react-router-dom'

const Categories = () =>{
    const categories = ["Categorize", "Blusas", "Pantalones", "Categorize", "Chaquetas", "Medias", "Guantes", "Básicos"];
    const colors=["purple", "orange", "green"]
    return(
        <>
            <div className='categories-container'>
                {
                    categories.map((eachCategory, index)=>{
                        return ( 
                            <Link to="/product">
                            <button className={colors[index % colors.length] + " category-btn"} >
                                <p className='category-text'>{eachCategory}</p>
                            </button>
                            </Link>
                            
                        )
                        }
                    )
                }
            </div>
        </>
    )
}

export default Categories