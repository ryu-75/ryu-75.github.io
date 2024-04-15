<template>
    <div v-if="isLargeScreen" class="flex flex-col md:flex-row w-auto justify-between h-auto">
        <div class="flex flex-row justify-between mt-20">
            <div class="flex flex-col justify-center">
                <div class="border-solid border-slate-600">
                    <p class="text-center font-bold text-2xl xl:text-4xl">Snake</p>
                    <div class="flex justify-center mt-6">
                        <span class="separator"></span>
                    </div>
                    <p class="text-md xl:text-lg m-12 text-gray-600">
                        Voici mon tout premier jeu vidéo rétro codé en JavaScript. J'ai utilisé SCSS pour prétraiter mon CSS et avoir un meilleur contrôle sur le style global de la page. <br><br>En ce qui concerne la bibliothèque JavaScript, j'ai utilisé la plus célèbre : JQuery.<br><br>
                        De plus, le jeu est responsive, ce qui signifie qu'il est jouable aussi bien sur PC que sur smartphone.</p>
                    <div class="flex flex-row justify-evenly">
                        <div class="skills mt-4">
                            <span class="font-bold text-gray-700"><span class="text-black"># </span>Javascript</span>
                        </div>
                        <div class="skills mt-4">
                            <span class="font-bold text-gray-700"><span class="text-black"># </span>Sass</span>
                        </div>
                        <div class="skills mt-4">
                            <span class="font-bold text-gray-700"><span class="text-black"># </span>Node</span>
                        </div>
                        <div class="skills mt-4">
                            <span class="font-bold text-gray-700"><span class="text-black"># </span>JQuery</span>
                        </div>
                        <div class="skills mt-4">
                            <span class="font-bold text-gray-700"><span class="text-black"># </span>HTML</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-evenly mt-12">
                    <a href="https://github.com/ryu-75/snakegame" target="github">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="size-12 xl:size-14" src="./../../assets/images/github-142-svgrepo-com.svg" alt="">
                        </button>
                    </a>
                    <a href="https://ryu-75.github.io/snakegame/">
                        <img class="size-14 xl:size-16" src="./../../assets/images/game-svgrepo-com.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="video-player">    
                <video class="video" ref="video" controls loop autoplay>
                    <source src="./../../assets/videos/Screencast from 2024-04-03 13-32-44.webm" type="video/webm">
                </video>
            </div>
        </div>
    </div>

    <div v-else class="flex flex-col justify-between bg-blend">
        <div class="video-player h-max flex justify-center">    
            <video class="video" ref="video" controls loop autoplay>
                <source src="./../../assets/videos/Screencast from 2024-04-03 13-32-44.webm" type="video/webm">
            </video>
        </div>
        <div class="grid grid-cols-1 m-6">
            <p class="font-bold text-2xl xl:text-4xl pb-4">Snake</p>
            <details class="open:bg-transparent p-2 rounded-lg" close>
                <summary class="pb-4">En savoir plus</summary>
                <p class="text-md md:text-xl text-gray-600">
                    Voici mon tout premier jeu vidéo rétro codé en JavaScript. J'ai utilisé SCSS pour prétraiter mon CSS et avoir un meilleur contrôle sur le style global de la page. En ce qui concerne la bibliothèque JavaScript, j'ai utilisé la plus célèbre : JQuery.
                    De plus, le jeu est responsive, ce qui signifie qu'il est jouable aussi bien sur PC que sur smartphone.</p>
                <div class="flex flex-col sm:flex-row justify-evenly mt-12 text-center">
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Javascript</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Sass</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Node</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>JQuery</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>HTML</span>
                    </div>
                </div>
                <div class="flex justify-evenly mt-12">
                    <a href="https://github.com/ryu-75/snakegame">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="size-12" src="./../../assets/images/github-142-svgrepo-com.svg" alt="github">
                        </button>
                    </a>
                    <a href="https://ryu-75.github.io/snakegame/">
                        <img class="size-14" src="./../../assets/images/game-svgrepo-com.svg" alt="play">
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
</style>

<script lang="js">
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