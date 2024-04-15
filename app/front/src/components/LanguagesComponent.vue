<template>
  <div class="grid grid-cols-1 h-full pt-10">
    <div class="flex flex-col">
      <h1 class="sm:text-4xl md:text-5xl text-wrap md:text-no-wrap text-3xl font-bold text-center">Compétences & Langues</h1>
      <div class="flex justify-center">
        <span class="separator"></span>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 grid-rows-2 lg:grid-rows-1 ">
        <div class="flex flex-col lg:ml-12 pt-12 lg:pt-0">
          <h1 class="text-center sm:text-3xl text-xl text-wrap font-bold" style="font-family: sephir, sans-serif;">Langues</h1>
          <div class="flex justify-center mt-2"> 
            <span class="separator"></span>
          </div>      
          <div class="flex flex-col mt-10">
            <div class="grid grid-cols-2 grid-flow-row">
              <div class="sm:justify-between sm:flex-row sm:gap-8 gap-12 md:gap-42 lg:gap-56">
                <div ref="french">
                  <h4 class="text-xl sm:text-1xl lg:text-2xl text-center text-gray-600" style="font-family: sephir, sans-serif;">Français</h4>
                  <div class="flex justify-center">
                    <v-progress-circular
                      :model-value="french"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="primary"
                      class="shadow-xl rounded-full"
                    >
                      {{ french }}
                    </v-progress-circular>
                  </div>
                </div>
              </div>
              <div class="flex justify-center">
                <div ref="english">
                  <h4 class="text-xl sm:text-1xl lg:text-2xl text-center text-gray-600" style="font-family: sephir, sans-serif;">Anglais</h4>
                  <div class="flex justify-center">
                    <v-progress-circular
                      :model-value="english"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary"
                      class="shadow-xl rounded-full"
                    >
                      {{ english }}
                    </v-progress-circular>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="text-xl sm:text-1xl lg:text-2xl text-center text-gray-600" style="font-family: sephir, sans-serif;">Japonais</h4>
            <div ref="japanese" class="flex justify-center">
                <div class="">
                  <v-progress-circular
                    :model-value="japanese"
                    :rotate="360"
                    :size="100"
                    :width="15"
                    color="warning"
                    class="shadow-xl rounded-full"
                  >
                    {{ japanese }}
                  </v-progress-circular>
                </div>
              </div>
            </div>
          </div>
          <div class="grid lg:col-span-2 col-start-1 pt-12 lg:pt-0">
            <SoftSkills />
          </div>
        </div>
    </div>
  </div>
  <div class="flex justify-center pt-12 invisible xl:visible">
        <span class="end-bar"></span>
    </div>
</template>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>

<script>
  import { defineAsyncComponent } from 'vue'
  export default {
    components: {
      SoftSkills: defineAsyncComponent(() => import('./SoftSkills.vue'))
    },
    data() {
      return {
        interval: {},
        french: 0,
        english: 0,
        japanese: 0,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      elIsVisible(refName) {
        const el = this.$refs[refName]
        if (!el)  return false
        const rect = el.getBoundingClientRect();
        const top = rect.top
        const bottom = rect.bottom
        return top < window.innerHeight && bottom >= 0
      },
      handleScroll() {
        if (this.startAnimation('french', 100));
        if (this.startAnimation('english', 77));
        if (this.startAnimation('japanese', 12));
      },
      startAnimation(target, value) {
        if (!this.interval) return 
        const speed  = 20
        const step = Math.ceil(value / speed)
        this.interval = setInterval(() => {
          if (this[target] >= value) {
            clearInterval(this.interval);
            this.interval = null
            return
          }
          this[target] += step
          if (this[target] >= value) {
            this[target] = value
          }
        }, 500);
      },
      destroyer() {
        clearInterval(this.interval)
      }
    }
  };
</script>