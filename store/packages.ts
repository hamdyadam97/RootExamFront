import { defineStore } from 'pinia';

// interface UserPayloadInterface {
//     name?: string;
//     mobile: string;
//     password: string;
//     password_confirmation?: string;
// }

export const usePackagesStore = defineStore('packages', {
    state: () => ({
        packages: [],
    }),
    actions: {

        async indexData() {
            
            const { data }: any = await useNuxtApp().$api('/packages/data', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
 
            if (data) {
                return data;
            }
            return [];
        },

        async index(params = {}) {
            
            const { data }: any = await useNuxtApp().$api('/packages/index', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                params,
            });
 
            if (data) {
                this.packages = data.packages;
                return data;
            }
            return [];
        },
        async subscribe( package_id:any , coupon:any ) {

            const { data, message }:any = await useNuxtApp().$api('/packages/subscribe', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    package_id,
                    coupon,
                    payment_type:"visa"
                },
            }) 

             
            if (data) {
                useNuxtApp().$toastr.success(message);
                return data;
            }

            return true;
        },

        async subscription() {

            const { data, message ,}: any = await useNuxtApp().$api('/packages/user-subscription', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                useNuxtApp().$toastr.success(message);
                return data.subscriptions;
            }else{
                return [];
            }
 
        },

        async getPackage(package_id:Number) {

            const { data, message }: any = await useNuxtApp().$api(`/packages/${package_id}/get`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (data) {
                return data;
            }else{
                return [];
            }
 
        },

        async checkCoupon(package_id:Number,coupon:string) {

            const { data, message }: any = await useNuxtApp().$api('/packages/check-coupon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:{
                    package_id,
                    coupon
                }
            });

            if (data) {
                useNuxtApp().$toastr.success(message);
                return data;
            }else{
                return [];
            }
 
        },

    },
});
