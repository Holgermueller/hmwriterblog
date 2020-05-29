<template>
  <div class="single-wip">
    <section class="page-header-section">
      <h1 class="page-header display-3 font-weight-bold white--text">
        {{ title }}
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        {{ dateAndTime | changeDateFilter }}
      </h3>
    </section>

    <v-card class="post-content" tile>
      <v-card-text class="card-body">
        <div class="content" v-html="blogPost"></div>
      </v-card-text>

      <v-card-actions class="footer">
        <nuxt-link to="/wip/wip">
          <v-btn class="white--text" text>
            <span class="mdi mdi-arrow-left-bold"></span>
            BACK</v-btn
          >
        </nuxt-link>

        <v-spacer></v-spacer>

        <h6 class="copy">
          <span>&copy; {{ dateAndTime | getOnlyYearFilter }} </span>
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
  Name: 'SingleWIPPost',

  asyncData({ data, params }) {
    return Promise.all([contentfulClient.getEntry(params.singleWIPId)]).then(
      ([page]) => {
        return {
          title: page.fields.title,
          author: page.fields.author,
          dateAndTime: page.fields.dateAndTime,
          blogPost: documentToHtmlString(page.fields.wipBody)
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
  width: 85%;
  margin: 3% auto;
  text-align: center;
  padding: 0;
}

.post-content {
  background-color: transparent;
  width: 85%;
  margin: auto;
}

.title {
  text-align: left;
}

.card-body {
  background-color: #f7f9fb;
}

.content {
  color: #080808;
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
