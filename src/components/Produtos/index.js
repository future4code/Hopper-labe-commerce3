import React from "react";
import {
  Container,
  Card,
  ImgProdutoContainer,
  ImgProduto,
  ButtonAdd,
} from "./styles";

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

              <span>{product.name}</span>
              <span>R${product.value},00</span>
              <ButtonAdd
                onClick={() => this.props.adicionarProdutoNoCarrinho(product)}
              >
                Adicionar ao Carrinho
              </ButtonAdd>
            </Card>
          ))}
      </Container>
    );
  }
}
