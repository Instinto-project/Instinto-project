import './footer.css'

const Footer = () => {
    return(
        <footer className='footer-flex'>
            <section>
                <p className='purple text-center'>Somos distintas, sigue tu instinto </p>
            </section>
            <section className='bottom-footer-flex'>
                <div className='icons'>
                    <img src="src/assets/footer/Facebook_MOBIL.png" alt="Facebook logo" />
                    <img src="src/assets/footer/ig_icon_MOBIL.png" alt="Instagram logo" />
                    <img src="src/assets/footer/Pinterest_MOBIL.png" alt="Pinterest logo" />
                </div>
                <div>
                    <p>Terminos legales</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer