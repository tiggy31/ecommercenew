import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './context/products-context'
import CartContextProvider from './context/cart-context'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHIBLE_KEY)

ReactDom.render(
 <BrowserRouter> 
 <ProductContextProvider>
    <CartContextProvider>
       <Elements stripe = {stripePromise}>
           <App />
       </Elements>
    </CartContextProvider>
    </ProductContextProvider>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
