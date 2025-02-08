import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import clienteAxios from '../../config/axios'
import { ingredientes as ingredientesDB } from '@/data/ingredientes'

export const useIngredientesStore = defineStore('ingredientes', () => {
    const ingredientes = ref([])

    onMounted(() => {
        cargarIngredientes()
    })

    const cargarIngredientes = async () => {
        try {
            const { data } = await clienteAxios.get('/api/ingredientes')
            ingredientes.value = data.data
        } catch (error) {
            console.log('Error al cargar ingredientes', error)
        }
    }

    return {
        ingredientes,
        cargarIngredientes,
    }
})
