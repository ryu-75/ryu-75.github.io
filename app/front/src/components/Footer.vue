<template>
    <div class="bottom-0 z-50">
        <div class="grid grid-cols-4 grid-flow-col bg-gray-900">
            <div class="col-span-4 justify-center py-12">
                <p class="text-center font-bold">Développé avec</p>
                <div class="flex justify-center pt-6">
                    <span style="border: solid 0.01mm; width: 300px;"></span>
                </div>
                <div class="flex flex-row justify-center gap-16 pt-6">
                    <img class="size-10 pt-1" src="./../assets/images/vue_black_white.svg" alt="" />
                    <img class="size-10 pt-1" src="./../assets/images/typescript_black_white.svg" alt="" />
                    <img class="size-10 pt-1" src="./../assets/images/tailwind-black_white.svg" alt="" />
                </div>
                <div class="flex justify-center mt-8">
                    <p class="text-xs"><span>&#169;</span> Copyright - <span>{{  currentYear }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    export default {
        data() {
            return {
                currentYear: new Date().getFullYear()  
            }
        },
        mounted() {
            this.updateYear()
        },
        methods: {
            updateYear() {
                this.currentYear = new Date().getFullYear()
            }
        }
    }
</script>