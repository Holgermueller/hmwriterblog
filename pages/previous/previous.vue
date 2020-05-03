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
          :key="post.sys.id"
          :title="post.fields.title"
          :id="post.sys.id"
          :previewText="post.fields.subtitle"
          :previewDate="post.fields.dateTime"
          :tags="post.fields.tags"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PreviewCard from './previewCard'

export default {
  name: 'PreviousPosts',

  components: {
    PreviewCard
  },

  computed: {
    posts() {
      return this.$store.state.posts
    }
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
