import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;
    min-width: 400px;
    height: 250px;
    border: 2px solid #e5ead4;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    margin: 0 0 20px 0;
`
export const DivRow1 = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    height: 70%;
    width: 100%;
`
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    align-items: center;
`
export const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`
export const DivValue = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30%;
    width: 100%;
    align-items: center;
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
export const DivText = styled.div`
    padding: 0 0 0 15px;
`
export const DivImg = styled.div`
    width: 100px;
    height: 150px;
`
export const Img = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
`
export const P = styled.p`
    padding: 10px 0 0 10px;
`
export const TrashButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    cursor: pointer;
`
export const TrashImg = styled.img`
    width: 20px;
    height: 20px;
`
export const TrashDiv = styled.div`
    display: flex;
    flex-direction: row;
`