import { createGlobalStyle } from "styled-components";
import { MainContainer } from "./app-style";
import { useState } from "react";
import Home from "./Components/Home/Home";
import BuyPage from "./Components/BuyPage/BuyPage";
import Cart from "./Components/Cart/Cart"


const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: helvetica;
  }
`;
function App() {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(2);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("Felipe");

  const home = () => setPage(1);
  const items = () => setPage(2);
  const cartPage = () => setPage(3);

  const removeCart = (item) => {
    const filteredCart = cart.filter((items) => items !== item);
    setCart(filteredCart)
  };

  switch (page) {
    case 1:
      return (
        <MainContainer>
          <GlobalStyled />
          <Home 
          cart={cart}
          setCart={setCart}
          home={home}
          items={items}
          cartPage={cartPage}
          />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <BuyPage 
          searchName={searchName}
          setSearchName={setSearchName}
          cart={cart}
          setCart={setCart}
          home={home}
          items={items}
          cartPage={cartPage}
          name={name}
          />
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <Cart
          searchName={searchName}
          setSearchName={setSearchName}
          cart={cart}
          setCart={setCart}
          home={home}
          items={items}
          cartPage={cartPage}
          name={name}
          removeCart={removeCart}
          />
        </MainContainer>
      );
    default:
      <MainContainer>
          <GlobalStyled />
          <Home 
          cart={cart}
          setCart={setCart}
          home={home}
          />
        </MainContainer>
  }
}

export default App;
