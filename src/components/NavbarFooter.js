import logoFacebook from '../assets/logos/facebook.jpg';
import logoInstagram from '../assets/logos/instagram.jpg';
import logoYoutube from '../assets/logos/youtube.jpg';
import logoTwitter from '../assets/logos/twitter.jpg';

const NavbarFooter = () => {
    return (
            <nav>
                <ul className= 'menuFooter'>
                   <li><a href='https://www.facebook.com' target='_blank'><img src={logoFacebook} alt='Logo Facebook' className='redSocial'/></a></li>
                   <li><a href='https://www.instagram.com' target='_blank'><img src={logoInstagram} alt='Logo Instagram' className='redSocial'/></a></li>
                   <li><a href='https://www.youtube.com' target='_blank'><img src={logoYoutube} alt='Logo Youtube' className='redSocial'/></a></li>
                   <li><a href='https://www.twitter.com' target='_blank'><img src={logoTwitter} alt='Logo Twitter' className='redSocial'/></a></li>
                </ul>
            </nav>
    )
}

export default NavbarFooter;