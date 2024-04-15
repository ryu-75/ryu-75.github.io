<template>
    <div v-if="isLargeScreen" class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-row justify-between mt-20">
            <div class="flex flex-col justify-center">
                <p class="text-center font-bold text-2xl xl:text-4xl">Push Swap</p>
                <div class="flex justify-center mt-6">
                    <span class="separator"></span>
                </div>
                <p class="text-md xl:text-lg m-12 text-gray-600">Ce projet est une implémentation de l'algorithme de tri par base (Radix sort) pour résoudre la tâche de trier une liste aléatoire d'entiers en utilisant deux piles et un ensemble limité d'opérations.<br><br>
                L'objectif principal est de minimiser le nombre d'opérations nécessaires pour trier la pile tout en respectant des règles et des contraintes spécifiques décrites dans la description du projet.</p>
                <div class="flex flex-row justify-evenly">
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Algorithme</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Radix</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/Push_swap">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="size-12 xl:size-14" src="./../../assets/images/github-142-svgrepo-com.svg" alt="">
                        </button>
                    </a>
                </div>
            </div>
            <div class="video-player">    
                <video class="video" ref="video" controls loop autoplay>
                    <source src="./../../assets/videos/push_swap_visualizer.webm" type="video/webm">
                </video>
            </div>
        </div>
    </div>

    <div v-else class="flex flex-col justify-between bg-blend">
        <div class="video-player">    
            <video class="video" ref="video" controls loop autoplay>
                <source src="./../../assets/videos/push_swap_visualizer.webm" type="video/webm">
            </video>
        </div>
        <div class="grid grid-cols-1 m-6">
            <h5 class="pb-4 font-bold">Push Swap</h5>
            <details class="open:bg-transparent p-2 rounded-lg" close>
                <summary class="pb-4">En savoir plus</summary>
                <p class="text-md md:text-xl text-gray-600">Ce projet est une implémentation de l'algorithme de tri par base (Radix sort) pour résoudre la tâche de trier une liste aléatoire d'entiers en utilisant deux piles et un ensemble limité d'opérations.</p><br>
                <p class="text-md md:text-xl text-gray-600">L'objectif principal est de minimiser le nombre d'opérations nécessaires pour trier la pile tout en respectant des règles et des contraintes spécifiques décrites dans la description du projet.</p>
                <div class="flex flex-col sm:flex-row justify-evenly mt-12 text-center">
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Algorithme</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Radix</span>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/Push_swap">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="md:size-16 size-14" src="./../../assets/images/github-142-svgrepo-com.svg" alt="">
                        </button>
                    </a>
                </div>
            </details>
        </div>
    </div>
</template>

<style>
    .img-shadow {
        border-radius: 10px 0px 0px 10px;
        box-shadow: 10px 0px 0px 2px rgba(0, 0, 0, 0.9);
    }
    .bg-blend {
        background-color: rgba(177, 167, 167, 0.15)
    }
</style>

<script lang="js">
export default {
    computed: {
        isLargeScreen() {
        return window.innerWidth >= 1064; 
      }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
        this.$forceUpdate();
      }
    }
}
</script>