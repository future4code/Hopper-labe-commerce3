import React from "react";
import { Container } from "./styles";
import styled from "styled-components";

const Card = styled.div``;

const ImgProduto = styled.img`
  height: 100%;
  width: 150px;
`;

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
                .includes(this.props.filters.queryName.toUpperCase()) ||
              this.props.filters.queryName === ""
            );
          })
          .map((product) => (
            // Componente <Produto />

            <Card key={product.id}>
              <ImgProduto src={product.imageUrl} />
              <p>{product.name}</p>
              <p>R${product.value},00</p>
              {/* <button onClick={() => this.props.addItem(product)}> */}
              <button
                onClick={() => this.props.adicionarProdutoNoCarrinho(product)}
              >
                Adicionar ao Carrinho
              </button>
            </Card>
          ))}
      </Container>
    );
  }
}
