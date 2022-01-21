import { MOSTRAR_ALERTA_FORMULARIO, OCULTAR_ALERTA_FORMULARIO } from "../types";

const initialState = {
  mostrarAlerta: false,
  mensaje: "",
};

export default function errorFormularioReducer(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_ALERTA_FORMULARIO:
      return {
        ...state,
        mostrarAlerta: true,
        mensaje: action.payload,
      };

    case OCULTAR_ALERTA_FORMULARIO:
      return {
        mostrarAlerta: false,
      };

    default:
      return { ...state };
  }
}
