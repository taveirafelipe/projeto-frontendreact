import { useState } from "react";
import {
  Container,
  DivCol,
  DivRow,
  DivRow1,
  DivValue,
  ButtonAmount,
  Input,
} from "./style";

const CartCard = (props) => {
  // const plusOne = () => {
  //   setQuantidade(Number(props.Dados.quantity) + 1);
  // };
  // const minusOne = () => {
  //   if (props.Dados.quantity > 0) {
  //     Number(props.Dados.quantity) -= 1;
  //   }
  // };
  return (
    <Container>
      <DivRow1>
        <img src={props.Dados.item.imageUrl}></img>
        <div>
          <h3>{props.Dados.item.name}</h3>
          <p>Ref:{props.Dados.id}</p>
          <p>
            Vendido e entregue por <a href="">Rocket Store</a>
          </p>
        </div>
      </DivRow1>
      <DivValue>
        <DivRow>
          <h3>Quantidade:</h3>
          <div>
            <ButtonAmount >-</ButtonAmount>
            <Input value={props.Dados.quantity} ></Input>
            <ButtonAmount >+</ButtonAmount>
          </div>
        </DivRow>
        <DivCol>
          <h3>{props.Dados.item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
          {/* <h4>ou R$ {props.Dados.item.value * 0.97} no PIX</h4> */}
        </DivCol>
      </DivValue>
      <div>
        <a href="https://www.netshoes.com.br/">Ver mais produtos</a>
      </div>
    </Container>
  );
};

export default CartCard;
