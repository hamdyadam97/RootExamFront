import { useAuthStore } from '~/store/auth';

export default defineNuxtPlugin(() => {
    // const { session } = useUserSession()
    const { setToken, setUserData } = useAuthStore();

    let BASE_URL = process.dev ? "http://127.0.0.1:8000/api" : "https://admin.rootsexams.com/api";
 
    const api = $fetch.create({
        baseURL: BASE_URL,
        // baseURL: useRuntimeConfig().public.API_BASE_URL,

        onRequest({ request, options, error }) {
            const token = useCookie('token'); // get token from cookies
            // options.credentials = 'include';
            const headers = options.headers ||= {}

            if (Array.isArray(headers)) {
                headers.push(['Accept', `application/json`])
            } else if (headers instanceof Headers) {
                headers.set('Accept', `application/json`)
            } else {
                headers.Accept = `application/json`
            }

            if (token.value) {
                if (Array.isArray(headers)) {
                    headers.push(['Authorization', `Bearer ${token.value}`])
                } else if (headers instanceof Headers) {
                    headers.set('Authorization', `Bearer ${token.value}`)
                } else {
                    headers.Authorization = `Bearer ${token.value}`
                }
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                setToken([]);
                setUserData([]);        
                await navigateTo('/login')
            } else if (response.status === 422) {
                let errorData = response._data;
                let message = errorData.message;

                let errorsHtml = '<ul style="list-style-type: none">';
                for (const [key, value] of Object.entries(errorData.errors??{})) {
                    errorsHtml += '<li style="font-family: \'Droid Arabic Kufi\' !important">' + value + '</li>';
                }

                errorsHtml += '</ul>';

                useNuxtApp().$toastr.error(message + errorsHtml);

            } else if (response.status === 500) {
                let errorData = response._data;
                let message = errorData.message;



                useNuxtApp().$toastr.error(message);

            }

        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
