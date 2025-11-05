import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


export default defineNuxtPlugin(nuxtApp => {


    const isRtl = false;
     
    toastr.options.closeButton = true;
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';

    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.closeMethod = 'slideUp';

    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-bottom-right"; 

    toastr.options.rtl = isRtl;

    nuxtApp.provide('toastr', toastr)

})