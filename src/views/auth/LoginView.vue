<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container w-1/2 mx-auto m-10 shadow-lg p-10 bg-white">
    <h1 class="text-center uppercase text-sm font-medium mb-4">
      Inicia sesión
    </h1>
    <form action="" class="p-4">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
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
          name="password"
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
