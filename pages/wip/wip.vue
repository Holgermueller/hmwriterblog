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
          v-for="post in wips"
          :key="post.sys.id"
          :title="post.fields.title"
          :id="post.sys.id"
          :description="post.fields.description"
          :dateAndTime="post.fields.dateAndTime"
          :author="post.fields.author"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import wipCard from './wipCard'

export default {
  name: 'WIP',

  components: {
    wipCard
  },

  computed: {
    wips() {
      return this.$store.state.wip
    }
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
