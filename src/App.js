import { useState } from 'react';


import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';


import Cart from './components/Cart/';

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
      {cartIsShow && < Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );

}

export default App;
