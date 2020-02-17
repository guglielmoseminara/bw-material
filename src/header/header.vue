<template>
<header class="mdc-top-app-bar" :class="classes">
    <bw_drawer dismissible ref="drawer" :nav-links-groups="navLinksGroups">
        <div slot="header">
             <slot name="drawerHeaderSlot" />
        </div>
        <slot name="drawerSlot" />
    </bw_drawer>

    <div class="mdc-drawer-scrim" @click="closeDrawer"></div>

    
    <div class="mdc-top-app-bar__row" :class="{'container': haveContainer}">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button v-if="startMenu" @click="openDrawer"
                class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded"
            >menu</button>
            <slot name="startSlot" />
        </section>
        <section v-if="!navLinksGroups" 
            class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center"
        >
            <slot name="centerSlot" />
        </section>
        <section v-else class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">
            <template v-for="(group, i) in navLinksGroups">
                <span v-for="(link, index) in group" class="mdc-top-app-bar__title" :key="index+'a'+i">
                    <a :href="link.href">{{ link.name }}</a>
                </span>
            </template>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <slot name="endSlot" />
            <button v-if="!startMenu" @click="openDrawer"
                class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded"
            >menu</button>
        </section>
    </div>

</header>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>

