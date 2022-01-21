import { combineReducers } from "redux";

import productosReducer from "./productosReducer";
import errorFormularioReducer from "./errorFormularioReducer";

export default combineReducers({
  productos: productosReducer,
  alerta: errorFormularioReducer,
});
