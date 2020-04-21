<template>
  <div class="single-wip">
    <v-card>
      <v-card-title>Title will appear here</v-card-title>

      <v-card-subtitle>More data here</v-card-subtitle>

      <v-card-text>
        Body of story will appear here.
      </v-card-text>

      <v-card-actions class="footer">
        <h6 class="copy">
          <span>&copy; Year when story was written. </span>
          Holger Mueller
        </h6>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  Name: 'SingleWIPPost',

  data() {
    return {}
  }
}
</script>

<style scoped>
.copy {
  text-align: center;
  padding: 0;
  margin-top: 0.5em;
  color: #f7f9fb;
}

.footer {
  width: 100%;
  background-color: #31708e;
}
</style>
