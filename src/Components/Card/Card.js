import React, { useState } from "react";
import {
  Container,
  Img,
  Title,
  ButtonAmount,
  Input,
  ButtonBuy,
  Value,
  SvgHeart,
  Div,
  Absolute,
  ButtonHeart,
} from "./style";
import Dados from "../Dados/Dados.json";

const Card = (props) => {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantidade] = useState(1);
  const [heartColor, setHeartColor] = useState(
    "rgba(229,234,212,0.6306897759103641)"
  );

  const plusOne = () => {
    setQuantidade(Number(quantity) + 1);
  };
  const minusOne = () => {
    if (quantity > 0) {
      setQuantidade(Number(quantity) - 1);
    }
  };
  const addCart = () => {
    props.setChange(props.change + 1);
    if (counter !== 0) {
      for (let item of props.cart) {
        if (item.id === props.Dados.id) {
          item.quantity += quantity;
          props.cartItems();

          localStorage.clear();
          localStorage.setItem("cart", JSON.stringify(props.cart));

          return;
        }
      }
    }

    const aux = [
      ...props.cart,
      {
        id: props.Dados.id,
        item: props.Dados,
        quantity: quantity,
      },
    ];
    props.setCart(aux);
    setCounter(counter + 1);

    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(aux));
  };
  const onChageQuantity = (event) => {
    if (event.target.value < 0) {
      setQuantidade(0);
    } else {
      setQuantidade(event.target.value);
    }
  };
  const changeColor = () => {
    if (heartColor === "rgba(229,234,212,0.6306897759103641)") {
      setHeartColor("red");
      // console.log(heartColor)
    } else {
      setHeartColor("rgba(229,234,212,0.6306897759103641)");
      // console.log(heartColor)
    }
  };
  return (
    <Container>
      <Title>{props.Dados.name}</Title>
      <Absolute>
        <Img src={props.Dados.imageUrl} />
      </Absolute>
      <ButtonHeart onClick={changeColor}>
        <SvgHeart
          fill={heartColor}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
        </SvgHeart>
      </ButtonHeart>
      <Div>
        <Value>
          {props.Dados.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Value>
        <div>
          <ButtonAmount onClick={() => minusOne()}>-</ButtonAmount>
          <Input value={quantity} onChange={onChageQuantity}></Input>
          <ButtonAmount onClick={() => plusOne()}>+</ButtonAmount>
        </div>
        <ButtonBuy onClick={() => addCart()}>Comprar</ButtonBuy>
      </Div>
    </Container>
  );
};

export default Card;
