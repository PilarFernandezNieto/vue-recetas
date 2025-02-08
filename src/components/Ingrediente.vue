<script setup>
defineProps({
    ingrediente: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <div class="shadow-md p-4 grid grid-cols-[70%_20%_10%] items-center bg-white justify-between">
        <div class="space-y-2">
            <p class="font-black text-2xl">{{ ingrediente.nombre }}</p>
            <p class="text-lg">{{ ingrediente.descripcion }}</p>
        </div>
        <div>
            <img :src="ingrediente.imagen" :alt=ingrediente.nombre class="w-40"/>
        </div>
        <div class="flex flex-col gap-4">
            <button class="bg-indigo-600 text-white p-2 rounded">Editar</button>
            <button class="bg-red-600 text-white p-2 rounded">Eliminar</button>
        </div>
    </div>
</template>
