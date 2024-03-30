<template>
    <h1 class="flex justify-center">Langues</h1>
    <div class="flex flex-row justify-evenly">
      <div class="mt-12">
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
      <div class="mt-12">
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
      <div class="mt-12">
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
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
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
      this.interval = setInterval(() => {
        if (this.french === 100 && this.english === 77 && this.japanese === 12) {
          clearInterval(this.interval); // Arrête l'interval une fois que la valeur spécifique est atteinte
          return;
        }
        if (this.french < 100) {
          this.french += 1;
        }
        if (this.english < 77) {
          this.english += 1;
        }
        if (this.japanese < 12) {
          this.japanese += 1;
        }
      }, 40);
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      clearInterval(this.interval);
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
  </script>