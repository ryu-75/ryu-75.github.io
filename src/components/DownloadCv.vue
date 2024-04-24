<template>
    <div>
        <button @click="downloadCv('./src/assets/download/Sasha_LORION_CV.pdf')" class="flex flex-col download-shadow align-center fixed bottom-4 right-4 rounded-xl shadow-xl bg-yellow-500 hover:bg-yellow-600">
            <p class="font-semibold text-gray-900 text-xs md:p-4 p-2 block">CV à télécharger</p>
            <img class="flex justify-center size-8 mb-2 md:size-" src="./../assets/images/download.svg" />
        </button>
    </div>
</template> 

<script>
    import axios from 'axios'
    export default {
        name: "DownloadCVButton",
        props: {
            pdfUrl: {
                type: String,
                required: true
            },
        },
        methods: {
            downloadCv(pdfUrl) {
                axios.get(pdfUrl, { responseType: 'blob' })
                    .then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'Sasha_LORION_CV.pdf');
                        document.body.appendChild(link);
                        link.click();
                        console.log(link);
                        document.body.removeChild(link);
                    });
            }
        }
    }
</script>

<style>
    .download-shadow {
        box-shadow: 0px -2px 5px 4px rgba(187, 126, 13, 0.5) inset;
    }
</style>