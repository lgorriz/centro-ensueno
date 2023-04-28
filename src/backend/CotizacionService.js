import axios from "axios";
import { BASE_URL } from "../config";

export default function cotizacionService(data) {
  
    return axios.post(BASE_URL+'pedidoCotizacion/guardar', data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
}