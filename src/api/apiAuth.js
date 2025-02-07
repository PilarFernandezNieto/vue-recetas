import clienteAxios from "../../config/axios";

export default {
  registro(data) {
    return clienteAxios.post("/register", data);
  },
  login(data) {
    return clienteAxios.post("/login", data);
  },
};
