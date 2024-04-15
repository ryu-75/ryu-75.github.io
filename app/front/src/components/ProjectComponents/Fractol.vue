<template>
    <div v-if="isLargeScreen" class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-row justify-between mt-20">
            <div class="video-player">    
                <video class="video" ref="video" controls loop autoplay>
                    <source src="./../../assets/videos/Screencast from 2024-04-02 19-09-49.webm" type="video/webm">
                </video>
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-center font-bold text-2xl xl:text-4xl">Fract-ol</p>
                <div class="flex justify-center mt-6">
                    <span class="separator"></span>
                </div>
                <p class="text-md xl:text-lg m-12 text-gray-600">Fract-ol est l'un des premiers projets graphiques de l'école 42. L'objectif était de générer des fractals à partir des nombres complexes.<br><br>
                    Trois types de fractales ont été implémentés ici: <b>Mandelbrot, Julia et Burning ship</b>.<br><br>
                    Ce projet utilise la bibliothèque graphique <b>MiniLibX</b>.
                </p>
                <div class="flex flex-row justify-evenly m-4">
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Minilibx</span>
                    </div>
                    <div class="skills">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Algorithme</span>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/fractol_42">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="size-12 xl:size-14" src="./../../assets/images/github-142-svgrepo-com.svg" alt="">
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="flex flex-col justify-between bg-blend">
        <div class="video-player">    
            <video class="video" ref="video" controls loop autoplay>    
                <source src="./../../assets/videos/Screencast from 2024-04-02 19-09-49.webm" type="video/webm">
                
            </video>
        </div>
        <div class="grid grid-cols-1 m-6">
            <p class="font-bold text-2xl xl:text-4xl pb-4">Fract-ol</p>
            <details class="open:bg-transparent p-2 rounded-lg" close>
                <summary class="pb-4">En savoir plus</summary>
                <p class="text-md md:text-xl text-gray-600 ">Fract-ol est l'un des premiers projets graphiques de l'école 42. L'objectif était de générer des fractals à partir des nombres complexes.</p><br>
                <p class="text-md md:text-xl text-gray-600 ">Trois types de fractales ont été implémentés ici: <b>Mandelbrot, Julia et Burning ship</b>.</p><br>
                <p class="text-md md:text-xl text-gray-600 ">Ce projet utilise la bibliothèque graphique <b>MiniLibX</b>.</p>
                <div class="flex flex-col sm:flex-row justify-evenly mt-12 text-center">
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Minilibx</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Algorithme</span>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/fractol_42">
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
    .bg-blend {
        background-color: rgba(177, 167, 167, 0.15)
    }
    .skills {
        border-radius: 10px 10px;
        background-color: rgba(177, 167, 167, 0.50);
        padding: 20px;
        box-shadow: 1px 1px 5px 2px rgba(177, 167, 167, 0.2);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 20px;
    }
</style>

<script lang="typescript">
export default {
    computed: {
        isLargeScreen() {
        return window.innerWidth >= 1024; 
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