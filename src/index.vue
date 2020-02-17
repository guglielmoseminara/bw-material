<template>
    <div>
        <bw-material-button></bw-material-button>

        <bw-material-text-field outlined id="my-text-field1" color="primary" placeholder="E-mail">
                <bw-material-floating-label for="my-text-field1">Subscription</bw-material-floating-label>
                <bw-material-line-ripple slot="bottomLine"/>
        </bw-material-text-field>
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

    export default {}
</script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>