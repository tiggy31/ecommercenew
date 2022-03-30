import React,{useReducer,createContext} from 'react'
import cartReducer,{sumItems} from './cart-reducer'

export const cartContext = createContext()
const cartFromStorage = localStorage.getItem('cart') ? 
JSON.parse(localStorage.getItem('cart')) : []

const initialState = {
    cartItems: cartFromStorage,
    ...sumItems(cartFromStorage)
}

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

const addProduct = (product) => {
  dispatch({
      type: 'ADD_ITEM',
      payload: product,
  })
}


const decreaseFunction = (product) => {
  dispatch({
    type: 'DECREASE',
    payload: product
  })
}
const increaseFunction = (product) => {
  dispatch({
      type: 'INCREASE',
      payload: product
  })
}


const removeProduct = (product) => {
  dispatch({
    type: 'REMOVE',
    payload: product
  })
}

const clearFunction = () => {
  dispatch({
      type: 'CLEAR'
      
  })
}


  const ContextValues = {
    ...state,
    addProduct,
    increaseFunction,
    decreaseFunction,
    removeProduct,
    clearFunction
    
 
}
  
  return (
      <cartContext.Provider value = {ContextValues}>
          {children}
      </cartContext.Provider>
  )

}

export default CartContextProvider