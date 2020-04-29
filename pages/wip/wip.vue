<template>
  <div id="wip">
    <section class="page-header-section">
      <h1 class="page-header display-2 font-weight-bold">
        Works in progress
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        Some unfinished work that I'm still proud of
      </h3>
    </section>

    <v-container class="wip-entries-container" fluid>
      <v-row align="center" justify="center">
        <wipCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :id="post.id"
          :description="post.description"
          :dateAndTime="post.dateAndTime"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful/contentful'
const contentfulClient = createClient()
import wipCard from './wipCard'

export default {
  name: 'WIP',

  components: {
    wipCard
  },

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'workInProgress',
        order: '-sys.createdAt'
      })
    ])
      .then(([pages]) => {
        return {
          posts: pages.items.map(post => {
            return {
              id: post.sys.id,
              title: post.fields.title,
              description: post.fields.description,
              dateAndTime: post.fields.dateAndTime
            }
          })
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 85%;
  margin: 3% auto;
  text-align: center;
  padding: 0;
}

.wip-entries-container {
  margin: 0 auto 25%;
  align-content: center;
}
</style>
