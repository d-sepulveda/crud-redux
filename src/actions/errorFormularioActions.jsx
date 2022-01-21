import { MOSTRAR_ALERTA_FORMULARIO, OCULTAR_ALERTA_FORMULARIO } from "../types";

export function mostrarAlertaAction({ mensaje = "" }) {
  return (dispatch) =>
    dispatch({
      type: MOSTRAR_ALERTA_FORMULARIO,
      payload: mensaje,
    });
}

export function ocultarAlertaAction() {
  return (dispatch) =>
    dispatch({
      type: OCULTAR_ALERTA_FORMULARIO
    });
}
