import React from "react";

import Filtros from "./components/Filtros";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";

import jproducts from "./data/products.json";

class App extends React.Component {
  state = {
    products: jproducts,
    filters: {
      minPrice: "",
      maxPrice: "",
      queryName: "",
    },
    carrinho: [],
  };

  updateMinPrice = (ev) => {
    this.setState({
      filters: { ...this.state.filters, minPrice: ev.target.value },
    });
  };
  updateMaxPrice = (ev) => {
    this.setState({
      filters: { ...this.state.filters, maxPrice: ev.target.value },
    });
  };
  updateQueryName = (ev) => {
    this.setState({
      filters: { ...this.state.filters, queryName: ev.target.value },
    });
  };
  addItem = (item) => {
    this.setState({
      carrinho: [... this.state.carrinho, item]
    })
  }

  adicionarProdutoNoCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      }else{
        return false
      }
    });

    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.adicionarValorTotal(produto.price);
  };

  removeItemFromCart = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if (item.id !== itemParaRemover.id) {
          return item;
        }else{
          return false
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
      carrinho: [...this.state.carrinho, item],
    });
  };

  render() {
    console.log(this.state.carrinho);
    return (
      <div>
        <Filtros
          minPrice={[this.state.filters.minPrice, this.updateMinPrice]}
          maxPrice={[this.state.filters.maxPrice, this.updateMaxPrice]}
          queryName={[this.state.filters.queryName, this.updateQueryName]}
        />
        <Produtos
          products={this.state.products}
          filters={this.state.filters}
          addItem={this.addItem}
        />
        <Produtos 
        products={this.state.products} 
        filters={this.state.filters} 
        addItem={this.addItem}/>
        
        <Carrinho
          carrinho={this.state.carrinho}
          valorTotal={this.state.valorTotal}
          removerItemDoCarrinho={this.removerItemDoCarrinho}
        />
        <Carrinho />
      </div>
    );
  }
}

export default App;
