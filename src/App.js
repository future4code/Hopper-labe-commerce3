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
      name: "",
    },
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
  updateName = (ev) => {
    this.setState({
      filters: { ...this.state.filters, name: ev.target.value },
    });
  };

  render() {
    return (
      <div>
        <Filtros
          filters={this.state.filters}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
          updateName={this.updateName}
        />
        <Produtos products={this.state.products} filters={this.state.filters} />
        <Carrinho />
      </div>
    );
  }
}

export default App;
