<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'
  import Technologie from './components/Technologie.vue'
  import Bienvenue from './components/Bienvenue.vue'
  import LanguagesComponent from './components/LanguagesComponent.vue'
  import SoftSkills from './components/SoftSkills.vue'
  import Education from './components/Education.vue'
  import Footer from './components/Footer.vue'
  import Projects from './components/Projects.vue'
</script>

<template>
  <header class="wrapper">
    <div class="pb-10 z-50">
      <nav class="fixed header_position">
        <RouterLink to="/">Bienvenue</RouterLink>
        <RouterLink to="/about">Home</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <div class="flex justify-center mt-16">
      <img
        class="rounded-full border-solid border-4 border-green-600"
        src="https://picsum.photos/200" 
        name="avatar" 
      />
    </div>
    <Bienvenue />
    <Technologie />
    <LanguagesComponent />
    <SoftSkills />
    <Education />
    <Projects />
    <Footer></Footer>
  </main>
</template>

<style>
  @import url('./assets/main.css');
  @import url('./assets/app.css');
  .header_position {
    z-index: 1000;
  }
</style>