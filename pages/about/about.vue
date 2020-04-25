<template>
  <div id="aboutPage">
    <h1 class="page-header display-3 font-weight-bold">
      {{ header }}
    </h1>

    <v-card class="about-page" tile>
      <v-card-subtitle class="font-weight-bold">
        <h3>Or: {{ subTitle }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <div v-html="aboutBody"></div>
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
</template>

<script>
import { createClient } from '~/plugins/contentful/contentful'
const contentfulClient = createClient()
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  name: 'About',

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'about',
        order: '-sys.id'
      })
    ])
      .then(([page]) => {
        return {
          header: page.items[0].fields.aboutHeader,
          aboutBody: documentToHtmlString(page.items[0].fields.aboutBodyRtf),
          subTitle: page.items[0].fields.subTitle
        }
      })
      .catch(console.error)
  }
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

a,
.copy {
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
