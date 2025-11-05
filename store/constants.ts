import { defineStore } from 'pinia';

// interface UserPayloadInterface {
//     name?: string;
//     mobile: string;
//     password: string;
//     password_confirmation?: string;
// }

export const useConstantsStore = defineStore('constants', {
    state: () => ({
        
    }),
    actions: {

        async getCategory(category_id:Number) {
            
            const { data }: any = await useNuxtApp().$api(`get-category/${category_id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
 
            if (data) {
                return data;
            }
            return [];
        },
        async getSubCategories(category_id:Number) {
            
            const { data }: any = await useNuxtApp().$api(`get-subcategories/${category_id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
 
            if (data) {
                return data;
            }
            return [];
        },
    

    },
});
