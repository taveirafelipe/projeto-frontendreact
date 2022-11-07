import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const Header = styled.header`
  height: 10vh;
  text-align: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  max-width: 1270px;
  width: 100%;
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 10px;
  flex-wrap: wrap;
  
`
export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Divv = styled.div`
  display: flex;
  // width: 100%;
  // align-items: center;
`
export const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 0.5px solid grey;
  border-radius: 20px 0  0 20px;
  padding: 0 0 0 10px;
`
export const ButtonSearch = styled.button`
  width: 60px;
  height: 30px;
  background-color: white;
  border: 0px solid grey;
  border-radius: 0 20px 20px 0;
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
export const ButtonImg = styled.button`
  width: 60px;
  height: 30px;
  background-color: white;
  border: 0px solid grey;
  border-radius: 20px;
  background-color: lightblue;
  color: grey;
  margin: 0 20px 0 20px;

  &:hover{
    color:black;
  }

  &:active{
    background-color: blue;
    color: white;
  }
`
export const Image = styled.img`
  height: 28px;
  jutify-content: center;
  align-itens: center;
`
