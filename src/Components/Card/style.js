import styled from "styled-components";

export const Container = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(229,234,212,1) 90%);
    width: 200px;
    // width: 20%;
    // max-width: 220px;
    // min-width: 200px;
    height: 500px;
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #e5ead4;
    text-align: center;
    justify-content: center;
    // box-shadow: 2px 2px 5px grey;
`
export const Title = styled.h2`
    padding: 3% 0 3% 0;
    color: #334f53;
`
export const Img = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`
export const Value = styled.h2`
    color: #334f53;
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
    background-color: #334f53;
    color: white;
    border-radius: 20px;
  
    &:active{
      background-color: #45936c;
      color: #e5ead4;
    }
    
`
export const SvgHeart = styled.svg`
    // position: relative;
    // top: 10px;
    // left: 80px;
    // fill: green;
`
export const ButtonHeart = styled.button`
    position: relative;
    top: 10px;
    left: 80px;
    background: transparent;
    border: none;
`
export const Absolute = styled.div`
    width: 198px;
    // width: 20%;
    // max-width: 220px;
    // min-width: 200px;
    height: 200px;
    position: absolute;
`
export const Div = styled.div`
    position: relative;
    top: 285px;
`