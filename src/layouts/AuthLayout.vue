<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onMounted } from "vue";
import clienteAxios from "../../config/axios";

</script>
<template>
  <div class="max-w-4xl m-auto mt-10 flex flex-col">
    <RouterView />
  </div>
</template>
