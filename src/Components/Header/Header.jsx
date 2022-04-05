
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss'
import CartIcon from '../Cart-Icon/cart-icon'
import {auth} from '../../firebase/index'
import { UserContext } from '../../context/user-context';

const Header = () => {

    const {user} = useContext(UserContext)
    console.log('user', user)
    return(
        <nav className ="nav-menu container">
            <div className="logo">
             <Link to='/'>KEEPER</Link>
            </div>
          <ul>
              <li>
              <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/shop'>Shop</Link>
              </li>
              {
                  !user && 
                  <li>
                      <Link to='/sign-in'>
                        Sign in
                      </Link>
                  </li>
              }

              {
                  user &&
                  <li onClick = {() => auth.signOut()}>
                      Sign out
                  </li>
              }

              {
                  !user && 
                  <li>
                      <Link to="/sign-up">
                          sign up
                      </Link>
                  </li>
              }
          </ul>
          <CartIcon />
        </nav>
    )
}


export default Header