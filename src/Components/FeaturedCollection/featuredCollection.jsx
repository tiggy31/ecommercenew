import React, {useContext} from 'react'
import Featured from '../shared/featured'
import './featuredCollection.styles.scss'
import {productContext} from '../../context/products-context'


const FeaturedCollection = () => {
       const {items}   = useContext(productContext)
       const productItems = items.filter((product,i)=> i <4 ).map(product => (
           <Featured {...product} key = {product.id} />
    ))

       return (
           <div className="featured-collection container">
               <h2 className="featured-section-title">Featured collection</h2>
               <div className="products">
                   {productItems}
               </div>
           </div>
       )
}

export default FeaturedCollection