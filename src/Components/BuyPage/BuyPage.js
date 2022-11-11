import { React, useState } from "react";
import Dados from "../Dados/Dados.json";
import cartButton from "../../Img/Carrinho-de-Compras.png";
import Filtro from "../Filtro/Filtro";
import Card from "../Card/Card";
import rocketStore from "../../Img/rocket-store.png";
import heart from "../../Img/coracao.png";
import Pagination from "../Pagination/Pagination";
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
  Text,
  ButtonCart,
  Footer,
  SvgSearch,
} from "./style";

const BuyPage = (props) => {
  //Filtro
  const higherValue = Dados.reduce(function (prev, current) {
    return prev.value > current.value ? prev : current;
  });
  const [name, setName] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(higherValue.value);
  const [order, setOrder] = useState("");

  const cleanSearch = () => {
    props.setSearchName("");
    setMinValue(0);
    console.log(higherValue);
    setMaxValue(higherValue.value);
    setOrder("");
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const onClickName = () => {
    props.setSearchName(name);
  };

  //Quantidade carinho
  const [quantItems, setQuantItems] = useState(1);
  const [fill1, setFill1] = useState("transparent");
  const [fill2, setFill2] = useState("transparent");
  const cartItems = () => {
    //Falta passar a quantidade de itens.

    setFill1("red");
    setFill2("white");
  };

  //Paginação
  const max_items = 11;
  const pages = Math.ceil(Dados.length / max_items);
  const [page, setPage] = useState(2);

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
            <Input
              type="text"
              placeholder="O que você procura?"
              value={name}
              onChange={handleName}
            />
            <ButtonSearch onClick={onClickName}>
              <SvgSearch
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1277.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1277.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#334f53"
                  stroke="none"
                >
                  <path
                    d="M3870 12793 c-100 -6 -333 -34 -455 -54 -621 -104 -1247 -374 -1761
                    -760 -766 -575 -1305 -1387 -1532 -2309 -74 -301 -109 -556 -119 -880 -24
                    -816 207 -1637 655 -2330 576 -891 1468 -1525 2493 -1773 922 -224 1884 -121
                    2744 292 201 96 437 236 584 344 l53 39 70 -70 70 -70 -25 -63 c-78 -195 -56
                    -432 56 -611 38 -60 407 -434 2139 -2163 2251 -2249 2135 -2138 2288 -2186
                    133 -42 288 -42 420 0 134 42 173 74 538 436 329 325 404 409 451 502 66 132
                    82 330 39 478 -53 182 112 7 -2212 2331 -1992 1992 -2115 2113 -2183 2148
                    -185 95 -436 101 -603 16 -23 -12 -45 -20 -50 -18 -5 2 -36 29 -69 61 l-61 58
                    68 97 c250 353 435 723 565 1127 261 812 260 1702 -3 2510 -85 261 -204 533
                    -331 758 -201 355 -502 734 -804 1010 -449 410 -957 705 -1534 891 -470 151
                    -998 218 -1491 189z"
                  />
                </g>
              </SvgSearch>
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
              <ButtonCart onClick={() => props.cartPage()}>
                <div>
                  <ImageCart src={cartButton}></ImageCart>
                  <SvgCart height="15" width="15">
                    <circle cx="7.5" cy="7.5" r="7.5" fill={fill1} />
                    <Text x="3" y="12" fill={fill2}>
                      {quantItems}
                    </Text>
                  </SvgCart>
                </div>
              </ButtonCart>
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
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          order={order}
          setOrder={setOrder}
          cleanSearch={cleanSearch}
          higherValue={higherValue.value}
        />
        <div>
          <ContainerCard>
            {Dados.filter((item) => {
              return item.name
                .toLocaleLowerCase()
                .includes(props.searchName.toLocaleLowerCase());
            })
              .filter((item) => {
                return item.value >= minValue;
              })
              .filter((item) => {
                return item.value <= maxValue;
              })
              .sort((a, b) => {
                if (order === "increasing") return a.value - b.value;

                if (order === "decreasing") return b.value - a.value;

                return 0;
              })
              .filter((_, index) => {
                return (
                  index >= (page - 1) * max_items && index <= page * max_items
                );
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
          <Pagination total={pages} page={page} setPage={setPage} />
        </div>
      </Container>

      <Footer>
        <p>Oi eu sou o Footer!</p>
      </Footer>
    </>
  );
};

export default BuyPage;
