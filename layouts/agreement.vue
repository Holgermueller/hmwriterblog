<template>
  <div id="agreement">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on }">
        <v-btn icon small color="#f7f9fb" v-on="on">
          <v-icon>mdi-file-document-outline</v-icon>
        </v-btn>
      </template>

      <v-card class="agreement-dialog" tile>
        <v-card-title class="white--text card-header">
          <h2>AGREEMENT</h2>
        </v-card-title>

        <v-card-subtitle class=" white--text subtitle">
          <h3>Welcome to the official site of Holger Mueller</h3>
        </v-card-subtitle>

        <v-card-text>
          <div class="warning-container">
            <h3 class="warning-notice">Before you proceed:</h3>

            <div class="the-warning">
              <p>
                Please be aware that by clicking agree you conscent to exposing
                yourself to material you may find offensive or distasteful.
              </p>

              <p>If you are easliy offened, please visit another website.</p>

              <p>Thank you.</p>
            </div>
          </div>

          <div class="checkbox">
            <v-checkbox
              v-model="checkBox"
              label="I understand and agree to these terms."
            ></v-checkbox>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="#31708e"
            class="white--text"
            @click="dialog = false"
            block
            tile
            :disabled="checkBox === false"
            >Agree!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Agreement',

  data() {
    return {
      dialog: true,
      checkBox: false
    }
  }
}
</script>

<style scoped>
.agreement-dialog {
  background-color: #f7f9fb;
}

.card-header,
.subtitle {
  background-color: #31708e;
  color: #f7f9fb;
}

.warning-container {
  width: 75%;
  margin: 8% auto;
}

.warning-notice {
  margin: 4% 0;
}

.the-warning {
  margin: 4px;
}

.checkbox {
  width: 75%;
  margin: auto;
}
</style>
