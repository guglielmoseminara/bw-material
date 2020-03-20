<template>
<div>
  <bw-material-menu-anchor>
    <bw-material-button 
      type="text" 
      @click-btn="isMenuOpen=true"
      :have-shadow="false"
      :icon="isMenuOpen ? {name: 'arrow_drop_up', position: 'r'} : {name: 'arrow_drop_down', position: 'r'}"
    >open</bw-material-button>
    <!-- use only with list -->
    <bw-material-menu v-model="isMenuOpen">
      <bw-material-list>
        <bw-material-list-item>list item 1</bw-material-list-item>
        <bw-material-list-item>list item 2</bw-material-list-item>
      </bw-material-list>
    </bw-material-menu>
  </bw-material-menu-anchor>

  <bw-material-menu-anchor>
    <button id="menu-surface-button" @click="open=true">Open Menu Surface</button>
    <!-- use with custom slot -->
    <bw-material-menu-surface v-model="open">
      this is a custom menu slot (no list inside)
    </bw-material-menu-surface>
  </bw-material-menu-anchor>

<span v-for="(item, k) in provaItems" :key="'a'+k">
  <bw-material-abstract-list-item :item="item">
  </bw-material-abstract-list-item>
</span>

</div>
</template>

<script src="./script.js"></script>

