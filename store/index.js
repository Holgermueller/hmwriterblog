import { createClient } from '~/plugins/contentful/contentful'
const contentfulClient = createClient()

export const state = () => ({
  posts: null,
  about: null
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },

  loadAbout: (state, payload) => {
    state.about = payload
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!contentfulClient) return
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      })
      if (response.items.length > 0) commit('updatePosts', response.items)
    } catch (err) {
      console.error(err)
    }
  },

  async getAbout({ commit }) {
    try {
      if (!contentfulClient) return
      const response = await contentfulClient.getEntries({
        content_type: 'about',
        order: '-sys.id'
      })
      if (response.items.length > 0) commit('loadAbout', response.items)
    } catch (err) {
      console.error(err)
    }
  }
}
