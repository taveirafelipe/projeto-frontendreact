import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
//HEADER
export const Beggining  = styled.div`
  height: 2.5vh;
  min-height: 22px;
  background: #e5ead4;
  text-align: end;
`
export const Header = styled.header`
  height: 6.5vh;
  min-height: 60px;
  text-align: center;
  background-color: #334f53;
`
export const Logo = styled.img`
  align-self:end;
  padding: 0 0 20px 50px;
`
export const Input = styled.input`
  width: 70%;
  min-width: 200px;
  max-width: 400px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 20px 0  0 20px;
  padding: 0 0 0 10px;
`
export const ButtonSearch = styled.button`
  width: 60px;
  height: 40px;
  background: white;
  border: 0px solid grey;
  border-radius: 0 20px 20px 0;
  
  color: grey;
  cursor: pointer;

  &:hover{
    background-color: #45936c;
  }
`
export const Divv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  padding-right: 30px;
`
export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Name = styled.h5`
  align-self: center;
  padding-left: 5%;
  color: white;
  width: 150px;
`
export const ButtonImg = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: transparent;
  margin: 0 10px 0 10px;
  cursor: pointer;

  // &:hover{
  //   color:black;
  // }

  // &:active{
  //   box-shadow: 5px 5px 20px black;
  // }
`
export const Image = styled.img`
  height: 30px;
  jutify-self: center;
  align-items: center;
`
export const SvgSearch = styled.svg`
  width: 60px;
  height: 30px;

  &:hover path{
    fill: #e5ead4;
  }
`
//MAIN
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1270px;
  height: fit-content;
  justify-content: center;
  margin-bottom: 50px;
  
`
export const BlankSpace = styled.div`
  // width: 100px;
`
export const Cart = styled.div`
  width: 50vw;
  padding: 10% 2% 0 0;
  font-size: 12px;

`
export const Summary = styled.div`
    width: 30vw;
    padding-top: 10%;
    font-size: 12px;
`
export const Title = styled.h1`
  padding-bottom: 15px;
`
