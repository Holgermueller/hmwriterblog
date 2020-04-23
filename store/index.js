import Vue from 'vue'
import Vuex from 'vuex'

import contact from './contact'
import blogPosts from './blogPosts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    contact: contact,
    blogPosts: blogPosts
  }
})
