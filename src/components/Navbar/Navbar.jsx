import { NavLink } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {

    return (
        
            <header >
                
                    <nav className='nav'>
                      
                        <ul className='nav__right'>
                            <li>
                                <NavLink to='/about' className='nav__link'>
                                    Sobre mí
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className='nav__link'>
                                    Contacto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/cv' className='nav__link'>
                                    Cv
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/portfolio' className='nav__link'>
                                    Portfolio
                                </NavLink>
                            </li>
                        </ul>
                       
                    </nav>
              
            </header>
        
    )
};
export default Navbar;