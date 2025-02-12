<script setup>
import { RouterLink } from 'vue-router'
import { computed, inject } from 'vue'
import { useIngredientesStore } from '@/stores/ingredientesStore'

const ingredienteStore = useIngredientesStore();

const props = defineProps({
    ingrediente: {
        type: Object,
        required: true,
    },
})
const swal = inject('$swal') // Esto nos da acceso a $swal
const imagenServer = computed(() => props.ingrediente.imagen.startsWith('http'))
const showAlert = (id) => {
    swal({
        icon: 'warning',
        text: '¿Seguro que desea eliminar el ingrediente',
        showDenyButton: true,
        confirmButtonText: "Adelante",
        denyButtonText: "No"
    }).then((result) => {
    if (result.isConfirmed) {
        ingredienteStore.eliminarIngrediente(id);
    }
    })
}
</script>
<template>
    <div
        class="shadow-md p-4 space-y-4 md:grid md:grid-cols-[65%_35%] items-center bg-white justify-between"
    >
        <div class="space-y-2">
            <p class="font-black text-2xl">
                {{ ingrediente.nombre }}
            </p>
            <p class="text-lg">{{ ingrediente.descripcion }}</p>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div class="flex justify-center lg:mb-0">
                <img
                    :src="[
                        imagenServer
                            ? ingrediente.imagen
                            : `/img/${ingrediente.imagen}`,
                    ]"
                    :alt="ingrediente.nombre"
                    class="w-full lg:w-40 rounded-md"
                />
            </div>
            <div class="flex lg:flex-col justify-between gap-5">
                <RouterLink
                    :to="{
                        name: 'editar-ingrediente',
                        params: { id: ingrediente.id },
                    }"
                    class="bg-indigo-600 text-white py-2 px-4 rounded-md text-center cursor:pointer"
                    >Editar</RouterLink
                >
                <button
                    class="bg-red-600 text-white py-2 px-4 rounded"
                    @click="showAlert(ingrediente.id)"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>
