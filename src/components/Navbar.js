import logo from '../assets/logos/logologo.jpg';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white menuHeader">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <a className="navbar-brand" href="./index.html"><img src={logo} className="logoPrincipal" alt="Logo Artículos Gamer"/></a>
                    <li class="nav-item p-4">
                        <a className="nav-link" href="./sites/tienda.html">Tienda</a>
                    </li>
                    <li class="nav-item p-4">
                        <a className="nav-link" href="./sites/contacto.html">Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;