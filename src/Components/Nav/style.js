import styled from 'styled-components'

//NAV
export const Navigation = styled.nav`
  display: flex;
  background-color: #e5ead4;
  height: 3vh;
  min-height: 27px;
  align-items: center;
  padding-left: 45px;
`
export const ButtonImg2 = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ButtonMenu = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: black;
  margin: 0 0 0 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  // &:hover{
  //   color:black;
  // }

  // &:active{
  //   background-color: blue;
  //   color: white;
  }
`
export const Menu = styled.img`
  height: 20px;
  align-self: center;

`
export const Strong = styled.p`
  align-self: center;
  font-size: 16px;
  color: #334f53;
  padding: 10%;
`
export const Svg = styled.svg`
  fill: #334f53;
  stroke-width: 1px;
`