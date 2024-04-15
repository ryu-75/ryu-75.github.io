<script>
  import { defineAsyncComponent, ref, computed, onMounted, onUnmounted } from 'vue'
  import DownloadCv from '@/components/DownloadCv.vue'

  export default {
    components: {
      About: defineAsyncComponent(() => import('@/components/About.vue')),
      Bienvenue: defineAsyncComponent(() => import('@/components/Bienvenue.vue')),
      LanguagesComponent: defineAsyncComponent(() => import('@/components/LanguagesComponent.vue')),
      Education: defineAsyncComponent(() => import('@/components/Education.vue')),
      Footer: defineAsyncComponent(() => import('@/components/Footer.vue')),
      Contact: defineAsyncComponent(() => import('@/components/Contact.vue')),
      Projects: defineAsyncComponent(() => import('@/components/Projects.vue')),
      DownloadCv
    },
    setup() {
      const isLargeScreen = window.innerWidth >= 920;
      const isMenuOpen = ref(false)
      onMounted(() => {
        window.addEventListener('resize', handleResize);
      })
      const toggleMenu = () => {
        isMenuOpen.value
          ? (isMenuOpen.value = false, window.removeEventListener('click', handleClickOutside))
          : (isMenuOpen.value = true, window.addEventListener('click', handleClickOutside))
      }

      const handleClickOutside = (e) => {
        if (!e.target.closest('.menu-container')) {
          isMenuOpen.value = false
          e.stopPropagation()
        }
      }

      const handleMenuClick = () => {
        if (isMenuOpen.value)
          toggleMenu()
      }

      const handleResize = () => {
        isLargeScreen.value = window.innerWidth >= 920;
      };

      const scrollToTechnologie = () => {
        const target = document.getElementById("/")
        if (target)
          target.scrollIntoView({ behavior: 'smooth' })
      }

      const scrollToProject = () => {
        const target = document.getElementById("projects")
        if (target)
          target.scrollIntoView({ behavior: 'smooth' })
      }

      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
      });
      const menuContainerClass = computed(() => {
        return {
          'mt-0': isMenuOpen.value,
          '-mt-20': !isMenuOpen.value,
          'menu-open': isMenuOpen.value,
          'menu-close': !isMenuOpen.value,
        }
      });
      return { 
        isLargeScreen,
        isMenuOpen,
        toggleMenu,
        menuContainerClass,
        scrollToProject,
        handleClickOutside,
        handleMenuClick,
        scrollToTechnologie,
        pdfUrl: './download/Sasha_LORION_CV.pdf',
        pdfFileName: 'Sasha_LORION_CV.pdf'
      }
    }
  };
</script>

<template>
  <header class="flex justify-center shadow-none ">
    <div 
      v-if="isLargeScreen"
      class="flex justify-center rounded-b-full md:w-200 md:fixed z-50 header-shadow absolute menu-container"
      :class="[menuContainerClass]"
    >
      <nav class="flex justify-center h-20 rounded-b-full bg-white relative" :class="{ 'menu-open': isMenuOpen}">
        <div class="mt-2 mr-8 ml-8">
          <a @click="handleMenuClick" class="text-gray-700 font-bold p-4" href="#/">À propos</a>
          <a @click="handleMenuClick" class="text-gray-700 font-bold p-4" href="#education">Formations</a>
          <a @click="handleMenuClick" class="text-gray-700 font-bold p-4" href="#projects">Projets</a>
          <a @click="handleMenuClick" class="text-gray-700 font-bold p-4" href="#contact">Contact</a>
        </div>
      </nav>
      <div class="flex justify-center absolute">
        <button
          type="button"
          class="flex justify-center h-10 w-28 rounded-b-full mt-20 bg-white md:fixed relative header-shadow"
          @click="toggleMenu"
        >
          <img :class="!isMenuOpen ? 'rotate-180' : 'rotate-0'" class="size-6 mt-2" src="./assets/images/arrow-up.svg" alt="arrow-up">
        </button>
      </div>
      <DownloadCv :pdf-url="pdfUrl" :pdf-file-name="pdfFileName" />
        <!-- <a
          href="./assets/download/Sasha_LORION_CV.pdf"
          download="Sasha_LORION_CV.pdf"
          class="text-center p-4 rounded-full bottom-8 right-8 font-semibold bg-yellow-300 text-black md:fixed relative header-shadow"
        >
          <div class="flex flex-col align-center m-4">
            <p class="text-center font-semibold">CV à télécharger</p>
            <img class="flex justify-center size-8 mt-2" src="./assets/images/download.svg" />
          </div>
        </a>     -->
  </div>

    <div v-else class="w-full">
      <nav class="bg-white border-gray-200">
        <div class="flex-1 justify-end m-2 ml-6 z-50 bg-white">
          <button data-collapse-toggle="navbar-default" type="button" class="flex justify-center hover:bg-gray-200 hover:shadow-xl p-2 w-10 h-10 text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div :class="{ 'hidden': !isMenuOpen }" class=" bg-white w-full -ml-2" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border shadow-xl rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0  bg-gray-200">
              <li>
                <a class="text-gray-800 font-bold p-4" href="/">À propos</a>
              </li>
              <li>
                <a class="text-gray-800 font-bold p-4" href="#education">Formations</a>
              </li>
              <li>
                <a class="text-gray-800 font-bold p-4" href="#projects">Projets</a>
              </li>
              <li>
                <a class="text-gray-800 font-bold p-4" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="flex justify-center pt-16">
            <a
              href="./assets/download/Sasha_LORION_CV.pdf"
              download="Sasha_LORION_CV.pdf"
              class="flex justify-center align-center text-center rounded-full p-6 relative font-semibold bg-yellow-300  text-black header-shadow"
            >
              <div class="flex flex-col align-center">
                <p class="text-center text-xs font-semibold">CV à télécharger</p>
                <img class="flex justify-center size-8" src="./assets/images/download.svg" />
              </div>
            </a>  
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <section class="bg-img pt-12 lg:h-screen sm:h-auto ">
      <div class="text-black">
        <Bienvenue @scroll-to-technologie="scrollToTechnologie" />
      </div>
    </section>
    <section>
      <a id="/" class="text-black" @scroll-to-technologie="scrollToTechnologie">
        <About @scroll-to-project="scrollToProject" />
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
    box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.2);
  }
  .bg-img {
    background-image: url('./assets/images/protruding-squares-light-pink.svg');
    background-repeat: repeat;
    background-size: auto;
    box-shadow: 0px 4px 40px 6px rgba(0, 0, 0, 0.6);
  }
  .menu-open {
    transition:  0.20s ease-in-out;
  }
  .menu-close {
    transition: 0.20s ease-in-out;
  }
  @font-face {
        font-family: 'Sephir';
        src: 
            local('Sephir'),
            url('./fonts/Sephir-Regular.otf') format('opentype');
    }
    @font-face {
        font-family: 'Vogue';
        src: url('./../assets/font/vogue/Vogue.ttf');
    }
    p {
        font-family: 'Sephir', sans-serif;
        letter-spacing: 0.2rem;
    }
</style>
