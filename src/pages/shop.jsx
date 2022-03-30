import React,{useContext} from 'react'
import Featured from '../Components/shared/featured'
import {productContext} from '../context/products-context'
import Layout from '../Components/shared/layout'
import './shop.styles.scss'


const Shop = () => {
     const {items}  = useContext(productContext)
     const itemDetail = items.map(item =>(
       <Featured {...item} key={item.id}/>
     ))
    return(
         <Layout>
               <div className = "product-list-container">
             <h2 >Shop</h2>
             <div className = "product-list">
                  {
                       itemDetail
                  }
             </div>
         </div>
         </Layout>
        
        
    )

}

export default Shop