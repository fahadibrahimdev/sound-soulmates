<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-hero-bg py-40 xl:py-44 3xl:py-56">
    <div class="container">
      <h1 class="font-good-vibes flex flex-wrap gap-y-7 gap-x-5 text-6xl xxs:text-7xl lg:text-8xl">
        <span class="text-primary">Love,</span>
        <span class="text-accent-primary">Music,</span>
        <span class="text-accent-secondary">Connection...</span></h1>
      <div class="grid lg:grid-cols-3 items-start gap-10 sm:gap-20 3xl:gap-40 pt-16">
        <div class="lg:col-span-2 text-white">
          <h2 class="text-4.5xl xl:text-5xl 3xl:text-6xl font-bold">
            {{ heroSectionContent.heading }}
          </h2>
          <p class="text-base lg:text-xl xl:text-2xl 3xl:text-3xl py-4 text-gray">
            {{ heroSectionContent.text }}
          </p>

        </div>
        <div class="lg:col-span-1 flex items-center justify-center h-full">
          <div>
            <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
            <h5 class="text-accent-primary text-xl text-end md:text-3xl font-bold">
              Coming Soon
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
header{
  background: theme('backgroundColor.hero-bg');
}
</style>
