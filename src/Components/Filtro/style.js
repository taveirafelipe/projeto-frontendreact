import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    width: 300px;
    position: sticky;
    top: 200px;
    // border: 1px solid #000;
    min-width: 170px;
    max-width: 210px;
`
export const Button = styled.button`
    height: 30px;
    border: 0px solid grey;
    background-color: #e5ead4;
    color: #334f53;
    border-radius: 15px;

    &:active{
    background-color: #334f53;
    color: #e5ead4;;
    }
`
export const Input = styled.input`
    height: 25px;
    width: 100%;
`
export const Select = styled.select`
    height: 30px;
    width: 100%;
    border-radius: 15px;
    
`