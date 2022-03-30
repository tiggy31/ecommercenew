import React, {createContext, useState} from 'react'
import data from '../pages/index'

export const productContext = createContext()

const ProductContextProvider = ({children}) => {
    const [items] = useState(data)
 
return(
   <productContext.Provider value = {{items}}>
       {
           children
       }

   </productContext.Provider>
)
}

export default  ProductContextProvider 