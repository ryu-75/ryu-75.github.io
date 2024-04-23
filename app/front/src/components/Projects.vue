<template>
    <h2 class="sm:text-4xl md:text-5xl text-wrap md:text-no-wrap text-4xl font-bold text-center mt-20 title">Projets</h2>
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

<script lang="ts">
    import { defineAsyncComponent } from 'vue'

    export default {
        components: {
            AudioFilesAnalyzer: defineAsyncComponent(() => import('./ProjectComponents/AudioFilesAnalyzer.vue')),
            PushSwap: defineAsyncComponent(() => import('./ProjectComponents/PushSwap.vue')),
            Snake: defineAsyncComponent(() => import('./ProjectComponents/Snake.vue')),
            Fractol: defineAsyncComponent(() => import('./ProjectComponents/Fractol.vue'))
        },
        methods: {
            scrollToProject() {
                this.$emit('scroll-to-project', 'projects');
            }
        }
    };
</script>

<style>
    .button-inset-shadow {
        box-shadow: 0px -2px 5px 4px rgba(170, 170, 170, 0.5) inset;
    }
</style>