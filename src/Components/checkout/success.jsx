import React,{useContext,useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import Layout from '../shared/layout'
import {cartContext} from '../../context/cart-context'


const Success = ({history}) => {
    const {clearFunction,cartItems} = useContext(cartContext)

    useEffect(()=> {
        if(cartItems.length !== 0){
            clearFunction()}
        },[clearFunction,cartItems])

        
    return (
        <Layout>
           <div className='checkout'>
            <h1>Thank you for your order!</h1>
            <p>We are currently processing your order and we'll send confirmation email shortly</p>
            <div>
                <button className = "button is-black-btn submit"
                        onClick={() => history.push('/shop')}>
                    Continue Shopping
                </button>
            </div>
           </div>
        </Layout>
        
    )
}

export default withRouter(Success)