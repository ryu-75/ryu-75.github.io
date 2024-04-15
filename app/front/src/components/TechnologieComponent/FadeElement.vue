<template>
    <div class="flex justify-center mt-12 mr-12">
        <div class="grid grid-rows-3 grid-cols-4 sm:grid-rows-2 text-center gap-16">
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/react-svgrepo-com.svg" alt="react-svgrepo-com"/>
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/nestjs-svgrepo-com.svg" alt="nestjs-svgrepo-com"/>          
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/html-5-svgrepo-com.svg" alt="react-svgrepo-com"/>            
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/css-3-svgrepo-com.svg" alt="react-svgrepo-com"/>            
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/docker-svgrepo-com.svg" alt="react-svgrepo-com"/>            
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/linux-svgrepo-com.svg" alt="react-svgrepo-com"/>
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/cpp3-svgrepo-com.svg" alt="react-svgrepo-com"/>
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/typescript-official-svgrepo-com.svg" alt="react-svgrepo-com"/>
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/github-svgrepo-com.svg" alt="react-svgrepo-com"/>
            </div>
            <div class="fade-icon" :style="{ width: logoSize + 'px', height: logoSize + 'px' }">
                <img src="./../../assets/images/vue-vuejs.svg" alt="react-svgrepo-com"/>
            </div>
        </div>
    </div>
</template>

<script lang="typescript">
    export default  {
        data() {
            return {
                fadeInElement: [],
                elementVisible: [],
                logoSize: 0,
            };
        },
        mounted() {
            this.fadeInElement = Array.from(document.getElementsByClassName('fade-icon'))
            this.fadeInElement.forEach((index) => {
                this.elementVisible[index] = true
            })
            this.updateLogoSize()
            document.addEventListener('scroll', this.handleScroll)
            window.addEventListener('resize', this.updateLogoSize)
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.updateLogoSize)
            this.destroyer()
        },
        methods: {
            updateLogoSize() {
                let newSize = window.innerWidth * 0.1
                if (newSize >= 70)
                    newSize = 70
                this.logoSize = newSize
            },
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

    .circles1 {
        background-color: rgba(202, 202, 202, 0.404);
        border-radius: 50%;
    }
    .circles2 {
        width: 80px;
        height: 80px;
        background-color: rgba(223, 220, 220, 0.404);
        border-radius: 50%;
        margin-left: 2px;
    }
</style>