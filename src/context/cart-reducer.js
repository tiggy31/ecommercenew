

const storeCartItems = (cartItems) => {
    const cart = cartItems.length  >  0 ? cartItems : []
    localStorage.setItem('cart', JSON.stringify(cart))
}


export const sumItems = (cartItems) => {

    storeCartItems(cartItems)

    return{
        itemCount: cartItems.reduce((total,product)=> total + product.quantity, 0),
        total: cartItems.reduce((total,product)=> total + (product.quantity * product.price),0)
    }
}

const cartReducer = (state,action) => {
    
   switch(action.type){
     
    case 'CLEAR':
        localStorage.removeItem('cart')
        return{
            cartItems: [],
            itemCount: 0,
            total: 0
        }
       case 'REMOVE':
           const newCartItems = state.cartItems.filter(item => item !== action.payload.id)

           return {
               ...state,
               cartItems: [...newCartItems],
                ...sumItems(newCartItems)
           }

           
  

    case 'DECREASE':
        const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
             const product  = state.cartItems[decreaseIndex]
             if(product.quantity > 1){
                 product.quantity--
             }
             return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }


    case 'INCREASE': 
        const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
             state.cartItems[increaseIndex].quantity++

             return {
                 ...state,
                 cartItems: [...state.cartItems],
                 ...sumItems(state.cartItems),
             }

    case 'ADD_ITEM':
        if(!state.cartItems.find(item => item.id === action.payload.id)){
              state.cartItems.push({
                  ...action.payload,
                  quantity: 1
              })
        }
        
        return{
            ...state,
            cartItems: [...state.cartItems],
            //updating item cart and total
            ...sumItems(state.cartItems)
        }

       default:
           return state
   }
}

export default cartReducer