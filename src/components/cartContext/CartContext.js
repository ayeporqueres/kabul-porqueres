import {createContext, useState} from 'react'


export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList,setCartList] = useState ([])

    function addItem(item, quantity) {
      if (!isInCart(item.id)) {    
          setCartList([...cartList, {...item, quantity}]);
      } else {
          let arrayAux = [...cartList];
          arrayAux[cartList.findIndex(el => el.id === item.id)].quantity += quantity;
          setCartList([...arrayAux]);
      }
    }
      function isInCart(id) {
      return cartList.some(el => el.id === id) 
    }
      

    
    const clear= () =>{
        setCartList ([])
    }

    const removeItem= (id) =>{
      
      setCartList (cartList.filter(item => item.id !== id))

    }
    
    const cartWidget = () => {
      return cartList.reduce ((acum, item) => acum + item.quantity, 0)
    }
   
    const totalCart = () =>{
      return cartList.reduce ((acum, el) => acum + (el.precio * el.quantity), 0)
    }

    return (
    <CartContext.Provider value={{cartList,addItem,clear, removeItem, cartWidget, totalCart}}>
      { props.children }
    </CartContext.Provider>



    );
}

export default CartContextProvider; 
