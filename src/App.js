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
        <Carrinho />
      </div>
    );
  }
}

export default App;
