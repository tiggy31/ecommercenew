import React,{useContext} from 'react'
import {withRouter} from 'react-router-dom'
import shoppingBag from '../../assets/shopping-cart.png'
import '../Cart-Icon/cart-icon.styles.scss'
import {cartContext} from '../../context/cart-context'

const CartIcon = ({history: {push}}) => {

   const {itemCount,cartItems} = useContext(cartContext)
   console.log('Cart items:', cartItems)
   return(
       <div className="cart-container" onClick = {() => push('/cart')}>
          <img src={shoppingBag} alt="shopping-cart" /> 

        {

           itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null
        }
   
       </div>
   )
}

export default withRouter(CartIcon)