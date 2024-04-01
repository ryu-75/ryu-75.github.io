<template>
    <div class="flex-row justify-center sm:mx-44 mx-10 mt-12">
        <div class="grid grid-rows-5 sm:grid-rows-2 grid-flow-col bg text-center gap-4">
            <div class="flex justify-center">
                <img src="./../../assets/react-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
            <div class="flex justify-center">
                <img src="./../../assets/nestjs-svgrepo-com.svg" alt="nestjs-svgrepo-com" class="fade-icon size-32"/>
            </div>          
            <div class="flex justify-center">
                <img src="./../../assets/html-5-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>            
            <div class="flex justify-center">
                <img src="./../../assets/css-3-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>            
            <div class="flex justify-center">
                <img src="./../../assets/docker-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>            
            <div class="flex justify-center">
                <img src="./../../assets/linux-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
            <div class="flex justify-center">
                <img src="./../../assets/cpp3-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
            <div class="flex justify-center">
                <img src="./../../assets/typescript-official-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
            <div class="flex justify-center">
                <img src="./../../assets/github-svgrepo-com.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
            <div class="flex justify-center">
                <img src="./../../assets/vue-vuejs.svg" alt="react-svgrepo-com" class="fade-icon size-32"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default  {
        data() {
            return {
                fadeInElement: [],
                elementVisible: []
            };
        },
        mounted() {
            this.fadeInElement = Array.from(document.getElementsByClassName('fade-icon'))
            this.fadeInElement.forEach((index) => {
                this.elementVisible[index] = true
            })
            document.addEventListener('scroll', this.handleScroll)
        },
        beforeUnmount() {
            this.destroyer()
        },
        methods: {
            isElVisible(el) {
                if (!el)
                    return false
                const   rect = el.getBoundingClientRect();
                const   elTop = rect.top + 100
                const   elBottom = rect.bottom
                return elTop < window.innerHeight && elBottom > 0
            },
            handleScroll() {
                for (let i = 0; i < this.fadeInElement.length; i++) {
                    const el = this.fadeInElement[i]
                    if (this.isElVisible(el)) {
                        el.style.opacity = '1'
                        el.style.transform = 'scale(1)'
                        this.elementVisible[i] = true
                    } else {
                        if (this.elementVisible[i]) {
                            this.fadeInElement = Array.from(document.getElementsByClassName('fade-icon'))
                            el.style.opacity = '0'
                            el.style.transform = 'scale(0.7)'
                            this.elementVisible[i] = false
                        }
                    }
                }
            }
        },
        destroyer() {
            document.removeEventListener('scroll', this.handleScroll);
        }
    } 
</script>

<style>
    .fade-icon {
        opacity: 0;
        transition: 0.3s all ease-out;
        transform: scale(0.8);
        display: inline-block;
    }
</style>