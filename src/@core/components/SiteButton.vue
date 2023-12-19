<script setup>
defineProps({
  secondary: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
      :class="[
          secondary ? 'bg-accent-secondary/30 outline outline-2 outline-accent-secondary' : 'bg-primary/30 outline outline-2 outline-primary',
          ]"
      class="text-white rounded-4xl text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-bold px-5 py-2 lg:px-8 2xl:px-9.5 2xl:py-6"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
</style>