import NavbarFooter from './NavbarFooter';
import marcas from '../assets/logos/marcas.jpg';

const Footer = () => {
    return (
        <div>
            <img src={marcas} alt="logos de marcas" className='foto' />
                <footer className='barraNegra'>
                    <NavbarFooter/>
                    <h5 class="text-center colorLetra">
                        Todos los derechos reservados ©
                    </h5>
                </footer>
        </div>
    )
}

export default Footer;