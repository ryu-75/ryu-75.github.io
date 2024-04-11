<template>
    <div v-if="isLargeScreen" class="flex flex-row justify-between ">
        <div class="grid grid-cols-2 mt-20">
            <div class="video-player">    
                <video class="video" ref="video" controls loop autoplay>
                    <source src="./../../assets/videos/Screencast from 2024-03-30 21-54-55.webm" type="video/webm">
                </video>
            </div>
            <!-- <img class="object-cover pt-12" src="./../../assets/images/oscilloscope.png" alt="audio_analyzer" /> -->
            <div class="border-solid border-slate-600">
                <h4 class="text-center lg:text-4xl text-3xl">Analiseur audio</h4>
                <div class="flex justify-center">
                    <span class="separator"></span>
                </div>
                <p class="text-xl m-12">Cet outil a pour objectif d'analyser un ou plusieurs fichiers audio afin d'extraire leur fréquence fondamentale et de déterminer la note correspondante dans la bonne octave.<br><br>
                    Une fois la bonne note identifiée, chaque fichier est renommé avec la note correspondante ajoutée à la fin de leur nom.
                </p>
                <div class="flex justify-center">
                    <a href="https://github.com/ryu-75/audio_analysis">
                        <button type="button" class="flex justify-center rounded-full shadow-lg">
                            <img class="size-20" src="./../../assets/images/github-142-svgrepo-com.svg" alt="">
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
            <h5 class="pb-4">Analiseur audio</h5>
            <details class="open:bg-transparent p-2 rounded-lg" close>
                <summary class="pb-4">En savoir plus</summary>
                <p class="text-lg">Cet outil a pour objectif d'analyser un ou plusieurs fichiers audio afin d'extraire leur fréquence fondamentale et de déterminer la note correspondante dans la bonne octave.</p>
                <p class="text-lg">Une fois la bonne note identifiée, chaque fichier est renommé avec la note correspondante ajoutée à la fin de leur nom.</p>
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

<script>
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
