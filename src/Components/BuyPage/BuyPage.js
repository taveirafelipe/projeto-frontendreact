import { useState } from "react";
import Dados from "../Dados/Dados.json";
import searchButton from "../../Img/Default.png";
import cartButton from "../../Img/Carrinho-de-Compras.png";
import Filtro from "../Filtro/Filtro";
import Card from "../Card/Card";
import rocketStore from "../../Img/rocket-store.png";
import heart from "../../Img/coracao.png";
import {
  Container,
  ContainerCard,
  Header,
  ButtonSearch,
  ButtonImg,
  Input,
  Div,
  Divv,
  Image,
  ButtonMenu,
  Strong,
  Menu,
  Beggining,
  Logo,
  Name,
  Nav,
  ButtonImg2,
  Svg,
  ImageCart,
  SvgCart,
  Text
} from "./style";

const BuyPage = (props) => {
  const [searchName, setSearchName] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000000);
  const [quantItems, setQuantItems] = useState(1)
  const [fill1, setFill1] = useState("transparent")
  const [fill2, setFill2] = useState("transparent")

  const cleanSearch = () => {
    setSearchName("");
    setMinValue(0);
    setMaxValue(1000000000);
  };

  const cartItems = () =>{
    //Falta passar a quantidade de itens.
    setQuantItems()
    setFill1("red")
    setFill2("white")
  }

  return (
    <>
      <Beggining>{/* <p>ola</p> */}</Beggining>

      <Header>
        <Divv>
          <div>
            <a href="https://www.netshoes.com.br/">
              <Logo src={rocketStore}></Logo>
            </a>
          </div>
          <Div>
            <Input type="text" placeholder="O que você procura?" />
            <ButtonSearch>
              <Image src={searchButton}></Image>
            </ButtonSearch>
          </Div>
          <Divv>
            <Div>
              <Div>
                <Name>OLÁ, {props.name.toLocaleUpperCase()}!</Name>
              </Div>
              <ButtonImg>
                <Image src={heart} alt="Favoritos"></Image>
              </ButtonImg>
              <ButtonImg onClick={() => props.cartPage()}>
                <div>
                  <ImageCart src={cartButton}></ImageCart>
                  <SvgCart height="15" width="15">
                    <circle
                      cx="7.5"
                      cy="7.5"
                      r="7.5"
                      // stroke="black"
                      // stroke-width="3"
                      fill={fill1}
                    />
                    <Text x="3" y="12" fill={fill2}>{quantItems}</Text>
                  </SvgCart>
                </div>
              </ButtonImg>
            </Div>
          </Divv>
        </Divv>
      </Header>

      <Nav>
        <ButtonImg2 onClick={() => props.home()}>
          {/* <Image src={homeButton}></Image> */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              strokeWidth="0.5"
              stroke="#334f53"
            />{" "}
            <path
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              stroke="#334f53"
            />{" "}
          </Svg>
        </ButtonImg2>
        <ButtonMenu>
          <Svg viewBox="0 -10 100 80" width="25" height="25">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </Svg>
          <Strong>Todos os itens</Strong>
        </ButtonMenu>
      </Nav>

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
                  cart={props.cart}
                  setCart={props.setCart}
                  key={item.id}
                  Dados={item}
                  cartItems={cartItems}
                />
              );
            })}
        </ContainerCard>
      </Container>
      <footer></footer>
    </>
  );
};

export default BuyPage;
