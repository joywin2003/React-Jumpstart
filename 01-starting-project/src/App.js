import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <>
    <Cart/>
      <Header onClick = {setCartIsShown}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
