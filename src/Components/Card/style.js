import styled from "styled-components";

export const Container = styled.div`
    background-color: lightgrey;
    width: 20%;
    max-width: 220px;
    min-width: 200px;
    height: 500px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    justify-content: center;
`
export const Title = styled.h2`
    padding: 3% 0 3% 0;
`
export const Img = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`
export const Value = styled.h2`
`
export const ButtonAmount = styled.button`
    padding: 10px;
    font-size: 30px;
    background-color: transparent;
    border: none;
    
`
export const Input = styled.input`
    width: 50px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    
`
export const ButtonBuy = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    font-size: 17px;
    background-color: lightblue;
    color: grey;

    &:hover{
      color:black;
    }
  
    &:active{
      background-color: blue;
      color: white;
    }
    
`
