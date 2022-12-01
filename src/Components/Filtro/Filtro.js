import React from "react";
import { Container, Button, Input, Select } from "./style";

const Filtro = (props) => {
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
        <div>
          <label>Valor mínimo:</label>
          <p>{props.minValue}</p>
          <Input
            type="range"
            min="0"
            max={props.higherValue}
            step="100"
            value={props.minValue}
            onChange={handleMinValue}
          />
        </div>
        <div>
          <label>Valor máximo:</label>
          <p>{props.maxValue}</p>
          <Input
            type="range"
            min="0"
            max={props.higherValue}
            step="100"
            value={props.maxValue}
            onChange={handleMaxValue}
          />
        </div>
      </div>
      <div>
        <label>Ordenar valor: </label>
        <Select value={props.order} onChange={event => props.setOrder(event.target.value)}>
          <option value=""></option>
          <option value="increasing">Crescente</option>
          <option value="decreasing">Decrescente</option>
        </Select>
      </div>
      <Button onClick={props.cleanSearch}>Limpar filtro</Button>
    </Container>
  );
};

export default Filtro;
