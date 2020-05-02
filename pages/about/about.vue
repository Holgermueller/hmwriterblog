<template>
  <div id="aboutPage">
    <div v-for="about in aboutData.slice(0, 1)" :key="about.sys.id">
      <h1 class="page-header display-3 font-weight-bold">
        {{ about.fields.aboutHeader }}
      </h1>

      <v-card class="about-page" tile>
        <v-card-subtitle class="font-weight-bold">
          <h3>Or: {{ about.fields.subTitle }}</h3>
        </v-card-subtitle>

        <v-card-text>
          <div>
            {{ about.fields.aboutBodyRtf }}
          </div>
        </v-card-text>

        <v-card-actions class="footer">
          <h3>
            <a href="https://twitter.com/thatHMMueller">
              <span class="mdi mdi-twitter"></span
            ></a>
          </h3>

          <v-spacer></v-spacer>

          <h6 class="copy">&copy; 2020 Holger Mueller</h6>

          <v-spacer></v-spacer>

          <h3>
            <a href="https://www.instagram.com/holgerj9">
              <span class="mdi mdi-instagram"></span
            ></a>
          </h3>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  name: 'About',

  computed: {
    aboutData() {
      return this.$store.state.about
    }
  }
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 85%;
  margin: 3% auto 0;
  text-align: center;
}

.about-page {
  width: 85%;
  margin: 2% auto;
  background-color: #f7f9fb;
}

a,
.copy {
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
