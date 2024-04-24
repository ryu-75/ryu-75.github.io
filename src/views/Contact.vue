<template>
    <div class="flex flex-col bg-img -mb-6 lg:h-min md:h-screen h-full pb-24">
        <h2 class="md:text-5xl text-wrap md:text-no-wrap text-4xl font-bold text-center mt-20 title">Contact</h2>
        <div class="flex justify-center">
            <span class="separator"></span>
        </div>
        <div class="flex lg:flex-row flex-col gap-8 m-8 lg:gap-0 justify-around lg:mt-12">
            <div class="rounded-lg bg-transparent bg-card w-auto h-auto pl-24 pr-24 pb-12">
                <h4 class="text-center md:text-1xl text-xl font-semibold mt-6">Email</h4>
                <div class="flex justify-center">
                    <span class="separator"></span>
                </div>
                <p class="flex justify-center md:text-2xl text-lg mt-10">sasha.lorion@gmail.com</p>
            </div>
            <div class="flex flex-col rounded-lg bg-transparent w-auto bg-card h-auto md:pl-24 md:pr-24">
                <h4 class="text-center md:text-1xl text-xl font-semibold text-shadow-lg mt-6">Réseaux</h4>
                <div class="flex justify-center">
                    <span class="separator"></span>
                </div>
                <div class="flex flex-row justify-evenly mt-10 mb-10 md:gap-20">
                    <a href="https://github.com/ryu-75/"  class="size-16 text-center shadow-md rounded-full">
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