<template>
<div class="row my-5">
  <h3 class="col-12 my-5">BUTTON</h3>
      <div class="col-6">
        <div>
          type:contain <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label" class="mb-4" type="contain" color="secondary"
              size="small"
          ></bw-material-button>       
        </div>
      
        <div>
          type:outline <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label more more more lenght" class="mb-4" type="outline" :have-shadow="false" color="secondary"
              size="big"
          ></bw-material-button>
        </div>
      
        <div>
          type:text <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label" class="mb-4" type="text"
          ></bw-material-button>
        </div>
        <div>
          rounded:full <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label" class="mb-4" type="contain" rounded="full"
          ></bw-material-button>
        </div>
        <div>
          no shadow <br>
          <bw-material-button v-on:click-btn="exampleClickBtn" color="secondary"
              label="my label" class="mb-4" type="contain" :have-shadow="false"
          ></bw-material-button>
        </div>

        <div>
          rounded:none <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label" class="mb-4" type="outline" rounded="none"
          ></bw-material-button>
        </div>

        <div>
          rounded:default <br>
          <bw-material-button v-on:click-btn="exampleClickBtn" 
              label="my label" class="mb-4" type="outline"
          ></bw-material-button>
        </div>

        <div>
          type:contain rounded:full <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              label="my label" class="mb-4" type="contain" rounded="full" :icon="{name: 'add', position: 'l'}"
          >
          </bw-material-button>
        </div>

        <div>
          type:contain icon left <br>
          <bw-material-button v-on:click-btn="exampleClickBtn" 
              label="my label" class="mb-4" type="outline" rounded="none" 
              :icon="{name: 'add', position: 'l'}"
          >
          </bw-material-button>
        </div>
        <div>
          type:outline rounded:full / icon right <br>
          <bw-material-button v-on:click-btn="exampleClickBtn" 
              label="my label" class="mb-4" type="contain" rounded="full" 
              :icon="{name: 'favorite', position: 'r'}"
          >
          </bw-material-button>
        </div>

        <div>
          type:contain subtype:fab <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"
              class="mb-4" type="contain" subtype="fab" 
              :icon="{name: 'favorite'}"
          >
          </bw-material-button>
        </div>

        <div>
          type:contain subtype:fab <br>
          <bw-material-button v-on:click-btn="exampleClickBtn"  
              size="small" class="mb-4" type="contain" subtype="fab" 
              :icon="{name: 'favorite'}" color="secondary"
          >
          </bw-material-button>
        </div>
        <bw-material-icon-button v-model="iconBtnSelected" :ripple="false" color="primary"
        >
          <i class="material-icons" slot="toggleOn">favorite</i>
          <i class="material-icons" slot="toggleOff">favorite</i>
        </bw-material-icon-button>
        {{iconBtnSelected}}
        <div>

        </div>
      </div>
</div>
</template>

<script src="./script.js"></script>

