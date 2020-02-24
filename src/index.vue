<template>
    <div>


        <bw-demo-tipograpy v-if="model=='tipography'"></bw-demo-tipograpy>

        <bw-demo-button v-if="model=='button'"></bw-demo-button>

        <bw-demo-card v-if="model=='card'"></bw-demo-card>

        <bw-demo-chips v-if="model=='chips'"></bw-demo-chips>

        <bw-demo-control v-if="model=='control'"></bw-demo-control>


        <!-- <bw-material-button></bw-material-button>

        <bw-material-text-field outlined id="my-text-field1" color="primary" placeholder="E-mail">
                <bw-material-floating-label for="my-text-field1">Subscription</bw-material-floating-label>
                <bw-material-line-ripple slot="bottomLine"/>
        </bw-material-text-field>

        <bw-material-slider-knobs
            :max="99"
            :min="9"
            v-model="singleSliderModelKnobsRange"
        >
        </bw-material-slider-knobs> -->
    </div>
</template>

<script>
    import Vue from 'vue';
    
    Vue.prototype.$eventHub = new Vue(); // Global event bus
    import BwMaterial from './index';
    import BwMaterialTextField from './index';
    import BwMaterialFloatingLabel from './index';

    import BwDemoTipography from './demo/tipography/component.vue';
    import BwDemoButton from './demo/button/component.vue';
    import BwDemoCard from './demo/card/component.vue';
    import BwDemoChips from './demo/chips/component.vue';
    import BwDemoControl from './demo/control/component.vue';
    // import BwDemoHeader from './demo/header/component.vue';

    

    Vue.use(BwMaterial);
    Vue.use(BwMaterialTextField);
    Vue.use(BwMaterialFloatingLabel);
    import Routes from './router/index';

    Vue.component("bw-demo-tipograpy", BwDemoTipography);
    Vue.component("bw-demo-button", BwDemoButton);
    Vue.component("bw-demo-card", BwDemoCard);
    Vue.component("bw-demo-chips", BwDemoChips);
    Vue.component("bw-demo-control", BwDemoControl);
    // Vue.component("bw-demo-header", BwDemoHeader);

    export default {
        data () {
            return {
                model: 'control',
                singleSliderModelKnobsRange: [25, 80]
            }
        },
        components: {
        },
        router: Routes
    }
</script>

<style  lang="scss">
    @import'~bootstrap/dist/css/bootstrap.css';
</style>