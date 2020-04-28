<template>
  <div id="contactPage">
    <v-card class="page-content" tile>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <form
          ref="form"
          name="contact"
          method="POST"
          action="/contact/thanks"
          netlify
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p class="hidden">
            <label>Don't fill this out: <input name="bot-field" /> </label>
          </p>

          <input
            type="text"
            class="form-field"
            v-model="name"
            placeholder="Name"
            name="name"
          />

          <input
            type="email"
            class="form-field"
            v-model="email"
            placeholder="Email"
            name="email"
          />

          <v-textarea
            type="text"
            class="text-field"
            v-model="message"
            placeholder="Message"
            name="message"
            counter="1000"
            outlined
          />

          <input
            id="clear"
            @click.prevent="resetForm"
            type="button"
            value="Clear"
            x-large
            tile
            block
          />

          <input
            id="submit"
            type="submit"
            name="submit"
            value="Submit"
            ref="submit"
            x-large
            tile
            block
            :disabled="name === '' || email === '' || message === ''"
          />
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  methods: {
    checkValidEmail(email) {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return regex.test(this.email)
    },

    resetForm() {
      this.$refs.form.reset()
      this.name = ''
      this.email = ''
      this.message = ''
      this.alert = false
      this.errors = []
    }
  }
}
</script>

<style scoped>
.page-content {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f9fb;
}

.alert,
.success {
  margin: 8px auto;
}

.errors-list {
  list-style: none;
  text-align: center;
}

.succssMessage {
  text-align: center;
}

.hidden {
  display: none;
}

.form-field {
  width: 100%;
  height: 50px;
  border: 1px solid darkgray;
  border-radius: 15px;
  margin: 8px auto;
  padding-left: 8px;
}

.text-field {
  margin: 8px auto;
}

#clear {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: orangered;
  color: #f7f9fb;
  font-size: 1rem;
  font-weight: bold;
}

#submit {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: #31708e;
  color: #f7f9fb;
  font-size: 1rem;
  font-weight: bold;
}

#submit:disabled {
  background-color: lightgrey;
}
</style>
