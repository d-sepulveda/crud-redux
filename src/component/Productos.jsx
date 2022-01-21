import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ocultarAlertaAction } from "../actions/errorFormularioActions";

import {
  obtenerProductosAction,
  borrarProductoAction,
} from "../actions/productosActions";

export default function Productos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerProductosAction());
    dispatch(ocultarAlertaAction())
  }, [dispatch]);

  const { productos } = useSelector((state) => state.productos);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger mr-2",
    },
    buttonsStyling: false,
  });

  function handleOnClickDeleteButton(id) {
    swalWithBootstrapButtons
      .fire({
        title: "Estas Seguro?",
        text: "Estas seguro de eliminar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Eliminalo!",
        cancelButtonText: "No, cancela!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Eliminado!",
            "Tu producto ha sido eliminado.",
            "success"
          );

          return dispatch(borrarProductoAction({ id }));
        }

        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "No has eliminado el producto",
            "error"
          );

          return;
        }
      });

    // dispatch(borrarProductoAction({ id }))
  }

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {!!productos &&
            productos.map((item) => (
              <tr key={`cell_${item.id}`}>
                <td>{item.nombre}</td>
                <td>
                  <span className="font-weight-bold">{item.precio}</span>
                </td>
                <td>
                  <Link
                    to={`/productos/editar/${item.id}`}
                    className="btn btn-primary mr-2"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleOnClickDeleteButton(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
