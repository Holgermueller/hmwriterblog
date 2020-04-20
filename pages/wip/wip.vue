<template>
  <div id="wip">
    <section class="page-header-section">
      <h1 class="page-header display-2 font-weight-bold">
        Works in progress
      </h1>

      <hr class="page-header font-weight-bold" />

      <h3 class="page-header title font-weight-bold">
        Some things I'm working on, but still proud of
      </h3>
    </section>

    <v-container class="wip-entries-container" fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="wip-preview-card" :elevation="hover ? 12 : 2" tile>
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
  name: 'WIP',

  data() {
    return {}
  }
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 55%;
  margin: 3% auto;
  text-align: center;
}

.wip-entries-container {
  margin-top: 0;
  width: 75%;
}

.wip-preview-card {
  margin: 4%;
}
</style>
