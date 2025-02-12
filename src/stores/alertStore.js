import { defineStore } from "pinia";
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const useAlertStore = defineStore("alert", () => {
  
  const toast = useToast();

  const mostrarExito = (mensaje) => {
    toast.success(mensaje, { duration: 3000, position: "top-right" });
  };

  const mostrarError = (mensaje) => {
    toast.error(mensaje, { duration: 3000, position: "top-right" });
  };

  const mostrarInfo = (mensaje) => {
    toast.info(mensaje, { duration: 3000, position: "top-right" });
  };

  const mostrarAdvertencia = (mensaje) => {
    toast.warning(mensaje, { duration: 3000, position: "top-right" });
  };

  return {
    mostrarExito,
    mostrarError,
    mostrarInfo,
    mostrarAdvertencia,
  };
});
