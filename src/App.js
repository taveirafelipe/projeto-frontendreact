import { createGlobalStyle } from "styled-components";
import { MainContainer } from "./app-style";
import { useState } from "react";
import Home from "./Pages/HomePage/HomePage";
import BuyPage from "./Pages/BuyPage/BuyPage";
import Cart from "./Pages/CartPage/CartPage";
import { useEffect } from "react";

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
  const [name, setName] = useState("");
  const [page, setPage] = useState(2);
  const [cart, setCart] = useState([]);
  const [clientName, setClientName] = useState("Felipe");
  const [change, setChange] = useState(0)
  const [counter, setCounter] = useState(0);
  const [fill1, setFill1] = useState("transparent");
  const [fill2, setFill2] = useState("transparent");

  const home = () => {
    setPage(1);
  };
  const items = () => {
    setPage(2)
  };
  const cartPage = () => setPage(3);

  const removeCart = (item) => {
    const filteredCart = cart.filter((items) => items !== item);
    setCart(filteredCart);
    setChange(quantityCart()-item.quantity);
    
    localStorage.clear()
    localStorage.setItem('cart', JSON.stringify(filteredCart))
  };

  const quantityCart = () => {
    let itens = 0;
    if(!cart){
      return 0;
    }else{
      for(let item of cart){
        itens += item.quantity;
      };
      return itens;
    }
    
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    setCounter(quantityCart());
  }, []);
  useEffect(() => {
    setCounter(quantityCart());
  }, [change]);

  switch (page) {
    // case 1:
    //   return (
    //     <MainContainer>
    //       <GlobalStyled />
    //       <Home 
    //       cart={cart}
    //       setCart={setCart}
    //       home={home}
    //       items={items}
    //       cartPage={cartPage}
    //       counter={counter}
    //       setCounter={setCounter}
    //       fill1={fill1}
    //       setFill1={setFill1}
    //       fill2={fill2}
    //       setFill2={setFill2}
    //       name={name}
    //       setName={setName}
    //       clientName={clientName}
    //       searchName={searchName}
    //       setSearchName={setSearchName}
    //       />
    //     </MainContainer>
    //   );
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
          clientName={clientName}
          counter={counter}
          setCounter={setCounter}
          change={change}
          setChange={setChange}
          fill1={fill1}
          setFill1={setFill1}
          fill2={fill2}
          setFill2={setFill2}
          name={name}
          setName={setName}
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
          clientName={clientName}
          counter={counter}
          setCounter={setCounter}
          change={change}
          setChange={setChange}
          fill1={fill1}
          setFill1={setFill1}
          fill2={fill2}
          setFill2={setFill2}
          name={name}
          setName={setName}
          removeCart={removeCart}
          />
        </MainContainer>
      );
    default:
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
          clientName={clientName}
          counter={counter}
          setCounter={setCounter}
          change={change}
          setChange={setChange}
          fill1={fill1}
          setFill1={setFill1}
          fill2={fill2}
          setFill2={setFill2}
          name={name}
          setName={setName}
          />
        </MainContainer>
      );
  }
}

export default App;
