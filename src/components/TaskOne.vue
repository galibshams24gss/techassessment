<template>
  <v-container fluid>

      <v-row>
        <v-col cols="12" sm="12" md="12" >
            <v-img
            :src="image"
            >
                <v-row>
                <v-col cols="12" class="imgtext">
                    <h1 class="display-1 font-weight-bold mb-4">Hello Developer!</h1>
                    <h4 class="subheading font-weight-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                </v-col>
                </v-row>
            </v-img>
        </v-col>
      </v-row>

    <v-row>
    <v-container fluid>
        <v-row>
        <v-col cols="12" sm="12" md="4">

            <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
            >
            <v-card
            :elevation="hover ? 16 : 2"
            class="mx-auto cardcontent">
                <v-img
                src="@/assets/400x300.png"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                ></v-img>
                <v-card-text class="headline">
                    {{ cardlinesPartOne }}
                <span v-if="readMoreFirst"></span>
                <span v-else class="headline">...</span>
                </v-card-text>
                
                <v-card-text v-show="readMoreFirst" class="headline">
                    {{ cardlinesPartTwo }}
                </v-card-text>

                <v-card-actions class="white justify-center">
                    <v-btn rounded outlined color="black" large @click="readFirst()">
                      <span v-if="readMoreFirst">Read Less</span>
                      <span v-else>Read More</span>
                    </v-btn>
                </v-card-actions>
             </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4">
            <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
            >
            <v-card
            :elevation="hover ? 16 : 2"
            class="mx-auto cardcontent">
                <v-img
                src="@/assets/400x300.png"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                ></v-img>
                <v-card-text class="headline">
                    {{ cardlinesPartOne }}
                    <span v-if="readMoreSecond"></span>
                <span v-else class="headline">...</span>
                </v-card-text>

                <v-card-text v-show="readMoreSecond" class="headline">
                    {{ cardlinesPartTwo }}
                </v-card-text>

                <v-card-actions class="white justify-center">
                    <v-btn rounded outlined color="black" large @click="readSecond()">
                      <span v-if="readMoreSecond">Read Less</span>
                      <span v-else>Read More</span>
                    </v-btn>
                </v-card-actions>
             </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4">
            <v-hover
                v-slot:default="{ hover }"
                open-delay="200"
            >
            <v-card
            :elevation="hover ? 16 : 2"
            class="mx-auto cardcontent">
                <v-img
                src="@/assets/400x300.png"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                ></v-img>
                <v-card-text class="headline"> 
                  {{ cardlinesPartOne }}
                  <span v-if="readMoreThird"></span>
                <span v-else class="headline">...</span>
                </v-card-text>

                <v-card-text v-show="readMoreThird" class="headline">
                    {{ cardlinesPartTwo }}
                </v-card-text>

                <v-card-actions class="white justify-center">
                    <v-btn rounded outlined color="black" large @click="readThird()">
                      <span v-if="readMoreThird">Read Less</span>
                      <span v-else>Read More</span>
                    </v-btn>
                </v-card-actions>
             </v-card>
            </v-hover>
        </v-col>
        </v-row>
    </v-container>
    </v-row>

  <v-fab-transition>
          <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="pink"
            @click="toTop"
            class="transparent"
          >
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
    </v-fab-transition>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      fab: false,
      window: {
            width: 0
        },
      image: null,
      readMoreFirst: false,
      readMoreSecond: false,
      readMoreThird: false,
      cardlinesPartOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
      cardlinesPartTwo: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }),

    computed: {},

    methods: {
        onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   document.documentElement.offsetTop || 0
        this.fab = top > 10
      },
      
      toTop () {
        this.$vuetify.goTo(0)
      },

      handleResize() {
            this.window.width = window.innerWidth;
            if(this.window.width < 415) {
                this.image= require('@/assets/600x600.png')
            } else {
                this.image= require('@/assets/1920x650.png')
            }
      },

      imageSelection() {
        if(this.$isMobile() == true){
          this.image= require('@/assets/600x600.png')
        } else {
          this.image= require('@/assets/1920x650.png')
        }
      },

      readFirst() {
        this.readMoreFirst =! this.readMoreFirst
      },

      readSecond() {
        this.readMoreSecond =! this.readMoreSecond
      },

      readThird() {
        this.readMoreThird =! this.readMoreThird
      }
    },

    mounted(){},

    created() {
        this.imageSelection();
        //window.addEventListener('resize', this.handleResize);
        //this.handleResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
  }
</script>

<style lang="scss">
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    border-radius: 20px;
  }

  .cardcontent {
      padding: 15px 15px 15px 15px;
  }

  .cardcontenttext {
      color: #000000;
  }

  .imgholder {
      align-content: center;
      justify-content: center;
      text-align: center;
  }

  .imgtext {
      color: #FFFFFF;
      align-content: center;
      justify-content: center;
      text-align: center;
      font-size: 1.5em;
      padding-top: 14%;
  }

  @media only screen 
  and (min-width: 375px)
  and (orientation: portrait) { 
    .imgtext {
      padding-top: 24%;
  }
}

@media only screen 
  and (min-width: 768px)
  and (orientation: portrait){
      .imgtext {
      padding-top: 12%;
  }
}
</style>