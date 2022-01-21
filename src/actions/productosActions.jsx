import Swal from "sweetalert2";

import clienteAxios from "../config/axios";
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

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch({
      type: OBTENER_PRODUCTOS,
    });

    try {
      let payload = await clienteAxios.get("/productos");

      dispatch({
        type: OBTENER_PRODUCTOS_EXITO,
        payload,
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: OBTENER_PRODUCTOS_ERROR,
        payload: true,
      });
    }
  };
}

export function obtenerUnicoProductoAction({ id }) {
  return async (dispatch) => {
    dispatch({
      type: OBTENER_UNICO_PRODUCTO,
    });

    try {
      let payload = await clienteAxios.get(`/productos/${id}`);

      dispatch({
        type: OBTENER_UNICO_PRODUCTO_EXITO,
        payload,
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: OBTENER_UNICO_PRODUCTO_ERROR,
        payload: false,
      });
    }
  };
}

export function crearNuevoProductoAction(producto = {}) {
  return async (dispatch) => {
    dispatch({
      type: AGREGAR_PRODUCTO,
    });

    try {
      await clienteAxios.post("/productos", producto);

      dispatch({
        type: AGREGAR_PRODUCTO_EXITO,
        payload: producto,
      });

      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      console.log(error);

      dispatch({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: true,
      });

      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Ha ocurrido un error, porfavor intentalo de nuevo",
      });
    }
  };
}

export function editarProductoAction({ id = "", nombre = "", precio = 0 }) {
  return async (dispatch) => {
    dispatch({
      type: EDITAR_PRODUCTO,
    });

    try {
      await clienteAxios.put(`/productos/${id}`, {
        nombre,
        precio,
      });

      dispatch({
        type: EDITAR_PRODUCTO_EXITO,
      });

      Swal.fire("Correcto", "El producto se modificó correctamente", "success");
    } catch (error) {
      console.error(error);

      dispatch({
        type: EDITAR_PRODUCTO_ERROR,
        payload: true,
      });

      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Ha ocurrido un error, porfavor intentalo de nuevo",
      });
    }
  };
}

export function borrarProductoAction({ id }) {
  return async (dispatch) => {
    dispatch({
      type: BORRAR_PRODUCTO,
    });

    try {
      await clienteAxios.delete(`/productos/${id}`);

      dispatch({
        type: BORRAR_PRODUCTO_EXITO,
        payload: id,
      });

      Swal.fire(
        "Correcto",
        "El producto se ha borrado correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);

      dispatch({
        type: BORRAR_PRODUCTO_ERROR,
        payload: true,
      });

      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Ha ocurrido un error, porfavor intentalo de nuevo",
      });
    }
  };
}
