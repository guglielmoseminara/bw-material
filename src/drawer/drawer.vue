<template>
  <aside
    :class="classes"
    class="mdc-drawer"
    @MDCDrawer:closed="onClosed"
    @MDCDrawer:opened="onOpened"
  >
    <div
      v-if="$slots.header"
      class="mdc-drawer__header"
    >
      <slot name="header" />
    </div>
    <div class="mdc-drawer__content">
        <nav class="mdc-list" v-if="navLinksGroups">
          <template v-for="(group, i) in navLinksGroups">
            <a v-for="(link, index) in group" 
              class="mdc-list-item mdc-list-item--activated" 
              :href="link.href" aria-current="page" :key="index+'a'+i"
            >
              <i v-if="link.icon" class="material-icons mdc-list-item__graphic" aria-hidden="true">{{link.icon}}</i>
              <span v-if="link.name" class="mdc-list-item__text">{{link.name}}</span>
            </a>
             <hr class="mdc-list-divider" :key="'drawer-divider-'+i">
          </template>
        </nav>
        <nav class="mdc-list" v-else>
          <slot/>
        </nav>
    </div>
  </aside>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>