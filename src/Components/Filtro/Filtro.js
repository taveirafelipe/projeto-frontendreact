import React from "react";
import { Container, Button } from "./style";

const Header = (props) => {
  const handleName = (event) => {
    props.setSearchName(event.target.value);
  };
  const handleMinValue = (event) => {
    props.setMinValue(event.target.value);
  };
  const handleMaxValue = (event) => {
    props.setMaxValue(event.target.value);
  };
  return (
    <Container>
      <h3>Filtro:</h3>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Nome"
          value={props.searchName}
          onChange={handleName}
        />
      </div>
      <div>
        <label>Preço:</label>
        <p>Mínimo:</p>
        <input
          type="number"
          placeholder="Valor mínimo"
          value={props.minValue}
          onChange={handleMinValue}
        />
        <p>Máximo:</p>
        <input
          type="text"
          placeholder="Valor máximo"
          value={props.maxValue}
          onChange={handleMaxValue}
        />
      </div>
      <div>
        <label>Ordenar: </label>
        <select>
          <option value="cre"></option>
          <option value="cre">Crescente</option>
          <option value="dec">Decrescente</option>
        </select>
      </div>
      <Button onClick={props.cleanSearch}>Limpar filtro</Button>
    </Container>
  );
};

export default Header;
