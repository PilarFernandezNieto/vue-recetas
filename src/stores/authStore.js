import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToastStore } from "./toastStore";
import apiAuth from "@/api/apiAuth";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("AUTH_TOKEN") || null);
  const user = ref(null);
  const router = useRouter();
  const toast = useToastStore();

  const setToken = (newToken) => {
    token.value = newToken;
    if (newToken) {
      localStorage.setItem("AUTH_TOKEN", newToken);
    } else {
      localStorage.removeItem("AUTH_TOKEN");
    }
  };

  const registro = async (datos, errores) => {
    try {
        // const response = await clienteAxios.get("/sanctum/csrf-cookie");
        // console.log(response);
        const {data} = await apiAuth.registro(datos);
        console.log(data);
        
        errores.value = [];
        if (data.type === "success") {
          toast.mostrarExito(data.message);
          router.push({ name: "login" });
        }
      } catch (error) {
        errores.value = Object.values(error.response.data.errors);
      }
  }

  return {
    registro
  };
});
