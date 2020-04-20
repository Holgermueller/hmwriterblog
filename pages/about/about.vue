<template>
  <div id="aboutPage">
    <h1 class="page-header display-3 font-weight-bold">
      About
    </h1>

    <v-card class="about-page" tile>
      <!-- <v-card-title class="page-title">About</v-card-title> -->

      <v-card-subtitle>some info here</v-card-subtitle>

      <v-card-text>
        bio will appear here.
      </v-card-text>

      <v-card-actions class="footer">
        <h3>
          <a href="https://twitter.com/thatHMMueller">
            <span class="mdi mdi-twitter"></span
          ></a>
        </h3>

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
  name: 'About'
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 55%;
  margin: 3% auto 0;
  text-align: center;
}

.about-page {
  width: 55%;
  margin: 2% auto;
  background-color: #f7f9fb;
}

a {
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
