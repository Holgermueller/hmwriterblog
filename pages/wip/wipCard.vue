<template>
  <div class="wip-card">
    <v-col xs12 sm12 md12 lg4 xl4>
      <v-hover v-slot:default="{ hover }">
        <v-card class="wip-preview-card" :elevation="hover ? 12 : 2" tile>
          <nuxt-link :to="'/wip/' + id">
            <v-card-title class="card-title title white--text">{{
              title
            }}</v-card-title>
            <v-card-subtitle class="subtitle-2 white--text">{{
              dateAndTime | changeDateFilter
            }}</v-card-subtitle>
          </nuxt-link>

          <v-card-text class="card-body font-regular">
            {{ description }}
          </v-card-text>
          <v-card-actions class="tags"></v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  name: 'WIPCard',

  props: {
    id: {
      type: String
    },

    title: {
      type: String
    },

    description: {
      type: String
    },

    dateAndTime: {
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
.wip-preview-card {
  background-color: transparent;
  margin: auto;
  width: 95%;
  height: 100%;
  width: 100%;
}

.wip-preview-card:hover {
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

.tags {
  background-color: #31708e;
  color: #f7f9fb;
}
</style>
