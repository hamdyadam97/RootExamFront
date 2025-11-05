<template>
    <div class="phone-box">

        <vue-tel-input v-model="mobile_number_object.mobile" mode="auto" v-bind="bindProps" :class="{
                'is-success': mobile_number_object.valid,
                'is-danger': !mobile_number_object.valid,
            }" v-on:country-changed="countryChanged" @validate="phoneObject" :defaultCountry="init_mobile_country_code"
            :key="init_mobile_country_code" :disabled="disabled">
        </vue-tel-input>

        <span class="help is-danger" v-if="(typeof mobile_number_object.valid == 'boolean') && !mobile_number_object.valid">
            <i class="fas fa-x has-text-danger"></i>
            Invalid Mobile Number
        </span>
    </div>
</template>

<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';



const mobile_number_object = reactive({
    'mobile_country_code': ref(null),
    dial_code: ref(null),
    mobile: ref(null),
    valid: ref(null),
})
const props = defineProps([  'reset_input', 'init_mobile_country_code', 'init_mobile', 'disabled']);
const emits = defineEmits(['change']);
const reset_input = computed(() => props.reset_input);
const init_mobile_country_code = computed(() => props.init_mobile_country_code ?? '');
const init_mobile = computed(() => props.init_mobile);

watch(reset_input, () => {
    mobile_number_object.mobile = '';
})
 

watch(init_mobile, () => {    
    mobile_number_object.mobile = init_mobile.value;
})

let disabled = computed(() => props.disabled);

let bindProps = reactive({
    autoFormat: false,
    validCharactersOnly: true,
    mode :"national",
    inputOptions: {
        showDialCode: false,
        autocomplete: "off",
        placeholder: 'Mobile',
        separateDialCode: true,
        autofocus: false,
    },
    dropdownOptions: {
        showDialCodeInList: true,
        showDialCodeInSelection: true,
        showFlags: true,
        showSearchBox: true,

    }
});


const countryChanged = (option: any) => {
    mobile_number_object.dial_code = option.dialCode;
    mobile_number_object.mobile_country_code = option.iso2;
}

function phoneObject(object: any) {
    mobile_number_object.valid = object.valid;
}

watch(mobile_number_object, () => {

    emits('change', mobile_number_object)
})

import('/public/assets/sass/_tel-input.scss')
</script>

<style scoped></style>