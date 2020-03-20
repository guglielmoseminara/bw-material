<template>
        <div class="app2">
            <div class="appheader">
                <bw-material-header raised v-elevation="1" 
                    :fixed="true" :scroll-target="$refs.mainContent" 
                    :nav-links-groups="[
                    [
                        {name: 'button doc', href: 'button',
                        
                        },
                        {name: 'menu doc', href: 'menu'},
                        {name: 'list doc', href: 'list'},
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
            
            <bw-material-footer 
            :link-groups="[
                {
                    classList: ['group-0'],
                    links: [
                        {name: 'item 0', href: '#'},
                        {name: 'item 1', href: '#'},
                        {name: 'item 2', href: '#'},
                        {name: 'item 3', href: '#'},
                    ]
                },
                {
                    classList: ['group-1'],
                    links: [
                        {name: 'item 4', href: '#'},
                        {name: 'item 5', href: '#'},
                        {name: 'item 6', href: '#'},
                    ]
                },
                {
                    classList: ['group-2 '],
                    links: [
                        {name: 'item 7', href: '#'},
                        {name: 'item 8', href: '#'},
                        {name: 'item 9', href: '#'},
                        {name: 'item 10', href: '#'},
                        {name: 'item 11', href: '#'},
                        {name: 'item 12', href: '#'},
                    ]
                },
            ]"
            :bottom-links-groups="[
                {
                    classList: ['group-0'],
                    links: [{name: '© BrandName. All rights reserved.'}]
                },
                {
                    classList: ['group-1'],
                    links: [{name: 'Privacy Policy', href: '#'},
                        {name: 'Terms of Service', href: '#'},
                        {name: 'Legal', href: '#'},
                    ]
                },                {
                classList: ['group-1'],
                    links: [
                        {name: 'Terms of Service', href: '#'},
                        {name: 'Legal', href: '#'},
                    ]
                }
            ]"
        >

        <div slot="topStart">
            logo here
        </div>
        
        <div slot="middleStart">
            CUSTOM MIDDLE START SLOT<br>
            <bw-material-text-field outlined id="my-text-field1" color="primary" placeholder="E-mail">
                <bw-material-floating-label for="my-text-field1">Subscription</bw-material-floating-label>
                <bw-material-line-ripple slot="bottomLine"/>
            </bw-material-text-field>
            <div>
                
                <bw-material-button label="SUBSCRIBE" class="mt-3"
                ></bw-material-button>
            </div>
        </div>
        
        <template slot="middleEnd">
          CUSTOM MIDDLE END SLOT
        </template>
        
    </bw-material-footer>
    </div>
</template>

<script>
    import Vue from 'vue';

    console.log('****** welcome to bw-material demo! ******');
    
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


// Material Override
:root {
    --mdc-theme-primary: #AE1B21;
    --mdc-rgba-theme-primary: 174, 27, 33;

    --mdc-theme-on-primary: #ffffff;

    --mdc-theme-text-primary-on-light: #000000;
    --mdc-theme-text-secondary-on-light: #000000;

    --mdc-theme-secondary: #0b156b;
    --mdc-rgba-theme-secondary: 11, 21, 107;


    --mdc-theme-on-secondary: #cf96e6;
    --mdc-theme--secondary-bg: #000000;

    --mdc-theme--primary-bg: #f5f8f6;
    --mdc-theme-secondary-bg: #ffee00;


    --contain-input-bg: rgba(0, 0, 0, 0.12);

    --label-color: rgba(0, 0, 0, 0.6);
    --label-color-secondary: rgba(0, 0, 0, 0.6);

    --footer-text-color: var(--bw-text-link);
    --footer-text-hover-color: linear-gradient(93.61deg, #EB643F -0.04%, #F8017A 49.25%, #994E9D 99.89%);
    --footer-divider-color: linear-gradient(93.61deg, #EB643F -0.04%, #F8017A 49.25%, #994E9D 99.89%);


    --icon-selected-color: pink;
    // --mdc-theme-background: 
    // --mdc-theme-surface: black;
    // --mdc-theme-on-surface: black;
    // --mdc-text-primary-on-light: black;

    --bw-text-link: rgb(149, 149, 149);
    --bw-text-link-hover: rgb(29, 29, 29);

    --mdc-chip-selected: #158b15;
    --btn-text-color-secondary: white;
}

</style>