<script setup>
defineProps({
    value: {
        type: String,
        required: true,
    },
    buttonClass: {
        type: String,
        default: 'bg-amber-600 hover:bg-amber-800 text-white px-4 py-2 rounded-md w-full font-bold uppercase cursor-pointer mt-5',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
});
</script>
<template>
  <input
    type="submit"
    :value="value"
    :class="[buttonClass, disabled ? 'bg-amber-300 cursor-not-allowed' : '']"
    :disabled="disabled"
  />
</template>

<style lang="scss" scoped></style>
