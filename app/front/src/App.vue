<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'
  import Technologie from './components/Technologie.vue'
  import Bienvenue from './components/Bienvenue.vue'
  import LanguagesComponent from './components/LanguagesComponent.vue'
  import Education from './components/Education.vue'
  import Footer from './components/Footer.vue'
  import Contact from './components/Contact.vue'
  import Projects from './components/Projects.vue'
</script>

<template>
  <header>
    <div v-if="isLargeScreen" class="md:w-screen md:fixed relative z-50 header-shadow">
      <nav class="flex justify-between h-20" style="background-color: azure;">
        <div class="flex flex-row gap-4">
          <a href="#about" type="button">
            <img class="size-16 mt-2 ml-4 border-solid border-black p-2 rounded-full" src="./assets/images/luffy_gear5.jpeg" alt="luffy" />
          </a>
          <p class="text-black font-bold mt-2 ml-4 md:visible invisible">Sasha LORION</p>
        </div>
        <div class="mt-2 mr-8 ">
          <a class="text-black font-bold p-4" href="#about">À propos</a>
          <a class="text-black font-bold p-4" href="#education">Formations</a>
          <a class="text-black font-bold p-4" href="#projects">Projets</a>
          <a class="text-black font-bold p-4" href="#contact">Contact</a>
        </div>
      </nav>
    </div>

    <div v-else class="z-50 p-12 header-shadow bg-white">
      <Slide 
        width="600"
        noOverlay 
        right
        :closeOnNavigation="true"
      >
        <div class="flex flex-col w-screen pt-0">
          <a class="text-gray-100 hover:text-gray-400 font-bold " href="#about">À propos</a>
          <a class="text-gray-100 hover:text-gray-400 font-bold" href="#education">Formations</a>
          <a class="text-gray-100 hover:text-gray-400 font-bold" href="#projects">Projets</a>
          <a class="text-gray-100 hover:text-gray-400 font-bold" href="#contact">Contact</a>
        </div>
      </Slide>
    </div>
  </header>
  <main>
    <section class="bg-img pt-12 lg:h-screen sm:h-auto ">
      <div class="text-black">
        <Bienvenue @scroll-to-section="scrollToSection" />
      </div>
    </section>
    <section>
      <a id="about" class="text-black" @scroll-to-section="scrollToSection">
        <Technologie @scroll-to-project="scrollToProject" />
      </a>
    </section>  
    <section>
      <div class="text-black">
        <LanguagesComponent />
      </div>
    </section>
    <section>
      <a id="education" class="text-black">
        <Education />
      </a>
    </section>
    <section>
      <a id="projects" class="text-black" @scroll-to-project="scrollToProject">
        <Projects />
      </a>
    </section>
    <section>
      <a id="contact" class="text-black">
        <Contact />
      </a>
    </section>
    <footer>
      <Footer></Footer>
    </footer>
  </main>
</template>

<style>
  @import url('./assets/main.css');
  @import url('./assets/app.css');
  .header_position {
    z-index: 1000;
  }
  .bg-main {
    background-color: rgba(33, 33, 36, 0.97);
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.6);
  }
  .header-shadow {
    box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.2);
  }
  .bg-img {
    background-image: url('./assets/images/protruding-squares-light-pink.svg');
    background-repeat: repeat;
    background-size: auto;
    box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.6);
  }
</style>

<script lang="ts">
  import { Reveal, Slide } from 'vue3-burger-menu'
    export default {
      computed: {
        isLargeScreen() {
          return window.innerWidth >= 1024
        }
      },
      mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }, 
      methods: {
          handleResize() {
            this.$forceUpdate();
          },
          scrollToSection() {
              const   target = document.getElementById("about")
              if (target)
                  target.scrollIntoView({ behavior: 'smooth'});
          },
          scrollToProject() {
              const   target = document.getElementById("projects")
              if (target)
                  target.scrollIntoView({ behavior: 'smooth'});
          }
      }
    }
</script>