<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    ingrediente: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <div
        class="shadow-md p-4 space-y-4 lg:grid grid-cols-[70%_20%_10%] items-center bg-white justify-between"
    >
        <div class="space-y-2">
            <p class="font-black text-2xl">
                {{ ingrediente.id }}# {{ ingrediente.nombre }}
            </p>
            <p class="text-lg">{{ ingrediente.descripcion }}</p>
        </div>
        <div class="flex justify-center lg:mb-0">
            <img
                :src="ingrediente.imagen"
                :alt="ingrediente.nombre"
                class="w-full lg:w-40"
            />
        </div>
        <div class="flex lg:flex-col justify-between gap-5">
            <RouterLink :to="{name: 'editar-ingrediente', params:  {id: ingrediente.id}}" class="bg-indigo-600 text-white py-2 px-4 rounded-md text-center cursor:pointer">Editar</RouterLink>
            <button class="bg-red-600 text-white py-2 px-4 rounded">Eliminar</button>
        </div>
    </div>
</template>
