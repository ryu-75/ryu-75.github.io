<template>
    <div>
        <button @click="downloadCv('./download/Sasha_LORION_CV.pdf')" class="flex flex-col align-center fixed bottom-4 right-4 rounded-full shadow-xl bg-yellow-500 hover:bg-yellow-600">
            <p class="text-wrap font-semibold text-gray-900 text-xs p-4">CV à télécharger</p>
            <img class="flex justify-center size-8 mb-2" src="./../assets/images/download.svg" />
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
            pdfFileName: {
                type: String,
                required: true
            }
        },
        methods: {
            downloadCv() {
                axios.get(this.pdfUrl, { responseType: 'blob' })
                    .then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', this.pdfFileName);
                        document.body.appendChild(link);
                        link.click();
                        console.log(link);
                        document.body.removeChild(link);
                    });
            }
        }
    }
</script>