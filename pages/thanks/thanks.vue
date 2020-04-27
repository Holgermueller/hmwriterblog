<template>
  <div id="thanks">
    <v-card tile>
      <v-card-title>
        Thanks for dropping us a line!
      </v-card-title>

      <v-card-text>We'll get back to you as soon as possible! </v-card-text>

      <v-card-actions>
        <v-btn <nuxt-link to="../../contact"></nuxt-link> block>Back</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Thanks'
}
</script>
