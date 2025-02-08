<script setup>
import { useIngredientesStore } from '@/stores/ingredientesStore'
import Ingrediente from '@/components/Ingrediente.vue'
const ingredientesStore = useIngredientesStore()
</script>
<template>
    <div class="w-[80%] mx-auto shadow-md p-8 bg-amber-50 space-y-4 rounded-sm my-10">
        <h1 class="text-3xl font-black mb-4">Listado de ingredientes</h1>
        <Ingrediente
            v-for="ingrediente in ingredientesStore.ingredientes"
            :key="ingrediente.id"
            :ingrediente="ingrediente"
        />
    </div>
</template>
