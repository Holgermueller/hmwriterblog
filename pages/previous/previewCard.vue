<template>
  <div class="preview">
    <v-col cols="12" xs12 sm12 md6 lg6 xl4>
      <v-hover v-slot:default="{ hover }">
        <v-card class="preview-card" :elevation="hover ? 12 : 2" tile>
          <nuxt-link class="link-to-article" :to="'/previous/' + id">
            <v-card-title
              class=" card-title title font-weight-bold white--text "
              >{{ title }}</v-card-title
            >
            <v-card-subtitle class="subtitle-2 white--text">{{
              previewDate | changeDateFilter
            }}</v-card-subtitle>
          </nuxt-link>

          <v-card-text class="card-body font-regular">{{
            previewText
          }}</v-card-text>
          <v-card-actions class="tags"
            >{{ tags }}

            <v-spacer></v-spacer>

            <h6 class="copy">
              <span>&copy; {{ previewDate | getOnlyYearFilter }} </span>
              | {{ author }}
            </h6>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  props: {
    title: {
      type: String
    },

    previewText: {
      type: String
    },

    id: {
      type: String
    },

    previewDate: {
      type: String
    },

    tags: {
      type: String
    },

    author: {
      type: String
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
.preview-card {
  background-color: transparent;
  margin: auto;
  width: 250px;
  height: 100%;
}

.preview-card:hover {
  background-color: #31708e;
}

.card-title {
  background-color: transparent;
}

a {
  text-decoration: none;
}

.card-body {
  margin: 0;
  padding-top: 8px;
  background-color: #f7f9fb;
  height: 150px;
  color: #31708e;
}

.card-body:hover {
  background-color: ghostwhite;
  color: #000;
}

.tags {
  background-color: #31708e;
  color: #f7f9fb;
}
</style>
