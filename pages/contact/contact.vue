<template>
  <div id="contactPage">
    <v-card class="page-content" tile>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field v-model="name" label="Name" outlined></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field v-model="email" label="Email" outlined></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-textarea
              v-model="message"
              label="Message"
              counter="1000"
              outlined
            ></v-textarea>
          </v-flex>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clearContactForm" x-large>Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="sendMessage" x-large>Submit</v-btn>
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
      message: ''
    }
  },

  methods: {
    clearContactForm() {
      this.$refs.form.reset()
    },

    sendMessage() {
      this.clearContactForm()
    }
  }
}
</script>

<style scoped>
.page-content {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
}
</style>
