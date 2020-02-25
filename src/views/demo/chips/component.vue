<template>
<div class="row mt-5">
  <div class="col-12 mb-5">
      <h3 class="mb-4">CHIPS</h3>
      <h5>Choice chips:</h5> NOTE: valueField is an optional param, you can work with the entire object
      <bw-material-chips :choice="true" :options="chips" v-model="selectedChip" 
          color="secondary" 
          :config-options="{nameField: 'name', codeField: 'code', valueField: 'code'}"
      >
      </bw-material-chips>
      
      {{selectedChip}}
  </div> 

  <div class="col-12 mb-5">
      <h5>Filter chips:</h5>
      <bw-material-chips :filter="true" :options="chips" v-model="selectedFilterChip" 
          color="primary" type="outline"
          :config-options="{nameField: 'name', codeField: 'code', valueField: 'code'}"
      >
      </bw-material-chips>
      {{selectedFilterChip}}
      <br><br>

      <p>NOTE: valueField is an optional param, you can work with the entire object:</p>
      <bw-material-chips :filter="true" :options="chips" v-model="selectedFilterObjectChip" color="secondary"
      :config-options="{nameField: 'name', codeField: 'code'}"
      >
      </bw-material-chips>
      {{selectedFilterObjectChip}}
  </div> 
</div>
</template>

<script src="./script.js"></script>

