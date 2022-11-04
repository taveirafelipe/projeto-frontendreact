import React, { useState } from "react";
import {Container, Img, Title, ButtonAmount, Input, ButtonBuy, Value} from "./style";
import Dados from "../Dados/Dados.json";

const Card = (props) => {
    const [quantity, setQuantidade] = useState(1);
    const plusOne = () => {
        setQuantidade(Number(quantity) + 1)
    };
    const minusOne = () => {
        if(quantity>0){
            setQuantidade(Number(quantity) - 1)
        }
    };
    const addCart = () => {
        for(let item of props.cart){
            if(item.id === props.Dados.id){
                item.quantity += quantity; 
                console.log(props.cart)
                return
            }
        }  
        const aux = [...props.cart, 
            {
                id: props.Dados.id,
                item: props.Dados,
                quantity: quantity,
            }
        ] 
        props.setCart(aux)
        console.log(props.cart)
    }
    const onChageQuantity = (event) =>{
        if(event.target.value<0){
            setQuantidade(0)
        }else{
            setQuantidade(event.target.value)
        }
    }
    return (
        <Container>
            <Title>{props.Dados.name}</Title>
            <Img src={props.Dados.imageUrl}/>
            <Value>R${props.Dados.value}</Value>
            <div>
                <ButtonAmount onClick={minusOne}>-</ButtonAmount>
                <Input value={quantity} onChange={onChageQuantity}></Input>
                <ButtonAmount onClick={plusOne}>+</ButtonAmount>
            </div>
            <ButtonBuy onClick={addCart}>Comprar</ButtonBuy>
        </Container>
    );
}

export default Card;