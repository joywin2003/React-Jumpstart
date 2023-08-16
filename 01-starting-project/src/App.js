import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
   {cartIsShown && <Cart onHideCartHandler={hideCartHandler}/>}
      <Header showCartHandler={showCartHandler} hideCartHandler = {hideCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
