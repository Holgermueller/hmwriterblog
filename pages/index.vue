<template>
  <div id="home">
    <!-- <v-card class="page-header" tile>
      <v-card-title class="headline text-center">
        Holger Mueller
      </v-card-title>
      <v-card-subtitle></v-card-subtitle>
      <v-card-text> </v-card-text>
    </v-card> -->

    <h1 class="page-header display-3 font-weight-bold">
      Title will appear here
    </h1>

    <v-card class="recent-post" tile>
      <v-card-subtitle>More info here</v-card-subtitle>
      <v-card-text>Body of story will appear here. </v-card-text>

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
export default {
  components: {}
}
</script>

<style scoped>
/* .page-header {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  background-color: #f7f9fb;
} */

.recent-post {
  width: 55%;
  margin: 3% auto 0;
  background-color: #f7f9fb;
}

.page-header {
  color: #f7f9fb;
  width: 55%;
  margin: 3% auto 0;
  text-align: center;
}

a {
  color: #f7f9fb;
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
