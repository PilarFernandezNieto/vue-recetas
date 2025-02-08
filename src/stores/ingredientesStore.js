import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { ingredientes  as ingredientesDB } from "@/data/ingredientes";

export const useIngredientesStore = defineStore("ingredientes", () => {
    const ingredientes = ref([]);

    onMounted(() => {
        ingredientes.value = ingredientesDB
    })
        console.log(ingredientes.value);



    return {
        ingredientes
    }
});