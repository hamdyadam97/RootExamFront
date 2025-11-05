import sweetalert2 from 'sweetalert2';


export default defineNuxtPlugin(nuxtApp => {

     nuxtApp.provide('sweetalert2', sweetalert2)

})