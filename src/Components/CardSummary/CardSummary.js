import { useState } from "react";
import { Container, DivSide, Div, Input, Button, ButtonFinal, P, H3 } from "./style";

const CardSummary = (props) => {
    const [frete, setFrete] = useState(1000); 
    const [cupom, setCupom] = useState("")
    const [desconto, setDesconto] = useState(0)
    
    let itens = 0;
    let subtotal = 0;
    for(let item of props.cart){
        itens += item.quantity;
        subtotal += (item.quantity * item.item.value);
    };
    const write = () =>{
        if(itens === 1) {
            return "item"
        }else if (itens > 1){
            return "itens"
        }
    };
    const handleCupom = (event) =>{
        setCupom(event.target.value)
    };
    const addCupom = () =>{
        if(cupom === "rocket10") {
            setDesconto(subtotal*0.10)
            return
        } else if(cupom === "rocket5") {
            setDesconto(subtotal*0.05)
            return
        } else if(cupom === "blackfriday15") {
            setDesconto(subtotal*0.15)
            return
        }else {
            return setDesconto(0)
        }
    };
    let total = subtotal + frete - desconto; 
    return (
        <Container>
            <div>
            <DivSide>
                <P>Subtotal ({itens} {write()})</P>
                <H3>{subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</H3>
            </DivSide>
            <DivSide>
                <P>Frete Rocket Store</P>
                <H3>{frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</H3>
            </DivSide>
            <div>
                <Div>
                    <Input value={cupom} onChange={handleCupom} placeholder="Cupom de Desconto"></Input>
                    <Button onClick={addCupom}>Aplicar</Button>
                </Div>
            </div>
            <DivSide>
                <P>Desconto</P>
                <H3>{desconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</H3>
            </DivSide>
            <DivSide>
                <P>Total</P>
                <H3>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</H3>
            </DivSide>
            </div>
            <Div>
                <ButtonFinal>FINALIZAR</ButtonFinal>
            </Div>
        </Container>
    );
};

export default CardSummary;