import Vue from 'vue'
import Vuex from 'vuex'
import datastore from './datastore'
import data from './datastore/data'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
      datastore,
      data
    },

    state: {},
    getters: {},
    mutations: {},
    actions: {}
})

export default store