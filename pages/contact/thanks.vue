<template>
  <div id="thanks">
    <v-card class="thank-you-card" tile>
      <v-card-title>
        Thanks for dropping us a line!
      </v-card-title>

      <v-card-text>We'll get back to you as soon as possible! </v-card-text>

      <v-card-actions>
        <nuxt-link to="/contact/contact"
          ><v-btn class="button white--text" color="#31708e" x-large tile block
            >Back</v-btn
          >
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Thanks'
}
</script>

<style scoped>
.thank-you-card {
  width: 85%;
  margin: 8% auto;
}

a {
  text-decoration: none;
  width: 100%;
}
</style>
