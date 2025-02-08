<script setup>
import { RouterLink } from 'vue-router';
import { useIngredientesStore } from '@/stores/ingredientesStore'
import Ingrediente from '@/components/Ingrediente.vue'
const ingredientesStore = useIngredientesStore()
</script>
<template>
    <div class="w-[80%] mx-auto shadow-md p-8 bg-amber-50 space-y-4 rounded-sm my-10">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-black mb-4">Listado de ingredientes</h1>
            <RouterLink :to="{name: 'nuevo-ingrediente'}" class="bg-amber-500 hover:bg-amber-800 text-white py-2 px-4 text-lg font-bold rounded">Nuevo ingrediente</RouterLink>
        </div>
        <Ingrediente
            v-for="ingrediente in ingredientesStore.ingredientes"
            :key="ingrediente.id"
            :ingrediente="ingrediente"
        />
    </div>
</template>
