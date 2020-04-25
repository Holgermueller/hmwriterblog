<template>
  <div class="preview">
    <v-col xs12 sm12 md12 lg4 xl4>
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
          <v-card-actions class="tags">{{ tags }}</v-card-actions>
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
    }
  },

  filters: {
    changeDateFilter: value => {
      return moment(value).format('dddd, Do MMM YYYY, LT')
    }
  }
}
</script>

<style scoped>
.preview-card {
  background-color: transparent;
  margin: auto;
  width: 95%;
  height: 100%;
  width: 100%;
}

.card-title {
  background-color: transparent;
}

.card-title-hover {
  background-color: #f7f9fb;
  color: #31708e;
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

.tags {
  background-color: #31708e;
  color: #f7f9fb;
}
</style>
