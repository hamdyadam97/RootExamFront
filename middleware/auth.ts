
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
 

export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
  
    if (token.value) {
      // check if value exists
      authenticated.value = true; // update the state to authenticated
    }
  
    let auth_routes = ['login' , 'forget' , 'signup','otp' , 'reset'];
    // if token exists and url is /login redirect to homepage
    if (token.value && auth_routes.includes(to?.name)) {
      return navigateTo('/user');
    }
  
    // if token doesn't exist redirect to log in
    if (!token.value && !auth_routes.includes(to?.name)) {
      abortNavigation();
      return navigateTo('/login');
    }
  
})
