import React, {useContext} from 'react'
import {cartContext} from '../../context/cart-context'
import Layout from '../../Components/shared/layout'
import CartItem from './cart-items'
import './cart-page.style.scss'
import Total from './total'
const CartPage = () => {
    const {cartItems, itemCount, total, increaseFunction,decreaseFunction , removeProduct,clearFunction} = useContext(cartContext)
    const funcs =  {
        increaseFunction,decreaseFunction, removeProduct
    }

 return (
     <Layout>
         <>
         <h1>Cart</h1>
         {
             cartItems.length === 0 ? <div className = 'empty-cart'>Your cart is empty</div>
             : 
             <>
             <div className = 'cart-page'>
                 <div className = 'cart-item-container'>
                    {
                        cartItems.map(item => <CartItem {...item} key= {item.id} {...funcs}/>)
                    }
                 </div>
                 <Total itemCount = {itemCount} total = {total} clearFunction = {clearFunction}/>
             </div>
         
             </>
         }
         </>
     </Layout>
 )




}

export default CartPage