import styled from "styled-components";

export const Container = styled.div`
    max-width: 400px;
    min-width: 250px;
    height: fit-content;
    padding: 20px;
    background: #e5ead4;
    border-radius: 25px 25px 0 0;
    
`
export const P = styled.p`
    font-size: 15px;
`
export const H3 = styled.h3`
    font-size: 15px;
`
export const DivSide = styled.div`
    display: flex;
    flex-display: row;
    justify-content: space-between;
    padding: 0 0 20px 0;
`
export const Div = styled.div`
    display: flex;
    flex-display: row;
    justify-content: center;
    padding: 0 0 20px 0;
`
export const Input = styled.input`
    padding: 0 0 0 15px;  
    min-width: 150px;
    max-width: 200px;
    height: 30px;
    border-radius: 15px 0 0 15px; 
    border: none;
`
export const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 0 15px 15px 0; 
    border: none;
    color: #334f53;
    background: white;

    &:hover{
        background: #45936c;
        color: #e5ead4;
    }
`
export const ButtonFinal = styled.button`
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 25px 25px 25px 25px; 
    border: none;
    color: white;
    background: #334f53;

    &:hover{
        background: #45936c;
        color: #e5ead4;
    }
`