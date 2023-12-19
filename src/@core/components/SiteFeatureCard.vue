<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="feature-card border-2 border-primary rounded-xl md:rounded-2xl 3xl:rounded-3xl transform md:-rotate-3 px-6 py-9 xl:px-6 xl:py-10 3xl:px-9 3xl:py-14">
    <div class="flex items-center justify-center border-2 border-primary bg-primary/30 rounded-full w-16 h-16 2xl:w-28 2xl:h-28 p-3">
      <span :class="`icon-${icon}`" class="text-white text-3xl 2xl:text-6xl"></span>
    </div>
    <div class="text-2xl 2xl:text-3xl font-bold text-white pt-6 pb-3">
      {{ title }}
    </div>
    <div class="text-lg 2xl:text-2xl pb-7 3xl:pb-16">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
</style>