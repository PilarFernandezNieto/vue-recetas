import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import clienteAxios from '../../config/axios'
import { useToastStore } from './toastStore'

export const useIngredientesStore = defineStore('ingredientes', () => {
    const ingredientes = ref([])
    const ingrediente = ref({})
    const toastStore = useToastStore()
    const router = useRouter()

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

    const crearIngrediente = async (datos, errores) => {
        try {
            const { data } = await clienteAxios.post(
                '/api/ingredientes',
                datos,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            errores.value = []
            if (data.type === 'success') {
                toastStore.mostrarExito(data.message)
                router.push({ name: 'ingredientes' })
            }
        } catch (error) {
            errores.value = Object.values(error.response.data.errors)
            console.log('Error al crear ingrediente', errores.value)
        }
    }

    const cargarIngrediente = async (id) => {
        try {
            const { data } = await clienteAxios.get(`/api/ingredientes/${id}`)
            ingrediente.value = data
        } catch (error) {
            console.log('Error al editar ingrediente', error)
        }
    }
    const editarIngrediente = async (id, datos, errores) => {
        try {
            const { data } = await clienteAxios.post(
                `/api/ingredientes/${id}`,
                datos,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            errores.value = []
            if (data.type === 'success') {
                toastStore.mostrarExito(data.message)
                router.push({ name: 'ingredientes' })
            }
        } catch (error) {
            errores.value = Object.values(error.response.data.errors)
            console.log('Error al editar ingrediente', errores.value)
        }
    }

    return {
        ingredientes,
        ingrediente,
        cargarIngredientes,
        crearIngrediente,
        cargarIngrediente,
        editarIngrediente,
    }
})
