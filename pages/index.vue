<template>
  <div id="home">
    <section class="page-header-section">
      <h1 class="page-header display-3 font-weight-bold">
        {{ title }}
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        <ul class="info-list">
          <li>Location: {{ location }}</li>
          <li>Date: {{ dateTime | changeDateFilter }}</li>
          <li>Listening to: {{ listeningTo }}</li>
        </ul>
      </h3>
    </section>

    <v-card class="recent-post" tile>
      <v-card-text>
        <div class="landing-post" v-html="blogbody"></div>

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

.info-list {
  background-color: transparent;
  list-style-type: none;
  text-align: left;
}

a {
  color: ghostwhite !important;
}

.landing-post {
  color: #080808;
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
