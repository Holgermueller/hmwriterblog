// import { createClient } from '~/plugins/contentful/contentful'
// const contentfulClient = createClient()

// // export default {
// //   state: {
// //     blogPosts: {}
// //   },

// //   mutations: {
// //     setBlogPosts(state, payload) {
// //       state.blogPosts = payload
// //     }
// //   },

// //   actions: {
// //     getBlogPosts({ commit }) {
// //       contentfulClient
// //         .getEntries({
// //           content_type: 'blogPost',
// //           order: '-sys.createdAt'
// //         })
// //         .then(blogPost => {
// //           if (blogPost) {
// //             const blogPostsFromCMS = {
// //               title: blogPost.items.fields.title,
// //               blogbody: pages.items.fields.blogbody,
// //               dateTime: pages.items.fields.dateTime,
// //               tags: pages.items.fields.tags,
// //               location: pages.items.fields.location,
// //               listeningTo: pages.items.fields.listeningTo
// //             }
// //             commit('setBlogPosts', blogPostsFromCMS)
// //           }
// //         })
// //         .catch(err => {
// //           commit('setError', err)
// //         })
// //     }
// //   },

// //   getters: {
// //     blogPosts(state) {
// //       return state.blogPosts
// //     }
// //   }
// // }

// export const state = {
//   blogPosts: null
// }

// export const mutations = {
//   setBlogPosts(state, payload) {
//     state.blogPosts = payload
//   }
// }

// export const actions = {
//   getBlogPosts({ commit }) {
//     contentfulClient
//       .getEntries({
//         content_type: 'blogPost',
//         order: '-sys.createdAt'
//       })
//       .then(blogPost => {
//         if (blogPost) {
//           const blogPostsFromCMS = {
//             title: blogPost.items.fields.title,
//             blogbody: pages.items.fields.blogbody,
//             dateTime: pages.items.fields.dateTime,
//             tags: pages.items.fields.tags,
//             location: pages.items.fields.location,
//             listeningTo: pages.items.fields.listeningTo
//           }
//           commit('setBlogPosts', blogPostsFromCMS)
//         }
//       })
//       .catch(err => {
//         commit('setError', err)
//       })
//   }
// }

// export default {
//   state,
//   actions,
//   mutations
// }
