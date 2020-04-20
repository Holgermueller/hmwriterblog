<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="100%"
      hide-overlay
      fixed
      temporary
      app
      class="nav-drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="closeNav">
          <v-list-item-action>
            <v-icon class="mdi mdi-close"></v-icon>
          </v-list-item-action>
          <v-list-item-title>
            Close
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title>
        <strong to="/">
          Holger Mueller
        </strong>
        Writer | Traveller | Enthusiast</v-toolbar-title
      >
      <v-spacer />
    </v-app-bar>

    <v-content class="app-background">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer padless :fixed="fixed" app>
      <v-card class="footer" flat tile>
        <v-card-title>
          <h3>
            <a href="https://twitter.com/thatHMMueller">
              <span class="mdi mdi-twitter"></span
            ></a>
          </h3>

          <v-spacer></v-spacer>

          <h3>
            <a href="https://www.instagram.com/holgerj9">
              <span class="mdi mdi-instagram"></span
            ></a>
          </h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-subtitle class="text-center">
          <span>&copy; 2020- {{ new Date().getFullYear() }} </span>
          Holger Mueller
        </v-card-subtitle>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-progress-wrench',
          title: 'works In Progress',
          to: '/wip/wip'
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Previous Writings',
          to: '/previous/previous'
        },
        {
          icon: 'mdi-book-account',
          title: 'About',
          to: '/about/about'
        },
        {
          icon: 'mdi-laptop',
          title: 'Contact',
          to: '/contact/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  methods: {
    closeNav() {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.app-background {
  background-image: url('~assets/background.png');
}

.nav-drawer {
  background-color: #2e9cca;
}

.footer {
  background-color: #25274d;
  color: whitesmoke;
}
</style>
