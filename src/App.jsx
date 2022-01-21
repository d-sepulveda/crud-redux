import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Header from "./component/Header";
import NuevoProducto from "./component/NuevoProducto";
import Productos from "./component/Productos";
import EditarProducto from "./component/EditarProducto";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
