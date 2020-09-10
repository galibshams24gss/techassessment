<template>
  <v-container fluid>
    <v-card v-if="isMobileDevice" id="tab" ref="tab">
    <v-toolbar
      color="indigo darken-4"
      dark
      flat
    >

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="(n) in dataTitleDisplay"
            :key="n"
          >
            {{ n }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
        <v-tab-item
        v-for="(n) in dataContentDisplay"
        :key="n">
        <v-card flat color="deep-purple lighten-3">
          <v-card-text class="headline">
            {{ n }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

    <br/>
    
    <v-container fluid>
  <v-row v-if="!isMobileDevice" id="accordion" ref="accordion">
    <v-expansion-panels accordion focusable v-model="panel">
      <v-btn @click="clearPanel" color="pink" dark >close</v-btn>
      <v-expansion-panel
        v-for="(item, i) in dataTitleDisplay"
        :key="i"
      >
        <v-expansion-panel-header color="green accent-2" class="headline" >{{ item }}</v-expansion-panel-header>

        <v-expansion-panel-content
        v-for="(item, i) in dataContentDisplay"
        :key="i"
        color="cyan lighten-5">
          {{ item }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
  </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'TaskTwo',

    data: () => ({
      tabs: null,
      window: {
            width: 0
        },
      isMobileDevice: false,
      item: 1,
      panel: []
    }),

    computed: {
      data(){
        return this.$store.getters['datastore/data'];
      },

      dataTitleDisplay(){
          const dataArr = [];
          const dataProc = this.data;
          dataProc.forEach(function(obj) {
            const title = obj.title;
            dataArr.push(title);
          });
          return dataArr;
      },

      dataContentDisplay(){
          const dataArr = [];
          const dataProc = this.data;
          dataProc.forEach(function(obj) {
            const content = obj.content;
            dataArr.push(content)
          });
          return dataArr;
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    mounted(){
      this.data;
      this.dataTitleDisplay;
      this.dataContentDisplay;
    },

    methods: {
      windowResize() {
            this.window.width = window.innerWidth;
            if(this.window.width < 415) {
                this.isMobile = false;
            } else {
                this.isMobile = true;
            }
      },

      dataholderSelection() {
        if(this.$isMobile() == true){
          this.isMobileDevice = false;
        } else {
          this.isMobileDevice = true;
        }
      },

      selectedPanel () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },

      clearPanel () {
        this.panel = []
      }
    },

    created() {
        this.dataholderSelection();
        //window.addEventListener('resize', this.windowResize);
        //this.windowResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.windowResize);
    }
  }
</script>

<style lang="scss">
  #dataholder {
    border-radius: 20px;
  }
</style>