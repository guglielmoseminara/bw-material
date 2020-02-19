<template>
    <div>
        <bw-material-button></bw-material-button>

        <bw-material-text-field outlined id="my-text-field1" color="primary" placeholder="E-mail">
                <bw-material-floating-label for="my-text-field1">Subscription</bw-material-floating-label>
                <bw-material-line-ripple slot="bottomLine"/>
        </bw-material-text-field>

        <bw-material-slider-knobs
            :min="9"
            :max="99"
            v-model="singleSliderModelKnobsRange"
        >
        </bw-material-slider-knobs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BwMaterial from './index';
    import BwMaterialTextField from './index';
    import BwMaterialFloatingLabel from './index';

    Vue.use(BwMaterial);
    Vue.use(BwMaterialTextField);
    Vue.use(BwMaterialFloatingLabel);

    export default {
        data () {
            return {
                singleSliderModelKnobsRange: [25, 80]
            }
        },
    }
</script>