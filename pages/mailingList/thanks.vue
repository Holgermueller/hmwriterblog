<template>
  <div id="mLThanks">
    <v-card class="thank-you-card" tile>
      <v-card-title>Thank you for joining our mailing list!</v-card-title>
      <v-card-text>
        <p>Be on the lookout for updates from us in your inbox!</p>

        <p>Check your spam folder too.</p>
      </v-card-text>

      <v-card-actions>
        <nuxt-link to="/">
          <v-btn class="button white--text" color="#31708e" tile block
            >Home</v-btn
          >
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MailingListThanks'
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
