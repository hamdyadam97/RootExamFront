import { defineStore } from 'pinia';

interface UserPayloadInterface {
    name?: string;
    dial_code?: string;
    mobile_country_code?: string;
    mobile_number?: string;
    mobile?: string;
    password?: string;
    password_confirmation?: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        user: {},
        loading: false,
        is_forget: false,
        is_send_otp: false,
    }),
    actions: {

        async login({ mobile, dial_code, password }: UserPayloadInterface) {

            const { data, message }: any = await useNuxtApp().$api('/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    dial_code,
                    mobile,
                    password,
                },
            });

            if (data) {
                if (data?.go_to_verify) {
                }
                useNuxtApp().$toastr.success(message);
                this.setToken(data);
                this.setUserData(data);
                this.authenticated = true;
                return data;
            }

        },
        async register({ name, mobile_country_code, dial_code, mobile_number, password, password_confirmation }: UserPayloadInterface) {

            const { data, message }: any = await useNuxtApp().$api('/signup', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    name,
                    mobile_country_code,
                    dial_code,
                    mobile_number,
                    password,
                    password_confirmation,
                },
            });

            if (data) {
                this.setUserData(data);
                useNuxtApp().$toastr.success(message);
            }

            return true;
        },

        async forget({ mobile_country_code, dial_code, mobile_number }: any) {

            const { data, pending, message }: any = await useNuxtApp().$api('/forget', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    mobile_country_code,
                    dial_code,
                    mobile_number,
                },
            });
            this.loading = pending;

            if (data) {
                const is_forget = useCookie('is_forget')
                is_forget.value = this.is_forget = true;
                this.is_send_otp = true;

                this.setUserData(data);
                useNuxtApp().$toastr.success(message);
            }
            return true;

        },


        async verifyOTP({ otp }: any) {

            let endpoint = this.is_forget ? '/forget-verify-otp' : '/verify-otp';
            let mobile = this.user?.mobile;
            const { data, pending, message }: any = await useNuxtApp().$api(endpoint, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    mobile,
                    otp,
                },
            });
            this.loading = pending;

            if (data) {
                if (data.token) {
                    this.setToken(data);
                    this.setUserData(data);
                    this.authenticated = true;
                } else {
                    this.is_send_otp = false;
                    this.setUserData(data);
                }
                useNuxtApp().$toastr.success(message);
            }

            return true;

        },


        async resetPassword({ password, password_confirmation }: any) {
            let mobile = this.user?.mobile;
            const { data, message }: any = await useNuxtApp().$api('reset', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    mobile,
                    password,
                    password_confirmation,
                },
            });

            if (data.token) {
                this.setToken(data);
                this.setUserData(data);
                this.authenticated = true;
                this.clearIsForget();
                this.is_send_otp = false;
                useNuxtApp().$toastr.success(message);
            }


            return true;

        },

        async logUserOut() {

            const { data, message }: any = await useNuxtApp().$api('/logout', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
            });


            if (data) {
                this.setToken([]);
                this.setUserData([]);

                this.authenticated = false;
                useNuxtApp().$toastr.success(message);
            }

            return this.authenticated;

        },


        async resendOtp() {
            let mobile = this.user?.mobile;

            const { data, message }: any = await useNuxtApp().$api('/resend-otp', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    mobile,
                },
            });


            if (data) {
                this.is_send_otp = true;
                this.setUserData(data);
                useNuxtApp().$toastr.success(message);
            }

            return this.is_send_otp;

        },

        async checkVerification() {
            let mobile = this.user?.mobile;

            const { data, message }: any = await useNuxtApp().$api('/check-verification', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    mobile,
                },
            });


            if (data) {

                if (data.token) {
                    this.setToken(data);
                    this.setUserData(data);
                    this.authenticated = true;
                    return true;
                } else {
                    this.is_send_otp = false;
                    this.setUserData(data);
                    return false;
                }
            }

            return this.is_send_otp;

        },

        async getProfileData() {

            const { data, message }: any = await useNuxtApp().$api('/get-user-info', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });


            if (data) {
                this.setUserData(data);
            }


        },

        async updateProfile(form) {
            const { data, message }: any = await useNuxtApp().$api('/update-user-info', {
                method: 'post',
                body: form,
            });


            if (data) {
                this.setUserData(data)
                useNuxtApp().$toastr.success(message);
            }
        },

        async updatePassword(form) {


            const { data, message }: any = await useNuxtApp().$api('/update-user-password', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: form,
            });


            if (data) {
                useNuxtApp().$toastr.success(message);
            }
        },


        checkIsLogin() {
            const token = useCookie('token'); // get token from cookies
            this.authenticated = token.value ? true : false;
        },

        getUserData() {
            if (this.user && Object.keys(this.user).length > 0) {
                return this.user;
            }

            // Fallback to cookie if state is empty (e.g., after refresh)
            const cookieUser = useCookie('user');
            this.user = cookieUser.value ?? {};
            return this.user;
        },

        checkIsForget() {
            const is_forget = useCookie('is_forget');
            this.is_forget = is_forget.value;
        },

        setUserData(data: any) {
            const user = useCookie('user');
            user.value = (data?.user || '');
            this.user = (data?.user || '');
        },

        setToken(data: any) {
            const token = useCookie('token');
            token.value = data?.token ?? '';
        },

        clearIsForget() {
            const is_forget = useCookie('is_forget');
            is_forget.value = this.is_forget = false;
        }
    },
});
