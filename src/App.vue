<template>
<v-app>

    <v-app-bar
      color="amber"
      dark
      max-height="57"
      class="toolbar"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          v-for="(menu, ind) in menuItems" 
          :key="ind" 
          :to=menu.link
          exact
        >
          {{ menu.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="green accent-2"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="black--text text"
        >

          <v-list-item class="justify-center">
          <v-avatar size="55">
            <img src="@/assets/MindArc.png">
          </v-avatar>
          </v-list-item> 

          <v-list-item exact>
            <v-list-item-icon>
              <v-icon color="amber">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/task1">Task One</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item exact>
            <v-list-item-icon>
              <v-icon color="pink">mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/task2">Task Two</router-link></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue">

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        &copy;{{ new Date().getFullYear() }} — <strong>Copyright</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
  export default {
    data: () => ({
      menuItems: [
        { title: 'Task One', link: '/task1' },
        { title: 'Task Two', link: '/task2' }
      ],
      drawer: false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      tile: false,
      msg: isMobile ? 'Opened in Mobile' : 'Opened in Desktop!'
    }),

    methods: {
        detectBrowser(){
            this.result = navigator.userAgent;
            if(navigator.userAgent.indexOf("Firefox") !=-1){
                console.log("Mozilla Firefox");
            }
        }
    },

    mounted(){
        this.detectBrowser()
    },

    created() {
      //console.log(this.$isMobile())
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
