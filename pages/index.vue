<template>
  <div id="home">
    <div v-for="post in posts.slice(0, 1)" :key="post.sys.id">
      <h1 class="page-header display-3 font-weight-bold">
        {{ post.fields.title }}
      </h1>
      <v-card class="recent-post" tile>
        <v-card-subtitle>
          <p>Location: {{ post.fields.location }}</p>
          <p>Date: {{ post.fields.dateTime | changeDateFilter }}</p>
          <p>Listening to: {{ post.fields.listeningTo }}</p>
        </v-card-subtitle>

        <v-divider />

        <v-card-text>
          <div v-html="blog"></div>

          <div>
            {{ post.fields.tags }}
          </div>
        </v-card-text>

        <v-card-actions class="footer">
          <h3>
            <a href="https://twitter.com/thatHMMueller">
              <span class="mdi mdi-twitter"></span
            ></a>
          </h3>

          <v-spacer></v-spacer>

          <h6 class="copy">
            <span>&copy; 2020 - {{ new Date().getFullYear() }} </span>
            Holger Mueller
          </h6>

          <v-spacer></v-spacer>

          <h3>
            <a href="https://www.instagram.com/holgerj9">
              <span class="mdi mdi-instagram"></span
            ></a>
          </h3>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
const moment = require('moment')
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },

  filters: {
    changeDateFilter: value => {
      return moment(value).format('dddd, Do MMMM YYYY, LT')
    }
  }
}
</script>

<style scoped>
.recent-post {
  width: 85%;
  margin: 3% auto 0;
  background-color: #f7f9fb;
}

.page-header {
  color: #f7f9fb;
  width: 85%;
  margin: 3% auto 0;
  text-align: center;
}

a {
  color: ghostwhite !important;
}

.copy {
  text-align: center;
  padding: 0;
  margin-top: 0.5em;
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
