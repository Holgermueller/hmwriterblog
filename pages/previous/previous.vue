<template>
  <div id="previousWritingsIndexPage">
    <section class="page-header-section">
      <h1 class="page-header display-2 font-weight-bold">
        Previous Posts
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        Check out some of my previous writings
      </h3>
    </section>

    <v-container class="previous-entries-container" fluid>
      <v-row align="center" justify="center" dense>
        <PreviewCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :id="post.id"
          :subtitle="post.subtitle"
          :previewDate="post.dateTime"
          :tags="post.tags"
          :author="post.author"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful/contentful'
const contentfulClient = createClient()
import PreviewCard from './previewCard'

export default {
  name: 'PreviousPosts',

  components: {
    PreviewCard
  },

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      })
    ])
      .then(([pages]) => {
        return {
          posts: pages.items.map(post => {
            return {
              id: post.sys.id,
              title: post.fields.title,
              subtitle: post.fields.subtitle,
              previewDate: post.fields.dateTime,
              tags: post.fields.tags,
              author: post.fields.author
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
  margin: 3% auto 0;
  text-align: center;
  padding: 0;
}

.previous-entries-container {
  margin: 0 auto 25%;
  align-content: center;
}
</style>
