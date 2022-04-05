import React,{useContext, useState} from 'react'
import {cartContext} from '../../context/cart-context'
import Layout from '../../Components/shared/layout'
import './checkout.style.scss'
import ShippingAddress from '../custom-checkout/shippingAddress'
import CustomCheckout from './custom-checkout'

const Checkout = () => {
    const {itemCount, total, cartItems} = useContext(cartContext)
     const [shipping,setShipping] = useState(null)


     const addressShown = {
         display: (shipping ? 'none' : 'block')
     }

     const cardShown = {
        display: (shipping ? 'block' : 'none')
    }

    return (
        <Layout>
            <div className = 'checkout'>
              <h2>Check out Summary</h2>
              <h3>{`Total Items: ${itemCount}`}</h3>
              <h4>{`Amount: $${total}`}</h4>
            <div style = {addressShown}>
                <ShippingAddress 
                   setShipping={setShipping}
                />
            </div>

            <div style={cardShown}>
                <CustomCheckout 
                   {...{shipping,cartItems}}
                />
            </div>
            </div>
        </Layout>
    )
    
}

export default Checkout