<template>
<div  style="position: fixed; top: 200px; height: 3000px;">
    <div style="position: absolute; top: 0px;">
        <bw-material-header :scroll-target="$refs.mainContent" :nav-links-groups="[
            [
                {name: 'card doc', icon: 'featured_video', href: 'demo-card'}, 
                {name: 'chips doc', href: 'demo-chips'}
            ],
            [
                {name: 'text field', icon: 'featured_video', href: 'demo-text'}, 
                {name: 'input control', href: 'demo-control'}
            ],
            [
                {name: 'header', icon: 'featured_video', href: 'headers'}, 
            ],
            ]"
            class="mt-5"
        >
            <template slot="startSlot">
                <img src="@/assets/fucktotum.png">
            </template>
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

    <div style="position: absolute; top: 100px">
        <bw-material-header :scroll-target="$refs.mainContent" class="my-5" :start-menu="true">
            <template slot="startSlot">
                <img src="@/assets/fucktotum.png">
            </template>
            <template slot="centerSlot">
                <span class="mdc-top-app-bar__title">catania, CA</span>
                <span class="mdc-top-app-bar__title">San Francisco, CA</span>
            </template>
            <template slot="drawerSlot">
               custom drawer content
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

    <div style="position: absolute; top: 300px">
        <p class="mt-5 mb-3">List of props</p>
        <pre class="mt-5 mb-3">
            Variant: <a href="https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar"> Material Demo</a>
            collapsed: collapsed bar (must be short too) (Boolean)
            short: short bar (Boolean)
            prominent:	prominent app bar style (could not be short too) (Boolean)
            dense:	dense app bar style (could not be short too) (Boolean)
            fixed:	style the top app bar as a fixed top app bar. (Boolean)
            nav-links-groups: groups of links for the central slot (Array)
        </pre>
    </div>
</div>
</template>

<script src="./script.js"></script>

