<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    color="primary"
    dark
    dense
    :clipped-left="true"
  >
    <v-app-bar-nav-icon
      :disabled="!toggleBtn"
      @click.stop="$emit('toggleSidebar')"
    />

    <div class="d-flex">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">Aplex vuetify admin</span>
    </v-toolbar-title>

    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn class="hidden-sm-and-down" icon>
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>

    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          icon
          v-on="on"
        >
          <v-avatar size="30px">
            <img src="@/assets/images/avatar.png" alt="Appleex">
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-0">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    toggleBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return ({
      items: [
        { text: 'profile', icon: 'mdi-clock', click: this.handleProfile },
        { text: 'settings', icon: 'mdi-account', click: this.handleSetting },
        { text: 'logout', icon: 'mdi-flag', click: this.handleLogout }
      ]
    })
  },
  computed: {
  },
  methods: {
    // handle logout
    async handleLogout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    // handle setting
    handleSetting() {
    },
    // handle profile
    handleProfile() {
    }
  }
}
</script>
