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
          class="nav-links"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="closeNav">
          <v-list-item-action>
            <v-icon class="mdi mdi-close"></v-icon>
          </v-list-item-action>
          <v-list-item-title class="title">
            Close
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed color="#31708e" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#f7f9fb" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="#f7f9fb"
          >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
        >
      </v-btn>

      <v-toolbar-title>
        <nuxt-link to="/">
          <strong class="title name">
            Holger Mueller
          </strong></nuxt-link
        >

        <small class="overline tagline">
          Writer | Traveller | Enthusiast
        </small>
      </v-toolbar-title>
      <v-spacer />

      <Agreement />
    </v-app-bar>

    <v-content class="app-background">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Agreement from './agreement'

export default {
  components: {
    Agreement
  },

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
          title: 'Works In Progress',
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
        },
        {
          icon: 'mdi-scale-balance',
          title: 'Terms of Service',
          to: '/termsofservice/tos'
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
  background-image: url('~assets/backgroundimagestone.png');
}

.nav-drawer {
  background-color: #8fc1e3;
}

.name {
  margin-right: 0.5em;
  color: #f7f9fb;
}

a {
  text-decoration: none;
  color: #f7f9fb;
}

.nav-links {
  color: #f7f9fb;
}

.tagline {
  color: #f7f9fb;
}
</style>
