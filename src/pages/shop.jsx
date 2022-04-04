import React,{useContext,useState} from 'react'
import Featured from '../Components/shared/featured'
import {productContext} from '../context/products-context'
import Layout from '../Components/shared/layout'
import './shop.styles.scss'


const Shop = () => {
     const [searchTerm,setSearchTerm] = useState('')
     const {items}  = useContext(productContext)
     const itemDetail = items.filter((item) => {
         return item.title.toLowerCase().includes(searchTerm.toLowerCase())
     
          
     }).map(item =>(
       <Featured {...item} key={item.id} />
       
     ))

    
    return(
        
         <Layout>
           
               <div className = "product-list-container">
             <h2 >Shop</h2>
             <div className = "product-list">
                 <input onChange = {e => {setSearchTerm(e.target.value)}} placeholder = "search" value = {searchTerm}/>
                  {
                       itemDetail
                  }
                 
             </div>
         </div>
         </Layout>
        
        
    )

}

export default Shop