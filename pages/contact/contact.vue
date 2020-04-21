<template>
  <div id="contactPage">
    <v-card class="page-content" tile>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              class="input-field"
              v-model="name"
              label="Name"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              class="input-field"
              v-model="email"
              label="Email"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-textarea
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
          type="error"
          border="top"
          colored-border
          outlined
          width="75%"
          v-if="errors.length"
          dismissible
          class="alert"
        >
          <b>Please fix the following error(s):</b>
          <ul class="errors-list">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </v-alert>
      </section>

      <v-card-actions>
        <v-btn @click="clearContactForm" color="error" x-large tile
          >Clear</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click.prevent="checkFormData"
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
      errors: []
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
      console.log('Message sent!')
      this.clearContactForm()
    },

    clearContactForm() {
      this.$refs.form.reset()
    },

    dismissFormErrors() {
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
