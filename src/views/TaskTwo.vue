<template>
  <v-container fluid>
    <v-card v-if="isMobile" id="tab" ref="tab">
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
  <v-card v-if="!isMobile" id="accordion" ref="accordion">
    <v-row justify="center">
    <v-expansion-panels accordion focusable>
      <v-expansion-panel
        v-for="(n) in dataTitleDisplay"
        :key="n"
      >
        <v-expansion-panel-header color="green accent-2" class="headline" >{{ n }}</v-expansion-panel-header>

        <v-expansion-panel-content
        v-for="(n) in dataContentDisplay"
        :key="n"
        color="cyan lighten-5">
          {{ n }}
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--
          <v-btn
            color="pink darken-1"
            text
            @click="clickHeader()"
          >
            Close
          </v-btn>-->
    </v-expansion-panels>
  </v-row>
  </v-card>
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
      isMobile: false
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

      close () {
        this.dialog = false
      },

      clickHeader () {
        //console.log("clicked")
      }
    },

    created() {
        window.addEventListener('resize', this.windowResize);
        this.windowResize();
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