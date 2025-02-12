<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="mt-10 flex flex-col items-center">
        <section
            class="w-[90%] md:w-1/2 mx-auto m-10 shadow-lg p-10 space-y-8 flex flex-col justify-center bg-amber-50"
        >
            <RouterLink
                :to="{ name: 'ingredientes' }"
                class="bg-amber-500 py-3 px-10 rounded text-center text-2xl font-bold"
                >Ingredientes</RouterLink
            >
            <RouterLink
                :to="{ name: 'recetas' }"
                class="bg-amber-500 py-3 px-10 rounded text-center text-2xl font-bold"
                >Recetas</RouterLink
            >
            <RouterLink
                :to="{ name: 'usuarios' }"
                class="bg-amber-500 py-3 px-10 rounded text-center text-2xl font-bold"
                >Usuarios</RouterLink
            >
        </section>
    </div>
</template>
