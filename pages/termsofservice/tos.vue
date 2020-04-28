<template>
  <div id="tos">
    <section>
      <h1 class="page-header">Terms of Service</h1>
    </section>

    <v-card class="page-content" tile>
      <v-card-text> Terms will appear here.</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TOS',

  data() {
    return {}
  }
}
</script>

<style scoped>
.page-header {
  color: #f7f9fb;
  width: 55%;
  margin: 3% auto 0;
  text-align: center;
}

.page-content {
  width: 75%;
  margin: 2% auto;
}
</style>
