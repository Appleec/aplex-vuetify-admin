<template>
  <v-app class="app-wrapper">
    <!--header-->
    <app-navbar :toggle-btn="true" @toggleSidebar="toggleSidebar" class="nav-container" />

    <!--sidebar-->
    <app-sidebar ref="sidebar" class="sidebar-container" />

    <!--main-->
    <app-main class="main-container" />
  </v-app>
</template>

<script>
import { AppNavbar, AppSidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppSidebar,
    AppMain
  },
  data: () => ({
    //
    primaryDrawer: {
      model: null,
      type: 'temporary',
      clipped: true,
      floating: false,
      mini: false
    }
  }),
  computed: {
    key () {
      return this.$route.path
    }
  },
  mounted() {
    console.log(this.$vuetify)
  },
  methods: {
    toggleSidebar() {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleSidebar()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-container{
    z-index: 10!important;
  }
  .sidebar-container{
    /*top: 64px!important;*/
    /*max-height: calc(100% - 64px)!important;*/
  }
</style>
