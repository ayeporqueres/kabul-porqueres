import {createContext, useState} from 'react'


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList,setCartList] = useState ([])

    const addItem = (item, quantity) => {
      console.log(item, quantity)
      if (!isInCart(item.id)) {    
        setCartList([...cartList, {...item, quantity}]);
    } else {
        let arrayAux = [...cartList];
        arrayAux[cartList.findIndex(el => el.id === item.id)].quantity += quantity;
        setCartList([...arrayAux]);
    }
        
  }

    const isInCart = (id) =>{
      return cartList.some(item=> item.id === id)
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
