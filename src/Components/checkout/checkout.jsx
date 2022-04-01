import React,{useContext} from 'react'
import {cartContext} from '../../context/cart-context'
import Layout from '../../Components/shared/layout'
import './checkout.style.scss'
import  StripeCheckout from '../checkout/stripe-checkout/stripe-checkout'

const Checkout = () => {
    const {itemCount, total} = useContext(cartContext)

    return (
        <Layout>
            <div className = 'checkout'>
              <h2>Check out Summary</h2>
              <h3>{`Total Items: ${itemCount}`}</h3>
              <h4>{`Amount: $${total}`}</h4>
              < StripeCheckout />
            </div>
        </Layout>
    )
    
}

export default Checkout