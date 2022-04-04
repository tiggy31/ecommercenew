import React, {useContext} from 'react'
import {withRouter} from 'react-router-dom'
import './featured.styles.scss'
import { isInCart } from './helpers'
import {cartContext} from '../../context/cart-context'


const Featured = (props) => {
  
    const {addProduct,cartItems, increaseFunction} = useContext(cartContext)
    const {title, imageUrl, price, history, id,description } = props
    const product = {title, imageUrl, price, id,description}
    const itemInCart = isInCart(product,cartItems)


    
   return(
       <div className= "featured-product">
          
           <div className = "featured-image" onClick = {() => history.push(`/item/${id}`)}>
               <img src = {imageUrl} alt = "product"/>
           </div>
          <div className= "name-price">
              <h3>{title}</h3>
              <p>${price}</p>

              {
                  !itemInCart && 

                  <button className="button is-black nomad-btn"
                          onClick={()=> addProduct(product)}
                  
                  >Add to cart</button>
              }

              {
itemInCart && 

<button className="button is-white nomad-btn"
        id = 'btn-white-outline'
        onClick={()=> {increaseFunction(product)}}

>Add MORE</button>  
                  
              }
             
          </div>
          <div>
              <p>{description}</p>
          </div>

       </div>
   )
}

export default withRouter(Featured)