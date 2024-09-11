import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../common/button'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>

        <div className={styles.headerLogo}>
            <NavLink to={"/"}><img src="./assets/imgs/logo.png" alt="" /></NavLink>

        </div>
        
        <div className={styles.headerNavbar}>
            <ul>

                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>


            </ul>
        </div>

        <div className={styles.headerBtn}>
            <NavLink>Login</NavLink>
            <Button text="Logout"/>
        </div>


    </div>
  )
}

export default Header

