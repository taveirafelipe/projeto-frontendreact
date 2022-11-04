import { createGlobalStyle } from "styled-components";
import Filtro from "./Components/Filtro/Filtro";
import Card from "./Components/Card/Card";
import { Container, MainContainer, ContainerCard, Header, ButtonSearch, ButtonImg, Input, Div } from "./app-style";
import { useState } from "react";
import Dados from "./Components/Dados/Dados.json";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
function App() {
  const [cart, setCart] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000000);

  const cleanSearch = () => {
    setSearchName("");
    setMinValue(0);
    setMaxValue(1000000000)
  };

  return (
    <MainContainer>
      <GlobalStyled />
      <Header>
        <h2>Ola!</h2>
        <Div>
          <Input type="text" placeholder="O que você procura?"/>
          <ButtonSearch >Buscar</ButtonSearch>
        </Div>
      </Header>
      <Container>
        <Filtro
          searchName={searchName}
          setSearchName={setSearchName}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          cleanSearch={cleanSearch}
        />
        <ContainerCard>
          {Dados.filter((item) => {
            return item.name
              .toLocaleLowerCase()
              .includes(searchName.toLocaleLowerCase());
          })
            .filter((item) => {
              return item.value > minValue;
            })
            .filter((item) => {
              return item.value < maxValue;
            })
            .map((item) => {
              return (
                <Card
                  cart={cart}
                  setCart={setCart}
                  key={item.id}
                  Dados={item}
                />
              );
            })}
        </ContainerCard>
      </Container>
    </MainContainer>
  );
}

export default App;
