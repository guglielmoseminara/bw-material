<template>
        <div class="app2">
            <div class="appheader">
                <bw-material-header raised v-elevation="1" 
                    :fixed="true" :scroll-target="$refs.mainContent" 
                    :nav-links-groups="[
                    [
                        {name: 'card doc', icon: 'featured_video', href: 'card'}, 
                        {name: 'chips doc', href: 'chips'}
                    ],
                    [
                        {name: 'text field', icon: 'featured_video', href: 'text'}, 
                        {name: 'input control', href: 'control'}
                    ],
                    [
                        {name: 'header', icon: 'featured_video', href: 'demo-header'}, 
                    ],
                    ]"
                >
                    <template slot="centerSlot">
                        <span class="mdc-top-app-bar__title">catania, CA</span>
                        <span class="mdc-top-app-bar__title">San Francisco, CA</span>
                    </template>
                    <template slot="drawerHeaderSlot">
                        Drawer header slot
                        </template>
                    <template slot="endSlot">
                        <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Print this page">print</button>
                        <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Bookmark this page">bookmark</button>  
                    </template>
                </bw-material-header>
            </div>

            <div ref="mainContent">
                <router-view />
            </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    
    Vue.prototype.$eventHub = new Vue(); // Global event bus
    import BwMaterial from './index';
    import BwMaterialTextField from './index';
    import BwMaterialFloatingLabel from './index';   

    Vue.use(BwMaterial);
    Vue.use(BwMaterialTextField);
    Vue.use(BwMaterialFloatingLabel);
    import Routes from './router/index';

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

<style lang="scss">
    @import'~bootstrap/dist/css/bootstrap.css';
    .appheader {
        height: 64px;
    }
</style>