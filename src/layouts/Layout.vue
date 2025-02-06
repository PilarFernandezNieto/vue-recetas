<script setup>
import { onMounted } from "vue";
import { RouterView, RouterLink } from "vue-router";
onMounted(() => {
  $("#menu-toggle").click(() => {
    console.log("Hola");

    $("#mobile-menu").toggle();
  });
});
</script>
<template>
  <header class="shadow-md bg-white">
    <div class="max-w-screen-lg mx-auto">
      <div class="flex justify-between items-center p-4">
        <div>
          <img src="/img/logo.png" alt="Logo" class="w-60" />
        </div>
        <div class="block lg:hidden">
          <button id="menu-toggle" class="text-2xl text-medium">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <nav class="hidden lg:flex space-x-4 items-center">
          <a href="#"  class="text-xl text-medium text-amber-600 hover:text-amber-800">Recetas</a>
          <a
            href="#"
            class="text-xl text-medium text-amber-600 hover:text-amber-800"
            >Ingredientes</a
          >
          <RouterLink :to="{name:'login'}"  class="text-sm text-medium text-amber-600 hover:text-amber-800  border border-amber-600 p-2 rounded">Inicia sesión</RouterLink>
        </nav>
      </div>
    </div>
    <!-- Menú desplegable en dispositivos móviles -->
    <div id="mobile-menu" class="lg:hidden hidden bg-white shadow-md">
      <nav class="flex flex-col space-y-4 p-4">
        <a href="#"  class="text-xl text-medium text-amber-600 hover:text-amber-800">Recetas</a>
        <a
          href="#"
          class="text-xl text-medium text-amber-600 hover:text-amber-800"
          >Ingredientes</a
        >
        <RouterLink :to="{name:'login'}"  class="text-sm text-medium text-amber-600 hover:text-amber-800  border border-amber-600 p-2 rounded w-24">Inicia sesión</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

