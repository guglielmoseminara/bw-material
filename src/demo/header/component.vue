<template>
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
                {name: 'header', icon: 'featured_video', href: 'demo-header'}, 
            ],
            ]"
            class="mt-5"
        >
            <template slot="startSlot">
                <img src="{{URL::asset('images/fucktotum.png')}}">
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
</template>

<script src="./script.js"></script>

