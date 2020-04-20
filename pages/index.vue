<template>
  <div id="home">
    <v-card class="page-header">
      <v-card-title class="headline text-center">
        Holger Mueller
      </v-card-title>
      <v-card-subtitle></v-card-subtitle>
      <v-card-text> </v-card-text>
    </v-card>

    <v-card class="recent-post">
      <v-card-title>Title will appear here</v-card-title>
      <v-card-subtitle>More info here</v-card-subtitle>
      <v-card-text>Body of story will appear here.</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.page-header {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  background-color: #f7f9fb;
}

.recent-post {
  width: 55%;
  margin: 3% auto 0;
  background-color: #f7f9fb;
}
</style>
