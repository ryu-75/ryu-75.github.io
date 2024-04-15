<template>
    <div class="flex flex-col h-full mt-10">
        <div class="flex flex-col justify-center">
            <h1 class="text-center text-4xl sm:text-5xl lg:text-6xl text-wrap font-bold">À propos de moi</h1>
            <div class="flex justify-center">
                <span class="separator"></span>
            </div>    
            <p class="text-center lg:mt-6 m-6 text-lg text-gray-600">
                Vous trouverez ci-dessous une présentation détaillée de ma personne,<br> de mes activités et de mes compétences actuelles dans le domaine de la programmation et des technologies.
            </p>
        </div>
        <div class="lg:ml-44 lg:mr-44 m-14 lg:mt-16">
            <div class="grid lg:grid-cols-3 grid-cols-1 grid-flow-col">
                <div class="flex flex-col" >
                    <h5 class="text-center font-bold">À savoir sur moi</h5>
                    <div class="flex justify-center mt-8">
                        <span class="separator"></span>
                    </div>  
                    <p class="text-center lg:text-justify text-lg text-gray-600 mt-8">
                        Étudiante à l'école 42, j'ai pour objectif de me spécialiser dans le <b>développement d'application web et mobile</b>.<br><br>
                        Toujours en constante évolution, je me forme quotidiennement de sorte à toujours être au courant et à jour des nouveaux outils.<br><br>
                        Je vous invite à jeter un oeil sur mes <b>projets</b> pour en savoir plus.<br>
                    </p>
                    <div class="flex justify-center mt-14">
                        <button type="button" class="bg-yellow-500 hover:bg-yellow-600 w-52 h-12 font-bold rounded-lg text-xl shadow-lg " @click="scrollToProject">Projets</button>
                    </div>
                </div>
                <div class="lg:col-start-3 lg:row-start-1 row-start-2 lg:pt-0 pt-24">
                    <h5 class="text-center font-bold">Connaissances techniques</h5>
                    <div class="flex justify-center mt-8">
                        <span class="separator"></span>
                    </div>  
                    <FadeElement />
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center pt-12 invisible xl:visible">
        <span class="end-bar"></span>
    </div>
</template> 

<style>
    .separator {
        width: 30px;
        height: 5px;
        background-color: rgb(69, 157, 240); 
        border-radius: 5px 5px 5px 5px;
    }
    .end-bar {
        border: solid 0.001cm;  
        width: 82rem; 
        border-radius: 25px 25px;
        background-color: rgba(175, 175, 175, 0.20);
        color: rgba(175, 175, 175, 0.20);
    }
</style>

<script lang="js">
    import FadeElement from './TechnologieComponent/FadeElement.vue'

    export default {
        components: {
            FadeElement
        },
        methods: {
            scrollToTechnologie() {
                this.$emit('scroll-to-section', 'about'); // Émet un événement avec l'ID de la section "Technologie"
            },
            scrollToProject() {
                this.$emit('scroll-to-project', 'projects'); // Émet un événement avec l'ID de la section "Technologie"
            }
        }
    }
</script>

