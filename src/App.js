import { useState } from 'react';


import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

 const [cartIsShow,setCartIsShown]=useState(false);

 function showCarthandler() {
  setCartIsShown(true);
 

 }

 function hideCartHandler(){
  setCartIsShown(false);
 }

  return (
    <CartProvider>
      {cartIsShow && <div>Cart....</div>}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );

}

export default App;
