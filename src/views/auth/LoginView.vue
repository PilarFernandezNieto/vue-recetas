<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const datos = reactive({
  email: "",
  password: "",
});
const errores = ref({});

const submitForm = async () => {
  await authStore.login(datos, errores);
};

</script>
<template>
  <div class="mt-10">
    <a href="/">
      <img src="/img/logo.png" alt="Logo" class="w-60 mx-auto" />
    </a>
  </div>
  <div class="container w-7/8 md:w-1/2 mx-auto m-10 shadow-lg p-4 bg-white">
    <h1 class="text-center uppercase text-sm font-medium mb-4">
      Inicia sesión
    </h1>
    <form @submit.prevent="submitForm" class="p-4">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="datos.email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Contraseña</label
        >
        <input
          type="password"
          id="password"
          v-model="datos.password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600 sm:text-sm"
        />
      </div>

      <input
        type="submit"
        value="Inicia sesión"
        class="bg-amber-600 hover:bg-amber-800 transition duration-600 ease-in-out text-white p-2 w-full rounded-md cursor-pointer"
      />
    </form>
    <div class="flex justify-center">
      <RouterLink
        :to="{ name: 'registro' }"
        class="text-sm text-amber-600 hover:text-amber-800"
        >¿Aún no tienes cuenta? Regístrate aquí</RouterLink
      >
    </div>
  </div>
</template>
