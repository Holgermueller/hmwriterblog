<template>
  <div id="mailingList">
    <v-card class="mailing-list-content" tile>
      <v-card-title class="display-2">Join the Mailing List!</v-card-title>
      <v-card-text>
        <div class="mailing-list-message title">
          <p>Like what you've seen so far?</p>
          <p>
            Join the mailing list to get notified when new posts hit the site!
          </p>
        </div>

        <form
          ref="form"
          name="mailing-list"
          method="POST"
          action="/mailingList/thanks"
          netlify
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="mailing-list" />
          <p class="hidden">
            <label>Don't fill this out: <input name="bot-field" /> </label>
          </p>

          <label class="form-label" for="name">Name:</label>
          <input v-model="name" class="form-field" name="name" id="name" />

          <label class="form-label" for="email">Email:</label>
          <input v-model="email" class="form-field" name="email" id="email" />

          <input
            class="form-button"
            type="submit"
            value="Join!"
            :disabled="name === '' || email === ''"
          />
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MailingList',

  data() {
    return {
      disabled: true,
      name: '',
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

.hidden {
  display: none;
}

.form-field {
  width: 100%;
  height: 50px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  margin: 4px auto;
  padding-left: 8px;
}

.form-button {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: #31708e;
  color: #f7f9fb;
  font-size: 1rem;
  font-weight: bold;
}

.form-button:disabled {
  background-color: lightgrey;
}
</style>
