import React from "react";

import Filtros from "./components/Filtros";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";

class App extends React.Component {
  render() {
    return (
      <div>
        <Filtros />
        <Produtos />
        <Carrinho />
      </div>
    );
  }
}

export default App;
