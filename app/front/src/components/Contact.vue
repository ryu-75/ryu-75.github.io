<template>
    <div class="flex flex-col bg-img -mb-6 md:h-min h-full pb-24">
        <h2 class="font-bold text-1xl text-center">Contact</h2>
        <div class="flex justify-center">
            <span class="separator"></span>
        </div>
        <div class="flex flex-row justify-around mt-12">
            <div class="rounded-lg bg-transparent bg-card w-auto h-auto pl-24 pr-24 pb-12">
                <h4 class="text-center text-1xl font-semibold">Email</h4>
                <div class="flex justify-center">
                    <span class="separator"></span>
                </div>
                <p class="text-center text-2xl mt-20">sasha.lorion@gmail.com</p>
            </div>
            <div class="rounded-lg bg-transparent  w-auto bg-card h-auto pl-24 pr-24 pb-12">
                <h4 class="text-center text-1xl font-semibold text-shadow-lg">Réseaux</h4>
                <div class="flex justify-center">
                    <span class="separator"></span>
                </div>
                <div class="flex flex-row justify-between mt-16">
                    <a href="https://github.com/ryu-75/"  class="size-16 mr-24 shadow-md rounded-full">
                        <img src="./../assets/images/github-142-svgrepo-com.svg" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/sasha-lorion/" class="size-16 shadow-md rounded-full">
                        <img src="./../assets/images/linkedin.svg" alt="" class="rounded-full">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .bg-card {
        background-image: url('./../assets/images/protruding-squares-light-pink.svg');
        box-shadow: -2px -2px 8px 0px rgba(0,0,0,0.2) inset;
        background-size: contain;
    }
</style>