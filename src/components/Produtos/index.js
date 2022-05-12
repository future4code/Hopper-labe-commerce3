import React from "react";
import { Container } from "./styles";

export default class Produtos extends React.Component {
  render() {
    return (
      <Container>
        {this.props.products
          .filter((product) => {
            return (
              product.value >= this.props.filters.minPrice ||
              this.props.filters.minPrice === ""
            );
          })
          .filter((product) => {
            return (
              product.value <= this.props.filters.maxPrice ||
              this.props.filters.maxPrice === ""
            );
          })
          .filter((product) => {
            return (
              product.name
                .toUpperCase()
                .includes(this.props.filters.name.toUpperCase()) ||
              this.props.filters.name === ""
            );
          })
          .map((product) => (
            // Componente <Produto />
            <p>
              {product.name} {product.value}
            </p>
          ))}
      </Container>
    );
  }
}
