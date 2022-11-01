import logo from '../assets/logos/logologo.jpg';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-white bg-white menuHeader'>
        <div className='container'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                    <li>
                    <Link className='navbar-brand' to='/'><img src={logo} className='logoPrincipal' alt='Logo Artículos Gamer'/></Link>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/almacenamiento-interno'>Almacenamiento Interno</NavLink>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/fuentes-de-alimentacion'>Fuentes de alimentación</NavLink>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/gabinetes-perifericos'>Gabinetes Periféricos</NavLink>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/memorias-RAM'>Memorias RAM</NavLink>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/tarjetas-de-video'>Tarjetas de video</NavLink>
                    </li>
                    <li className='nav-item p-4'>
                        <NavLink className='nav-link' to='/category/procesadores-y-mothers'>Procesadores y Mothers</NavLink>
                    </li>
                </ul>
                <Link to='/cart'>
                <CartWidget/>
                </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;