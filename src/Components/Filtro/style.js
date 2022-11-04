import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid #000;
    width: 20%;
    min-width: 170px;
    max-width: 210px;
`
export const Button = styled.button`
    height: 30px;
    border: 0px solid grey;
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