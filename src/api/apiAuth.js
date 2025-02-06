import clienteAxios from "../../config/axios";

export default {
  registro(data) {
    return clienteAxios.post("/register", data);
  },
};
