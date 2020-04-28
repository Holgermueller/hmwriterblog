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

      <v-card-text>
        <div v-html="blogbody"></div>

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
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  components: {},

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      })
    ])
      .then(([pages]) => {
        return {
          title: pages.items[0].fields.title,
          dateTime: pages.items[0].fields.dateTime,
          tags: pages.items[0].fields.tags,
          location: pages.items[0].fields.location,
          listeningTo: pages.items[0].fields.listeningTo,
          blogbody: documentToHtmlString(pages.items[0].fields.rtfBlog)
        }
      })
      .catch(console.error)
  },

  computed: {},

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
