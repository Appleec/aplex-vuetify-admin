<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer
    v-model="drawer"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="miniVariant"
    :temporary="temporary"
    app
    overflow
    width="232"
    mobile-break-point="400"
  >
    <!--占位符-->
    <v-toolbar dense />

    <v-list dense expand>
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'AppSidebar',
  components: { SidebarItem },
  data() {
    this.onlyOneChild = null
    return ({
      drawer: false,
      temporary: true,
      miniVariant: false,
      floating: false,
      clipped: true,
      items: [
        { icon: 'mdi-home', text: 'Home' },
        {
          icon: 'mdi-settings',
          text: 'Table',
          children: [
            { icon: '', text: 'set version' },
            { icon: '', text: 'set user' }
          ]
        },
        {
          icon: 'mdi-settings',
          text: 'Setting',
          children: [
            { icon: '', text: 'set version' },
            { icon: '', text: 'set user' }
          ]
        }
      ]
    })
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>
</style>
