<template>
  <bw-material-menu-anchor class="bw-dropdown-menu">
    <p @click.stop="openMenu()" class="bw-label">
      {{ label }} 
      <i class="material-icons">
        {{ isMenuOpen ?  'arrow_drop_up': 'arrow_drop_down' }}
      </i>
    </p>

    <!-- use only with list -->
    <bw-material-menu v-model="isMenuOpen">
      <bw-material-list v-if="listItems">
        <template v-for="(item, i) in listItems">
          <!-- don't change with list item component for ripple and overflow -->
          <router-link :to="item.href || '#'" :key="'dpmenu'+i" class="router-link">
          <li class="bw-list-item" >            
            <bw-material-abstract-list-item
              :key="i" 
              :item="item"
            >
            </bw-material-abstract-list-item>
          </li>
          </router-link>
        </template>
      </bw-material-list>
      <bw-material-menu-surface v-else v-model="isMenuOpen">
        <slot />
      </bw-material-menu-surface>
    </bw-material-menu>
  </bw-material-menu-anchor>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>