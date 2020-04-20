<template>
  <div id="previousWritingsIndexPage">
    <v-card class="page-header">
      <v-card-title>Previous Posts</v-card-title>

      <v-card-subtitle>
        Check out some of my previous writings
      </v-card-subtitle>
    </v-card>

    <v-container class="previous-entries-container" fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="preview-card" :elevation="hover ? 12 : 2" tile>
              <v-card-title>Title will appear here</v-card-title>
              <v-card-subtitle>More info here</v-card-subtitle>
              <v-card-text>Teaser for entry here</v-card-text>
              <v-card-actions>tags here</v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PreviousPosts',

  data() {
    return {}
  }
}
</script>

<style scoped>
.previous-entries-container {
  width: 75%;
}

.preview-card {
  margin: 8%;
}
</style>
