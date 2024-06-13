import React, {useState} from 'react'
import Menu from './Menu'
import Cart from '../components/Cart';


export default function Home() {

  const [shoppingCart, setShoppingCart] = useState([]);

  function updateShoppingCart(item){
    console.log('item in updateShoppingCart', item)
    //get the clicked item and add to shoppingCart array
    setShoppingCart([...shoppingCart, item])
  }

  return (
    <>
        <div>Home</div>
        <Cart shoppingCart={shoppingCart} />
        <Menu updateShoppingCart={updateShoppingCart} />
    </>
  )
}
