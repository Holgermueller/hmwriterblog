<template>
  <div id="home">
    <h1 class="page-header display-3 font-weight-bold">
      {{ title }}
    </h1>

    <v-card class="recent-post" tile>
      <v-card-subtitle>
        <p>Location: {{ location }}</p>
        <p>Date: {{ dateTime | changeDateFilter }}</p>
        <p>Listening to: {{ listeningTo }}</p>
      </v-card-subtitle>

      <v-divider></v-divider>

      <v-card-text
        >{{ blogbody }}

        <div>
          {{ tags }}
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
</template>

<script>
const moment = require('moment')
import { createClient } from '~/plugins/contentful/contentful'
const contentfulClient = createClient()

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },

  components: {},

  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
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
/* .page-header {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  background-color: #f7f9fb;
} */

.recent-post {
  width: 55%;
  margin: 3% auto 0;
  background-color: #f7f9fb;
}

.page-header {
  color: #f7f9fb;
  width: 55%;
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
