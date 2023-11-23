import Categories from './Categories';
import MainPicture from './MainPicture';
import './homepage.css'

const Homepage = () =>{
    return(
        <>
        <div className='container-homepage'>
            <MainPicture/>
            <br />
            <Categories/>
        </div>
        </>
        
    );
}

export default Homepage;