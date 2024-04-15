<template>
    <div v-if="isLargeScreen" class="flex flex-row justify-between ">
        <div class="flex flex-row justify-between mt-20">
            <div class="video-player">    
                <video class="video" ref="video" controls loop autoplay>
                    <source src="./../../assets/videos/Screencast from 2024-03-30 21-54-55.webm" type="video/webm">
                </video>
            </div>
            <!-- <img class="object-cover pt-12" src="./../../assets/images/oscilloscope.png" alt="audio_analyzer" /> -->
            <div class="flex flex-col justify-center">
                <p class="text-center font-bold text-2xl xl:text-4xl">Analiseur audio</p>
                <div class="flex justify-center mt-6">
                    <span class="separator"></span>
                </div>
                <p class="text-gray-600 text-md xl:text-lg m-12">Cet outil a pour objectif d'analyser un ou plusieurs fichiers audio afin d'extraire leur fréquence fondamentale et de déterminer la note correspondante dans la bonne octave.<br><br>
                    Une fois la bonne note identifiée, chaque fichier est renommé avec la note correspondante ajoutée à la fin de leur nom.</p>
                <div class="flex flex-row justify-evenly">
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C++</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>FFTW3</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Fourier</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>LibsndFile</span>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/audio_analysis">
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
                <source src="./../../assets/videos/Screencast from 2024-03-30 21-54-55.webm" type="video/webm">
            </video>
        </div>
        <div class="grid grid-cols-1 m-6">
            <h5 class="pb-4 font-bold">Analiseur audio</h5>
            <details class="open:bg-transparent p-2 rounded-lg" close>
                <summary class="pb-4">En savoir plus</summary>
                <p class="text-md md:text-xl text-gray-600">Cet outil a pour objectif d'analyser un ou plusieurs fichiers audio afin d'extraire leur fréquence fondamentale et de déterminer la note correspondante dans la bonne octave.</p><br>
                <p class="text-md md:text-xl text-gray-600">Une fois la bonne note identifiée, chaque fichier est renommé avec la note correspondante ajoutée à la fin de leur nom.</p>
                <div class="flex flex-col md:flex-row justify-evenly mt-12 text-center">
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>C++</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Makefile</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>FFTW3</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>Transformer de Fourier</span>
                    </div>
                    <div class="skills mt-4">
                        <span class="font-bold text-gray-700"><span class="text-black"># </span>LibsndFile</span>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                    <a href="https://github.com/ryu-75/audio_analysis">
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
    details {
        overflow: hidden;
        transition: height 0.7s ease;
        height: auto;
    }

    details > p {
        overflow: hidden;
        transition: opacity 0.7s ease;
        opacity: 0;
    }
    
    details[open] {
        height: auto;
    }

    details[close] > p {
        opacity: 1;
    }

</style>

<script lang="js">
export default {
    name: "VideoPlayer",
    computed: {
        isLargeScreen() {
            return window.innerWidth >= 1064; 
        },
        videoElement () {
            return this.$refs.video;
        }, 
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
