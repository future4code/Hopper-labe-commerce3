import React from "react";
import { Container } from "./styles";
import styled from "styled-components";

const Card = styled.div``;

const ImgProdutoContainer = styled.div`
  height: 200px;
  width: 200px;
  padding: 10px;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

const ImgProduto = styled.img`
  height: 200px;
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
            <Card key={product.id}>
              <ImgProdutoContainer>
                <ImgProduto
                  src={require(`../../data/imgs/${product.imageUrl}.png`)}
                />
              </ImgProdutoContainer>

              <p>{product.name}</p>
              <p>R${product.value},00</p>
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
