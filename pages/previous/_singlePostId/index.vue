<template>
  <div class="post">
    <section class="page-header-section">
      <h1 class="page-header display-3 font-weight-bold white--text">
        {{ thisPost.fields.title }}
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        <ul class="info-list ">
          <li>
            When:
            {{ thisPost.fields.dateTime | changeDateFilter }}
          </li>
          <li>
            Where:
            {{ thisPost.fields.location }}
          </li>
          <li>
            Listening to:
            {{ thisPost.fields.listeningTo }}
          </li>
        </ul>
      </h3>
    </section>

    <v-card class="post-content" tile>
      <v-card-text class="card-body">
        <div class="content" v-html="thisPost.fields.content"></div>

        <div class="tags">
          {{ thisPost.fields.tags }}
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
          <span
            >&copy; {{ thisPost.fields.dateTime | getOnlyYearFilter }}
          </span>
          | {{ thisPost.fields.author }}
        </h6>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const moment = require('moment')
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  name: 'SinglePreviousPost',

  data() {
    return {
      id: this.$route.params.singlePostId
    }
  },

  computed: {
    thisPost() {
      let post = this.$store.state.posts.filter(el => el.sys.id === this.id)
      return post[0]
    }
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

.info-list {
  background-color: transparent;
  list-style-type: none;
  text-align: left;
}

.post-content {
  background-color: transparent;
  width: 85%;
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
