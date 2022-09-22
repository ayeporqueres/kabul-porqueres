import {createContext, useState} from 'react'


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList,setCartList] = useState ([])

    const addItem = (item, qty, stock) => {
        if (cartList.length === 0) {
          setCartList ([
            ...cartList, item
          
          ])
          item.qty = qty
          item.stock -= qty
          
        } else {
          const boolean= isInCart (item.id)
          if (boolean === false){
            setCartList ([
              ...cartList, item
            ])
            item.qty = qty
            stock.qty -= qty
          }else{
            item.qty += qty
            item.stock -= qty
          }
        }
      


        
    }

    const isInCart = (id) =>{
      if (cartList.find (e => e.id === id)){
        return true
      }else{
        return false
      }
      
    }

    
    const clear= () =>{
        setCartList ([])
    }

    const removeItem= (id) =>{
      
      setCartList (cartList.filter(item => item.id !== id))

    }


    return (
    <CartContext.Provider value={{cartList,addItem,clear, removeItem}}>
      { children }
    </CartContext.Provider>



    );
}

export default CartContextProvider; 
