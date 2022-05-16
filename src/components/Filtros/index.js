import React from "react";
import { Container } from "./styles";
import styled from "styled-components";

export default function Filtros(props) {
  const [minPrice, updateMinPrice] = props.minPrice;
  const [maxPrice, updateMaxPrice] = props.maxPrice;
  const [queryName, updateQueryName] = props.queryName;

  return (
    <Container>
      <input
        type="number"
        placeholder="Valor mínimo"
        value={minPrice}
        onChange={updateMinPrice}
      />
      <input
        type="number"
        placeholder="Valor máximo"
        value={maxPrice}
        onChange={updateMaxPrice}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        value={queryName}
        onChange={updateQueryName}
      />
    </Container>
  );
}
