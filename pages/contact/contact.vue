<template>
  <div id="contactPage">
    <v-card class="page-content" tile>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-form
          name="contact"
          ref="form"
          method="post"
          data-netlify-recaptcha="true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          ></input>
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              type="text"
              class="input-field"
              v-model="name"
              label="Name"
              name="name"
              outlined
            />
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              type="email"
              class="input-field"
              v-model="email"
              label="Email"
              name="email"
              outlined
            />
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-textarea
              type="text"
              class="input-field"
              v-model="message"
              label="Message"
              name="message"
              counter="1000"
              outlined
            />
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <div data-netlify-recaptcha="true"></div>
          </v-flex>
        </v-form>
      </v-card-text>

      <section id="contactErrors">
        <v-alert
          v-model="alert"
          type="error"
          border="top"
          width="75%"
          v-if="errors.length"
          dark
          dismissible
          class="alert"
        >
          <b>Please fix the following error(s):</b>
          <br />
          <ul class="errors-list">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <br />
          <b>Clear form to continue.</b>
        </v-alert>
      </section>

      <section id="successAlert">
        <v-alert
          v-model="success"
          type="success"
          border="top"
          width="75%"
          dark
          dismissable
          class="success"
        >
          <b class="succssMessage">Your message has been sent!</b>
        </v-alert>
      </section>

      <v-card-actions>
        <v-btn @click.prevent="resetForm" color="error" x-large tile
          >Clear</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          name="submit"
          @click.prevent="checkFormData"
          ref="submit"
          color="#31708e"
          class="text--white"
          x-large
          tile
          :disabled="name === '' || email === '' || message === ''"
          >Submit</v-btn
        >
      </v-card-actions>
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
      message: '',
      errors: [],
      alert: false,
      success: false
    }
  },

  methods: {
    checkFormData() {
      if (!this.name && !this.email && !this.message) {
        this.alert = true
        this.errors.push('Please fill out all the fields.')
      } else if (!this.name) {
        this.alert = true
        this.errors.push('Name requiredbundleRenderer.renderToString')
      } else if (!this.email) {
        this.alert = true
        this.errors.push('Email required.')
      } else if (!this.checkValidEmail(this.email)) {
        this.alert = true
        this.errors.push('Please provide a valid email.')
      } else if (!this.message) {
        this.alert = true
        this.errors.push('Message required.')
      } else {
        this.sendMessage()
      }
    },

    checkValidEmail(email) {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return regex.test(this.email)
    },

    sendMessage() {
      const messageInfo = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      console.log(messageInfo)

      this.resetForm()
      this.success = true

      this.setTimer()
    },

    resetForm() {
      this.$refs.form.reset()
      this.name = ''
      this.email = ''
      this.message = ''
      this.alert = false
      this.errors = []
    },

    setTimer() {
      setTimeout(() => (this.success = false), 5000)
    }
  }
}
</script>

<style scoped>
.page-content {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f9fb;
}

.alert,
.success {
  margin: 0 auto;
}

.errors-list {
  list-style: none;
  text-align: center;
}

.succssMessage {
  text-align: center;
}

.input-field {
  background-color: ghostwhite;
}
</style>
