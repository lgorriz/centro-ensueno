import axios from "axios";
import { BASE_URL } from "../config";

export default function contactoService(data) {
  
    return axios.post(BASE_URL+'contactos/guardar', data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
}
  

