<script lang="ts">
    import AudioFilesAnalyzer from './ProjectComponents/AudioFilesAnalyzer.vue'
    import Snake from './ProjectComponents/Snake.vue'
    import PushSwap from './ProjectComponents/PushSwap.vue'
    import Fractol from './ProjectComponents/Fractol.vue'
    export default {
        components: {
            AudioFilesAnalyzer,
            PushSwap,
            Snake,
            Fractol
        },
        methods: {
            scrollToProject() {
                this.$emit('scroll-to-project', 'projects');
            }
        }
    }
</script>

<template>
    <h2 class="sm:text-4xl md:text-5xl text-wrap md:text-no-wrap text-3xl font-bold text-center mt-20 title">Projets</h2>
    <div class="flex justify-center">
        <span class="separator"></span>
    </div>
    <div class="grid grid-cols-1 gap-12 m-14">
        <div>
            <AudioFilesAnalyzer />  
        </div>
        <div>
            <PushSwap />
        </div>
        <div>
            <Fractol /> 
        </div>
        <div>   
            <Snake />
        </div>   
    </div>
</template>