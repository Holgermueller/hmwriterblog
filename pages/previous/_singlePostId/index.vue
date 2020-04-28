<template>
  <div class="post">
    <section class="page-header-section">
      <h1 class="page-header display-3 font-weight-bold white--text">
        {{ title }}
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        <ul class="info-list ">
          <li>
            When:
            {{ dateTime | changeDateFilter }}
          </li>
          <li>
            Where:
            {{ location }}
          </li>
          <li>
            Listening to:
            {{ listeningTo }}
          </li>
        </ul>
      </h3>
    </section>

    <v-card class="post-content" tile>
      <v-card-text class="card-body">
        <div class="content" v-html="content"></div>

        <div class="tags">
          {{ tags }}
        </div>
      </v-card-text>

      <v-card-actions class="footer">
        <nuxt-link to="/previous/previous">
          <v-btn class="white--text" text>
            <span class="mdi mdi-arrow-left-bold"></span>
            BACK</v-btn
          >
        </nuxt-link>

        <v-spacer></v-spacer>

        <h6 class="copy">
          <span>&copy; {{ dateTime | getOnlyYearFilter }} </span>
          | {{ author }}
        </h6>
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
  name: 'SinglePreviousPost',

  asyncData({ data, params }) {
    return Promise.all([contentfulClient.getEntry(params.singlePostId)]).then(
      ([page]) => {
        return {
          title: page.fields.title,
          location: page.fields.location,
          dateTime: page.fields.dateTime,
          tags: page.fields.tags,
          content: documentToHtmlString(page.fields.rtfBlog),
          author: page.fields.author,
          listeningTo: page.fields.listeningTo
        }
      }
    )
  },

  filters: {
    changeDateFilter: value => {
      return moment(value).format('dddd, Do MMM YYYY, LT')
    },

    getOnlyYearFilter: value => {
      return moment(value).format('YYYY')
    }
  }
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 55%;
  margin: 3% auto;
  text-align: center;
  padding: 0;
}

.info-list {
  background-color: transparent;
  list-style-type: none;
  text-align: left;
}

.post-content {
  background-color: transparent;
  width: 75%;
  margin: auto;
}

.card-body {
  background-color: #f7f9fb;
}

.tags {
  bottom: 0;
  margin-top: 1%;
}

.copy {
  text-align: center;
  padding: 0;
  margin-top: 0.5em;
  margin-right: 0.5em;
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
