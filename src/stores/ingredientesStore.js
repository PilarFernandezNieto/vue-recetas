import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import clienteAxios from '../../config/axios'
import { useToastStore } from './toastStore'

export const useIngredientesStore = defineStore('ingredientes', () => {
    const ingredientes = ref([])
    const toastStore = useToastStore();
    const router = useRouter();

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

    const crearIngrediente = async (datos) => {
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
            if(data.type === "success"){
                toastStore.mostrarExito(data.message);
                router.push({name: 'ingredientes'});

            }
            
        } catch (error) {
            console.log('Error al crear ingrediente', error)
        }
    }

    return {
        ingredientes,
        cargarIngredientes,
        crearIngrediente,
    }
})
