<template>
    <div class="flex flex-col bg-img -mb-6 md:h-screen h-full"> 
        <h4 class="sm:text-4xl md:text-5xl text-wrap md:text-no-wrap text-3xl font-bold text-center mt-20">Contact</h4>
        <div class="flex justify-center">
            <span class="separator"></span>
        </div>
        <form @submit.prevent="submitForm" class="max-w-6xl mx-auto shadow-2xl bg-white rounded-lg p-12 mt-24 mb-12">
            <div class="relative z-0 w-full mb-5 group border rounded-lg pl-4">
                <input v-model="email" type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-10 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Adresse email <span class="text-red-600">*</span></label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6 pt-4">
              <div class="relative z-0 w-full mb-12 group border rounded-lg pl-4">
                  <input v-model="first_name" type="text" name="first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-10 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Prénom <span class="text-red-600">*</span></label>
              </div>
              <div class="relative z-0 w-full mb-12 group border rounded-lg pl-4">
                  <input v-model="last_name" type="text" name="last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-10 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Nom de famille</label>
              </div>
            </div>
            <div class="relative z-0 w-full mb-12 group border rounded-lg pl-4">
                  <textarea v-model="message" type="text" name="message" id="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-10 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Votre message <span class="text-red-600">*</span></label>
              </div>
            <div class="flex md:flex-row flex-col md:justify-between">
              <p class="text-gray-500 md:mt-6"><span class="text-red-600">*</span> arguments requis</p>
              <button type="submit" class="mt-6 md:mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>             
            </div>
        </form>
    </div>
</template>

<script lang="js">
  const WEB3FORMS_ACCESS_KEY = "8ace5ac4-bd2e-4c4a-bb24-ff6e80cf0485"

  export default {
    data() {
      return {  
        email: "",
        last_name: "",
        first_name: "",
        company: "",
        message: "",
      }
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            company: this.company,
            message: this.message,
          }),
        })
        const result = await response.json()
        if (result.success) {
          console.log(result)
        }
      },
    },
  };
  </script>