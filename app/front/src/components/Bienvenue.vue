<template>
    <div class="flex flex-col mt-24">
        <h1 class="text-center text-4xl sm:text-5xl lg:text-7xl font-bold">Salut, je suis Sasha</h1>    
        <article class="m-12">
            <p class="text-pretty text-xl text-center text-gray-600">développeuse full-stack junior à la recherche d'une alternance et passionnée par le développement web.<br><br>
                Je suis ouverte à toute opportunité. 
            </p>
            <div class="flex justify-center md:mt-24 mt-12">
                <div class="flex justify-center circle" >
                    <button type="button" class="animate-bounce bg-transparent" @click="scrollToTechnologie">
                        <img class="h-16" src="./../assets/images/arrow-down-svgrepo-com.svg" alt="">
                    </button>
                </div>
            </div>
        </article>
    </div>
</template>

<style>
    .shadow {
        box-shadow: 0px 20px 20px 2px rgba(11, 125, 25, 0.4);
    }
    .circle { 
        width: 50px;
        height: 120px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left: transparent;
        border-right: transparent;
        box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.50);
        border-color: black;
        padding-top: 24px;
        background-color: rgb(253, 254, 255);
    }
</style>

<script>
export default {
    methods: {
        scrollToTechnologie() {
            this.$emit('scroll-to-section', 'about'); // Émet un événement avec l'ID de la section "Technologie"
        }
    }
}
</script>