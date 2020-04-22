<template>
  <div id="contactPage">
    <v-card class="page-content" tile>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              type="text"
              class="input-field"
              v-model="name"
              label="Name"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              type="email"
              class="input-field"
              v-model="email"
              label="Email"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-textarea
              type="text"
              class="input-field"
              v-model="message"
              label="Message"
              counter="1000"
              outlined
            ></v-textarea>
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
          <ul class="errors-list">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <b>Clear form to continue.</b>
        </v-alert>
      </section>

      <v-card-actions>
        <v-btn @click="clearContactForm" color="error" x-large tile
          >Clear</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
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
      alert: true
    }
  },

  methods: {
    checkFormData() {
      if (!this.name && !this.email && !this.message) {
        this.errors.push('Please fill out all the fields.')
      } else if (!this.name) {
        this.errors.push('Name requiredbundleRenderer.renderToString')
      } else if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.checkValidEmail(this.email)) {
        this.errors.push('Please provide a valid email.')
      } else if (!this.message) {
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

      this.clearContactForm()
    },

    clearContactForm() {
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
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f9fb;
}

#contactErrors {
  margin: 2% 0;
  text-align: center;
}

.alert {
  margin: 0 auto;
}

.errors-list {
  list-style: none;
}

.input-field {
  background-color: ghostwhite;
}
</style>
