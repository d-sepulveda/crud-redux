import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Action de redux
import { crearNuevoProductoAction } from "../actions/productosActions";
import {
  mostrarAlertaAction,
} from "../actions/errorFormularioActions";

export default function NuevoProducto({ history }) {
  //state del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  // Utiliza use distpach y te crea una funcion
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { alerta } = useSelector((state) => state);

  //Mandar a llamar el action de productionAction
  function handleOnSubmit(e) {
    e.preventDefault();
    //validar formulario
    if (!nombre.trim() || precio <= 0) {
      return dispatch(
        mostrarAlertaAction({ mensaje: "Todos los campos son obligatorios" })
      );
    }

    dispatch(crearNuevoProductoAction({ nombre, precio }));

    // useNavigate el hook que reemplaza a redirect en react-router-dom v6
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
              Agregar Producto
            </h2>

            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => {guardarNombre(e.target.value)}}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
