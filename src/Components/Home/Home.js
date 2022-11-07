import React from "react";
import {
    Header,
    ButtonSearch,
    ButtonImg,
    Input,
    Div,
    Divv,
    Image,
  } from "./style";
  import searchButton from "../../Img/Default.svg";
  import cartButton from "../../Img/Carrinho-de-Compras.png";
  import homeButton from "../../Img/home.png";

const Home = (props) => {
    return(
        <>
            <Header>
                <h2>Ola!</h2>
                <Divv>
                <ButtonImg onClick={() => props.home()}>
                    <Image src={homeButton}></Image>
                </ButtonImg>
                <Div>
                    <Input type="text" placeholder="O que você procura?" />
                    <ButtonSearch>
                    <img src={searchButton}></img>
                    </ButtonSearch>
                </Div>
                <ButtonImg>
                    <Image src={cartButton}></Image>
                </ButtonImg>
                </Divv>
          </Header>
        </>
    );
};

export default Home;