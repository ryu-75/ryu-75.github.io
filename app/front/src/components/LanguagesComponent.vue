<template>
    <h1 class="flex justify-center">Langues</h1>
    <div class="flex flex-row justify-evenly">
      <div ref="french">
        <h4>Français</h4>
        <v-progress-circular
          :model-value="french"
          :rotate="360"
          :size="100"
          :width="15"
          color="primary"
        >
          {{ french }}
        </v-progress-circular>
      </div>
      <div ref="english">
        <h4>Anglais</h4>
        <v-progress-circular
          :model-value="english"
          :rotate="360"
          :size="100"
          :width="15"
          color="secondary"
        >
          {{ english }}
        </v-progress-circular>
      </div>
      <div ref="japanese">
        <h4>Japonais</h4>
        <v-progress-circular
          :model-value="japanese"
          :rotate="360"
          :size="100"
          :width="15"
          color="warning"
        >
          {{ japanese }}
        </v-progress-circular>
      </div>
    </div>
    <    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 m-32">
</template>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>

<script>
  export default {
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
        if (this.elIsVisible('french')) this.startAnimation('french', 100)
        if (this.elIsVisible('english')) this.startAnimation('english', 77)
        if (this.elIsVisible('japanese')) this.startAnimation('japanese', 12)
      },
      startAnimation(target, value) {
        if (!this.interval) return 
        const speed = 500
        const step = Math.ceil(value / speed)
        this.interval = setInterval(() => {
          if (this[target] >= value) {
            clearInterval(this.interval); // Arrête l'interval une fois que la valeur spécifique est atteinte
            this.interval = null
            return
          }
          this[target] += step
          if (this[target] > value) {
            this[target] = value
          }
        }, 16);
      },
      destroyer() {
        clearInterval(this.interval)
      }
    }
  };
</script>