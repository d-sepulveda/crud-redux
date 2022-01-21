import {
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_UNICO_PRODUCTO,
  OBTENER_UNICO_PRODUCTO_EXITO,
  OBTENER_UNICO_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
  BORRAR_PRODUCTO,
  BORRAR_PRODUCTO_EXITO,
  BORRAR_PRODUCTO_ERROR,
} from "../types";

// cada reducer tiene su propio state

const initialState = {
  productos: [],
  producto: {},
  error: false,
  loading: false,
};

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return { ...state, loading: true };

    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload.data,
      };

    case OBTENER_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_UNICO_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    case OBTENER_UNICO_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        producto: action.payload,
      };

    case OBTENER_UNICO_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
      };

    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case BORRAR_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    case BORRAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.filter((item) => item.id !== action.payload),
      };

    case BORRAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
