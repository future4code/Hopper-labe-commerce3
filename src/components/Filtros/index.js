import React from "react";
import { Container } from "./styles";

export default function Filtros(props) {
  return (
    <Container>
      <h2>Filtros</h2>
      <input
        type="number"
        placeholder="Valor mínimo"
        value={props.filters.minPrice}
        onChange={props.updateMinPrice}
      />
      <input
        type="number"
        placeholder="Valor máximo"
        value={props.filters.maxPrice}
        onChange={props.updateMaxPrice}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        value={props.filters.name}
        onChange={props.updateName}
      />
    </Container>
  );
}
