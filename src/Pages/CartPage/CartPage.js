import { useState } from "react";
import searchButton from "../../Img/Default.png";
import rocketStore from "../../Img/rocket-store.png";
import CartCard from "../../Components/CartCard/CartCard";
import CardSummary from "../../Components/CardSummary/CardSummary";
import {
  Container,
  Header,
  ButtonSearch,
  Input,
  Div,
  Divv,
  Beggining,
  Logo,
  Name,
  BlankSpace,
  Cart,
  Summary,
  Title,
  SvgSearch,
} from "./style";
import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav/Nav";

const CartPage = (props) => {
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const onClickName = () => {
    props.setSearchName(name);
    props.items();
  };

  return (
    <>
      <Beggining>{/* <p>ola</p> */}</Beggining>

      <Header>
        <Divv>
          <div>
            <a href="">
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
                <Name>OLÁ, {props.clientName.toLocaleUpperCase()}!</Name>
              </Div>
            </Div>
          </Divv>
        </Divv>
      </Header>

      <Nav home={props.home} items={props.items} />

      <Container>
        <BlankSpace></BlankSpace>
        <Cart>
          <Title>Meu carrinho</Title>
          {(props.cart.length === 0) ? (
            <div>
              <br/>
              <h2>Seu carrinho está vazio...</h2>
              <p>Que tal aproveitar nossas ofertas especiais?</p>
               <a href="">Clique aqui e confira</a>
            </div>
          ):(
            props.cart.map((item) => {
              return (
                <CartCard
                  cart={props.cart}
                  key={item.id}
                  Dados={item}
                  removeCart={props.removeCart}
                />
              );
            })
          )}
        </Cart>
        <Summary>
          <Title>Resumo de compra</Title>
          <CardSummary cart={props.cart} />
        </Summary>
        <BlankSpace></BlankSpace>
      </Container>

      <Footer />
    </>
  );
};

export default CartPage;
