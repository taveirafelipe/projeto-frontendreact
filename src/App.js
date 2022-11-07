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
  const [page, setPage] = useState(2);
  const [cart, setCart] = useState([]);

  const home = () => setPage(1);
  const items = () => setPage(2);
  

  switch (page) {
    case 1:
      return (
        <MainContainer>
          <GlobalStyled />
          <Home 
          cart={cart}
          setCart={setCart}
          home={home}
          />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <BuyPage 
          cart={cart}
          setCart={setCart}
          home={home}
          />
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <Cart
          cart={cart}
          setCart={setCart}
          home={home}
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
