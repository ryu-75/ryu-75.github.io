<script>
    import Transcendence from './ProjectComponents/Transcendence.vue'
    import Ftirc from './ProjectComponents/Ftirc.vue'
    import AudioFilesAnalyzer from './ProjectComponents/AudioFilesAnalyzer.vue'
    import Cub3D from './ProjectComponents/Cub3D.vue'
    import PushSwap from './ProjectComponents/PushSwap.vue'
    import Fractol from './ProjectComponents/Fractol.vue'
    export default {
        components: {
            Transcendence,
            Ftirc,
            AudioFilesAnalyzer,
            Cub3D, 
            PushSwap,
            Fractol
        },
    }
</script>

<template>
    <h2 class="text-center text-4xl sm:text-5xl lg:text-6xl text-wrap">Projets</h2>
    <div class="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 gap-12 m-14">
        <div class="flex justify-center">
            <Transcendence />
        </div>
        <div class="flex justify-center">
            <Ftirc />
        </div>
        <div class="flex justify-center">
            <AudioFilesAnalyzer />
        </div>        
        <div class="flex justify-center">
            <Cub3D />
        </div>
        <div class="flex justify-center">
            <PushSwap />
        </div>
        <div class="flex justify-center">
            <Fractol />
        </div>
    </div>
</template>