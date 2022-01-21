import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { mostrarAlertaAction } from "../actions/errorFormularioActions";

import {
  obtenerUnicoProductoAction,
  editarProductoAction,
} from "../actions/productosActions";

export default function EditarProducto() {
  const [producto, guardarProducto] = useState({ nombre: "", precio: "" });

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(obtenerUnicoProductoAction(params));
  }, [dispatch, params]);

  const { data } = useSelector((state) => state.productos.producto);
  const { alerta } = useSelector((state) => state);

  useEffect(() => {
    if (!!data) return guardarProducto(data);
  }, [data]);

  function handleOnSubmit(e) {
    e.preventDefault();
    let { nombre, precio } = producto;

    if (!nombre.trim() || precio <= 0) {
      return dispatch(
        mostrarAlertaAction({ mensaje: "Todos los campos son obligatorios" })
      );
    }

    dispatch(editarProductoAction({ id: params.id, nombre, precio }));

    return navigate("/");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        {alerta.mostrarAlerta && (
          <h3 className="alert alert-danger text-center font-weight-bold">
            {alerta.mensaje}
          </h3>
        )}
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={producto.nombre}
                  onChange={(e) =>
                    guardarProducto({
                      ...producto,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={producto.precio}
                  onChange={(e) => {
                    return guardarProducto({
                      ...producto,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
