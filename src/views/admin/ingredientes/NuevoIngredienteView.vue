<script setup>
import { RouterLink } from 'vue-router'
import { useIngredientesStore } from '@/stores/ingredientesStore'
import SubmitInput from '@/components/SubmitInput.vue'

const ingredientesStore = useIngredientesStore()

const nuevoIngrediente = () => {
    console.log('Nuevo ingrediente')
}
</script>
<template>
    <div
        class="w-[90%] md:w-[70%] mx-auto shadow-md p-4 md:p-8 bg-amber-50 space-y-4 rounded-sm my-10"
    >
        <h1 class="text-3xl font-black mb-4">Nuevo Ingrediente</h1>
        <form @submit.prevent="nuevoIngrediente">
            <div class="mb-4">
                <label for="nombre" class="text-amber-800 text-lg uppercase"
                    >Ingrediente</label
                >
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrediente"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 focus:border-amber-800 rounded-md focus:outline-none"
                />
            </div>
            <div class="mb-4">
                <label for="imagen" class="text-amber-800 text-lg uppercase"
                    >Imagen</label
                >
                <input
                    type="file"
                    id="imagen"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 rounded-md file:bg-amber-50 file:p-2 file:rounded-md"
                />
            </div>
            <div class="mb-4">
                <label for="descripcion" class="text-amber-800 text-lg uppercase"
                    >Descripcion</label
                >
                <input
                    type="text"
                    id="descripcion"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 focus:border-amber-800 focus:outline-none  rounded-md"
                />
            </div>
            <SubmitInput value="Nuevo Ingrediente"></SubmitInput>
        </form>
    </div>
</template>
