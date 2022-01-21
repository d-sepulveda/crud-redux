import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL,
  timeout: 1500,
});

export default clienteAxios;
