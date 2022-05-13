import React from "react";
import { ConjuntoDoCarrinho } from "./styles";
import Itens from "./Itens/Itens";

class Carrinho extends React.Component {
  render() {
    let valorTotal = 0;
    const itensDoCarrinho =
      this.props.carrinho &&
      this.props.carrinho.map((item) => {
        valorTotal += item.value;
        return (
          <Itens
            key={item.id}
            quantidade={item.quantidade}
            nome={item.name}
            valor={item.value}
            onClick={() => this.props.removeItemFromCart(item)}
          />
        );
      });

    return (
      <ConjuntoDoCarrinho>
        <h2>Carrinho:</h2>
        <div>{itensDoCarrinho}</div>
        <p>Valor total: R$ {valorTotal},00</p>
      </ConjuntoDoCarrinho>
    );
  }
}

export default Carrinho;
