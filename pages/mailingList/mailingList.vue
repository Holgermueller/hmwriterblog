<template>
  <div id="mailingList">
    <v-card class="mailing-list-content">
      <v-card-title class="display-2">Join the Mailing List!</v-card-title>
      <v-card-text>
        <div class="mailing-list-message title">
          <p>Like what you've seen so far?</p>
          <p>
            Join the mailing list to get notified when new posts hit the site!
          </p>
        </div>

        <v-form
          ref="form"
          name="mailingList"
          method="POST"
          netlify
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" value="contact" />
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              type="email"
              class="input-field"
              label="Email"
              name="email"
              outlined
            />
          </v-flex>
          <v-btn
            ref="submit"
            color="#31708e"
            class="text--white"
            x-large
            tile
            block
            >Join!</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MailingList',

  data() {
    return {
      email: ''
    }
  }
}
</script>

<style scoped>
.mailing-list-content {
  width: 85%;
  margin: auto;
}
</style>
