<template>
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
    <v-toolbar />
    <div>sdfkljl</div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSidebar',
  data: () => ({
    drawer: false,
    temporary: true,
    miniVariant: false,
    floating: false,
    clipped: true,
    routes: [
      {

      }
    ]
  }),
  computed: {
    autoTop () {
      const top = this.$vuetify && this.$vuetify.application.top

      return top + 'px'
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
