import { React, useState } from "react";
import trash from "../../Img/trash.svg"
import {
  Container,
  DivCol,
  DivRow,
  DivRow1,
  DivValue,
  ButtonAmount,
  Input,
  DivText,
  DivImg,
  Img,
  P,
  TrashImg,
  TrashButton
} from "./style";

const CartCard = (props) => {

  return (
    <Container>
      <DivRow1>
        <DivImg>
          <Img src={props.Dados.item.imageUrl}></Img>
        </DivImg>
        <DivText>
          <DivValue>
            <h3>{props.Dados.item.name}</h3>
            <TrashButton onClick={() => props.removeCart(props.Dados)}>
              <TrashImg src={trash}></TrashImg>
            </TrashButton>
          </DivValue>
          <P>Ref:{props.Dados.id}</P>
          <P>
            Vendido e entregue por <a href="">Rocket Store</a>
          </P>
        </DivText>
      </DivRow1>
      <DivValue>
        <DivRow>
          <h3>Quantidade:</h3>
          <div>
            {/* <ButtonAmount >-</ButtonAmount> */}
            <Input value={props.Dados.quantity} ></Input>
            {/* <ButtonAmount >+</ButtonAmount> */}
          </div>
        </DivRow>
        <DivCol>
          <h3>{props.Dados.item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </DivCol>
      </DivValue>
      <div>
        <a href="">Ver mais produtos</a>
      </div>
    </Container>
  );
};

export default CartCard;
