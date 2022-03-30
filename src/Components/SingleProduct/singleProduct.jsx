import React, {useContext,useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import {productContext} from '../../context/products-context'
import Layout from '../shared/layout'
import './singleProduct.style.scss'
import {cartContext} from '../../context/cart-context'
import {isInCart} from '../shared/helpers'

const SingleProduct = ({match, history: {push}}) =>{

    const {items} = useContext(productContext)
    const {addProduct,cartItems, increaseFunction} = useContext(cartContext)
    const {id} = match.params
    const [item,setItem] = useState(null)
    const ItemInCart = isInCart(item,cartItems)

  useEffect(() => {
      const item = items.find(item => Number(id) === Number(item.id))

      if (!item){
         return push('/shop')
      }
      setItem(item)
  }, [id,items,push,item])

  if(!item){
    return null
}

  const {imageUrl,title, price, description} = item


  return (
      <Layout>
          <div className = "single-product-container">
              <div className = "product-image">
                  <img src= {imageUrl} alt = "single-pic"/>
              </div>
              <div className = "product-details">
                  <div className = "name-price">
                  <h3>{title}</h3>
                  <p>{price}</p>
                  </div>
                   
                  <div className = "add-to-cart-btns">
                  {
                       !ItemInCart  && 

                       <button 
                       className = "button is-white nomad-btn" 
                       id = "btn-white-outline"
                       onClick={() => addProduct(item)}>
                       ADD TO CART
                 </button>
                   }

                   {
                       ItemInCart  &&

                       <button 
                       className = "button is-white nomad-btn" 
                       id = "btn-white-outline"
                       onClick={() => {increaseFunction(item)}}>
                       ADD MORE
                 </button>
                   }

                      <button className = "button is-black nomad-btn" id = "btn-black-outline">
                        PROCEED TO CHECKOUT
                      </button>
                  </div>
                  <div className = "product-description">
                      <p>
                          {description}
                      </p>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default withRouter(SingleProduct)